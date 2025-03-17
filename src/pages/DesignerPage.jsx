import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { Stage, Layer, Text, Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { FaUndo, FaRedo, FaSave, FaEye, FaSearch, FaShare, FaCheck, FaTrash } from 'react-icons/fa';
import JSZip from 'jszip';
import Konva from 'konva';

// Import shirt images
import frontShirt from '../assets/shirt-front.png';
import backShirt from '../assets/shirt-back.png';
import leftShirt from '../assets/shirt-left.png';
import rightShirt from '../assets/shirt-right.png';

// Import different shirt models (you'll need to add these image files)
import frontShirtV2 from '../assets/shirt-v2-front.png';
import backShirtV2 from '../assets/shirt-v2-back.png';
import leftShirtV2 from '../assets/shirt-v2-left.png';
import rightShirtV2 from '../assets/shirt-v2-right.png';


const SHIRT_MODELS = {
  white: {
    name: 'White',
    color: '#FFFFFF',
    images: {
      front: frontShirt,
      back: backShirt,
      left: leftShirt,
      right: rightShirt,
    }
  },
  black: {
    name: 'Black',
    color: '#000000',
    images: {
      front: frontShirtV2,
      back: backShirtV2,
      left: leftShirtV2,
      right: rightShirtV2,
    }
  }
};

const DecorationImage = ({ decoration, isSelected, onSelect, onDragEnd, onTransformEnd }) => {
  const [image] = useImage(decoration.src);

  return image && (
    <Image
      id={decoration.id}
      image={image}
      x={decoration.x}
      y={decoration.y}
      width={decoration.width}
      height={decoration.height}
      draggable={false}
      onClick={() => onSelect(decoration.id)}
    />
  );
};

// Add this type of structure for the database
const PRINT_SPECIFICATIONS = {
  sizes: {
    'S': { width: 35, height: 45, printArea: { x: 10, y: 10, width: 25, height: 35 } },
    'M': { width: 40, height: 50, printArea: { x: 12, y: 12, width: 28, height: 38 } },
    'L': { width: 45, height: 55, printArea: { x: 14, y: 14, width: 31, height: 41 } }
  },
  dpi: 300, // Printing resolution
  printTechnology: 'DTG', // Direct to Garment printing
};

const DesignerPage = () => {
  const [activeView, setActiveView] = useState('front');
  const [selectedModel, setSelectedModel] = useState('white');
  const [shirtColor, setShirtColor] = useState({ r: 255, g: 255, b: 255 });
  const [viewStates, setViewStates] = useState({
    front: {
      text: 'Your Text',
      textPosition: { x: 105, y: 200 },
      textColor: '#000000',
      textScale: 1,
      decorations: [{
        id: 'default-tshirt-icon',
        src: '/path/to/tshirt-icon.png',
        x: 10,
        y: 40,
        width: 20,
        height: 20,
        scale: 1
      }]
    },
    back: {
      text: 'Your Text',
      textPosition: { x: 105, y: 100 },
      textColor: '#000000',
      textScale: 1,
      decorations: [{
        id: 'default-tshirt-icon-back',
        src: '/path/to/tshirt-icon.png',
        x: 170,
        y: 40,
        width: 90,
        height: 90,
        scale: 1
      }]
    },
    left: {
      text: '',
      textPosition: { x: 105, y: 200 },
      textColor: '#000000',
      textScale: 1,
      decorations: []
    },
    right: {
      text: '',
      textPosition: { x: 105, y: 200 },
      textColor: '#000000',
      textScale: 1,
      decorations: []
    }
  });

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedId, setSelectedId] = useState(null);
  
  const stageRef = useRef();
  const transformerRef = useRef();
  const dispatch = useDispatch();

  // Load shirt images for all views based on selected model
  const [frontImage] = useImage(SHIRT_MODELS[selectedModel].images.front);
  const [backImage] = useImage(SHIRT_MODELS[selectedModel].images.back);
  const [leftImage] = useImage(SHIRT_MODELS[selectedModel].images.left);
  const [rightImage] = useImage(SHIRT_MODELS[selectedModel].images.right);

  const sizes = ['S', 'M', 'L'];

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Please upload an image under 5MB!');
      return;
    }

    // Kiểm tra xem view hiện tại đã có decoration chưa
   

    try {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const img = new window.Image();
      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = (e) => reject(e);
        img.src = base64;
      });

      // Điều chỉnh kích thước dựa vào view
      let width, height;
      if (activeView === 'back') {
        width = 130;  // Kích thước lớn cho mặt sau
        height = (img.height / img.width) * width;
        if (height > 200) {
          const ratio = 200 / height;
          width *= ratio;
          height *= ratio;
        }
      } else if (activeView === 'left' || activeView === 'right') {
        width = 90;   // Kích thước trung bình cho mặt bên
        height = (img.height / img.width) * width;
        if (height > 120) {
          const ratio = 120 / height;
          width *= ratio;
          height *= ratio;
        }
      } else {
        width = 60;   // Kích thước nhỏ cho mặt trước
        height = (img.height / img.width) * width;
        if (height > 80) {
          const ratio = 80 / height;
          width *= ratio;
          height *= ratio;
        }
      }

      // Xác định vị trí dựa trên view hiện tại
      let defaultPosition = {
        x: activeView === 'front' ? 120 :           // Góc trái cho mặt trước
           activeView === 'back' ? 138 :            // Giữa cho mặt sau
           activeView === 'left' ? 168 :             // Gần mép trái cho mặt trái
           130,                                     // Gần mép phải cho mặt phải
        y: activeView === 'back' ? 170 :            // Thấp hơn cho mặt sau
           activeView === 'left' || activeView === 'right' ? 250 :  // Vị trí cho mặt bên
           90                                       // Vị trí cho mặt trước
      };

      const decorationId = Date.now().toString();
      const newDecoration = {
        id: decorationId,
        src: base64,
        x: defaultPosition.x,
        y: defaultPosition.y,
        width,
        height,
        scale: 1
      };

      // Thay thế hoàn toàn mảng decorations thay vì thêm mới
      setViewStates(prev => ({
        ...prev,
        [activeView]: {
          ...prev[activeView],
          decorations: [newDecoration]  // Chỉ giữ một decoration
        }
      }));

      setSelectedId(decorationId);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  const getCurrentImage = () => {
    switch (activeView) {
      case 'front':
        return frontImage;
      case 'back':
        return backImage;
      case 'left':
        return leftImage;
      case 'right':
        return rightImage;
      default:
        return frontImage;
    }
  };

  const handleDownload = async () => {
    const zip = new JSZip();
    const views = ['front', 'back', 'left', 'right'];
    
    // Store current view
    const currentView = activeView;
    
    try {
      // Generate images for all views
      for (const view of views) {
        setActiveView(view);
        // Wait for stage to update
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const dataURL = stageRef.current.toDataURL();
        const data = dataURL.split(',')[1];
        zip.file(`design-${view}.png`, data, { base64: true });
      }
      
      // Generate and download zip
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'shirt-designs.zip';
      link.click();
    } catch (error) {
      console.error('Error generating designs:', error);
      alert('Error generating designs. Please try again.');
    } finally {
      // Restore original view
      setActiveView(currentView);
    }
  };

  const saveDesignToCart = () => {
    // Generate high-resolution design data for each view
    const designData = {
      id: Date.now(),
      name: 'Custom Shirt',
      price: 30,
      size: selectedSize,
      model: selectedModel,
      shirtColor: shirtColor,
      printSpecifications: PRINT_SPECIFICATIONS[selectedSize],
      views: {},
      created_at: new Date().toISOString(),
      status: 'pending',
      printingInstructions: {
        technology: PRINT_SPECIFICATIONS.printTechnology,
        dpi: PRINT_SPECIFICATIONS.dpi,
        notes: 'Handle with care for color accuracy'
      }
    };

    // Save data for each view
    ['front', 'back', 'left', 'right'].forEach(view => {
      const viewState = viewStates[view];
      designData.views[view] = {
        // Base image data
        baseImage: SHIRT_MODELS[selectedModel].images[view],
        // Text elements
        text: {
          content: viewState.text,
          position: viewState.textPosition,
          color: viewState.textColor,
          scale: viewState.textScale,
          fontSize: 24 * viewState.textScale,
        },
        // Decorations/Images
        decorations: viewState.decorations.map(dec => ({
          imageData: dec.src,
          position: { x: dec.x, y: dec.y },
          dimensions: {
            width: dec.width,
            height: dec.height,
            scale: dec.scale
          }
        })),
        // High resolution render of the final design
        finalRender: stageRef.current?.toDataURL({
          pixelRatio: 3,
          mimeType: 'image/png',
          quality: 1
        })
      };
    });

    // Add to cart in Redux
    dispatch(addToCart(designData));

    // Log detailed specifications
    console.group(' Design Specifications');
    
    console.log(' Basic Information:', {
      id: designData.id,
      name: designData.name,
      price: designData.price,
      created_at: designData.created_at
    });

    console.log(' Shirt Details:', {
      size: designData.size,
      model: designData.model,
      color: designData.shirtColor
    });

    console.log(' Print Specifications:', {
      size: PRINT_SPECIFICATIONS[selectedSize],
      dpi: PRINT_SPECIFICATIONS.dpi,
      technology: PRINT_SPECIFICATIONS.printTechnology
    });

    console.group('🎯 Design Details by View');
    Object.entries(designData.views).forEach(([view, data]) => {
      console.group(`View: ${view}`);
      console.log('Text:', {
        content: data.text.content,
        position: data.text.position,
        color: data.text.color,
        scale: data.text.scale,
        fontSize: data.text.fontSize
      });
      console.log('Decorations:', data.decorations.map(dec => ({
        position: dec.position,
        dimensions: dec.dimensions
      })));
      console.groupEnd();
    });
    console.groupEnd();

    console.log('🎯 Print Area Dimensions:', {
      printArea: PRINT_SPECIFICATIONS[selectedSize].printArea,
      totalSize: {
        width: PRINT_SPECIFICATIONS[selectedSize].width,
        height: PRINT_SPECIFICATIONS[selectedSize].height
      }
    });

    console.groupEnd();

    // Database entry structure
    const databaseEntry = {
      design_id: designData.id,
      customer_id: 'current_user_id',
      order_details: {
        size: designData.size,
        model: designData.model,
        shirt_color: designData.shirtColor,
        price: designData.price,
        status: designData.status
      },
      printing_specifications: {
        ...designData.printSpecifications,
        ...designData.printingInstructions
      },
      design_data: {
        views: Object.entries(designData.views).map(([viewName, viewData]) => ({
          view_name: viewName,
          text_elements: viewData.text,
          decorations: viewData.decorations,
          high_res_render: viewData.finalRender
        }))
      },
      metadata: {
        created_at: designData.created_at,
        updated_at: new Date().toISOString(),
        version: '1.0'
      }
    };

    console.log('📦 Database Entry Structure:', databaseEntry);

    alert('Design added to cart and saved for printing!');
  };

  const handleDecorationDragEnd = (e, decorationId) => {
    const node = e.target;
    setViewStates(prev => ({
      ...prev,
      [activeView]: {
        ...prev[activeView],
        decorations: prev[activeView].decorations.map(dec =>
          dec.id === decorationId
            ? { ...dec, x: node.x(), y: node.y() }
            : dec
        )
      }
    }));
  };

  const handleTransformEnd = (e, decorationId) => {
    const node = e.target;
    setViewStates(prev => ({
      ...prev,
      [activeView]: {
        ...prev[activeView],
        decorations: prev[activeView].decorations.map(dec =>
          dec.id === decorationId
            ? {
                ...dec,
                width: node.width() * node.scaleX(),
                height: node.height() * node.scaleY(),
                x: node.x(),
                y: node.y(),
                scale: node.scaleX()
              }
            : dec
        )
      }
    }));
  };

  const handleTextDragEnd = (e) => {
    setViewStates(prev => ({
      ...prev,
      [activeView]: {
        ...prev[activeView],
        textPosition: { x: e.target.x(), y: e.target.y() }
      }
    }));
  };

  const handleZoomText = () => {}

  const handleZoomDecoration = () => {}

  const removeDecoration = (decorationId) => {
    setViewStates(prev => ({
      ...prev,
      [activeView]: {
        ...prev[activeView],
        decorations: prev[activeView].decorations.filter(dec => dec.id !== decorationId)
      }
    }));
    setSelectedId(null);
  };

  React.useEffect(() => {
    if (selectedId && transformerRef.current) {
      const node = stageRef.current.findOne('#' + selectedId);
      if (node) {
        transformerRef.current.nodes([node]);
        transformerRef.current.getLayer().batchDraw();
      }
    }
  }, [selectedId]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Model Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Shirt Style</h3>
          <div className="flex space-x-4">
            {Object.entries(SHIRT_MODELS).map(([key, model]) => (
              <button
                key={key}
                className={`w-12 h-12 rounded-full border-2 ${
                  selectedModel === key ? 'border-blue-500' : 'border-gray-300'
                } hover:border-blue-500 transition-all duration-200`}
                style={{ 
                  backgroundColor: model.color,
                  boxShadow: selectedModel === key ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none'
                }}
                onClick={() => setSelectedModel(key)}
                title={model.name}
              />
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded" onClick={handleDownload} title="Save All Views">
              <FaSave />
            </button>
          </div>
        </div>

        {/* View Selection */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            {['front', 'back', 'left', 'right'].map((view) => (
              <button
                key={view}
                className={`px-4 py-2 rounded ${
                  activeView === view ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveView(view)}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="flex justify-center items-center p-4">
              <Stage 
                width={400} 
                height={500} 
                ref={stageRef}
                onClick={(e) => {
                  const clickedOnEmpty = e.target === e.target.getStage();
                  if (clickedOnEmpty) {
                    setSelectedId(null);
                  }
                }}
              >
                <Layer>
                  <Image
                    image={getCurrentImage()}
                    width={400}
                    height={500}
                    filters={[Konva.Filters.RGB]}
                    red={shirtColor.r}
                    green={shirtColor.g}
                    blue={shirtColor.b}
                  />
                  {viewStates[activeView].decorations.map((decoration) => (
                    <DecorationImage
                      key={decoration.id}
                      decoration={decoration}
                      isSelected={selectedId === decoration.id}
                      onSelect={setSelectedId}
                      onDragEnd={(e) => handleDecorationDragEnd(e, decoration.id)}
                      onTransformEnd={(e) => handleTransformEnd(e, decoration.id)}
                    />
                  ))}
                  <Text 
                    text={viewStates[activeView].text}
                    fontSize={24}
                    fill={viewStates[activeView].textColor}
                    x={viewStates[activeView].textPosition.x}
                    y={viewStates[activeView].textPosition.y}
                    width={200}
                    align="center"
                    draggable={false}
                  />
                  {selectedId && (
                    <Transformer
                      ref={transformerRef}
                      boundBoxFunc={(oldBox, newBox) => {
                        const maxSize = 200;
                        const minSize = 20;
                        if (
                          newBox.width < minSize ||
                          newBox.height < minSize ||
                          newBox.width > maxSize ||
                          newBox.height > maxSize
                        ) {
                          return oldBox;
                        }
                        return newBox;
                      }}
                    />
                  )}
                </Layer>
              </Stage>
            </div>
          </div>

          <div className="space-y-6">
            
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded ${
                      selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Add Text</h3>
              <input
                type="text"
                value={viewStates[activeView].text}
                onChange={(e) => setViewStates(prev => ({
                  ...prev,
                  [activeView]: { ...prev[activeView], text: e.target.value }
                }))}
                className="w-full p-2 border rounded"
                placeholder="Enter your text here"
              />
              <div className="mt-2">
                <label className="block mb-2">Text Color:</label>
                <SketchPicker
                  color={viewStates[activeView].textColor}
                  onChangeComplete={(color) => setViewStates(prev => ({
                    ...prev,
                    [activeView]: { ...prev[activeView], textColor: color.hex }
                  }))}
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Add Decoration</h3>
              {viewStates[activeView].decorations.length === 0 ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded"
                  onClick={(e) => e.target.value = null}
                />
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2 border rounded"
                    onClick={(e) => e.target.value = null}
                  />
                  <button
                    onClick={() => {
                      setViewStates(prev => ({
                        ...prev,
                        [activeView]: {
                          ...prev[activeView],
                          decorations: []
                        }
                      }));
                      setSelectedId(null);
                    }}
                    className="px-4  bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Image
                  </button>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Upload an image to decorate the shirt. Supported formats: PNG, JPG, GIF (under 5MB)
              </p>
            </div>

            <button
              onClick={saveDesignToCart}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;



