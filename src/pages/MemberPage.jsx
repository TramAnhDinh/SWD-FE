// import React, { useEffect, useState } from "react";
// import "./MemberPage.css"; // Import CSS

// const MemberPage = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({});

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Bạn chưa đăng nhập!");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
//           method: "GET",
//           headers: {
//             "Accept": "application/json",
//             "Authorization": `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) throw new Error(`Lỗi API: ${response.status}`);
        
//         const data = await response.json();
//         if (!data?.data) throw new Error("Dữ liệu API không hợp lệ!");
        
//         setProfile(data.data);
//         setEditData({
//           userId: data.data.userId ?? 0,
//           username: data.data.username || "",
//           fullName: data.data.fullName || "",
//           gender: data.data.gender ? "true" : "false",
//           dateOfBirth: data.data.dateOfBirth ? data.data.dateOfBirth.split("T")[0] : "",
//           address: data.data.address || "",
//           phone: data.data.phone || "",
//           email: data.data.email || "",
//           avatar: data.data.avatar || "",
//           isDeleted: data.data.isDeleted ?? false,
//           roleId: data.data.roleId ?? 3,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("Bạn chưa đăng nhập!");
//       return;
//     }

//     if (!editData.userId || !editData.username || !editData.fullName) {
//       setError("Thiếu dữ liệu bắt buộc!");
//       console.log("Dữ liệu trước khi kiểm tra:", editData);

//       return;
//     }

//     const formattedData = {
//       userId: editData.userId,
//       username: editData.username.trim(),
//       fullName: editData.fullName.trim(),
//       gender: editData.gender === "true",
//       dateOfBirth: editData.dateOfBirth ? new Date(editData.dateOfBirth).toISOString() : null,
//       address: editData.address.trim(),
//       phone: editData.phone.trim(),
//       email: editData.email.trim(),
//       avatar: editData.avatar,
//       isDeleted: editData.isDeleted,
//       roleId: editData.roleId,
//     };

//     try {
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify(formattedData),
//       });

//       if (!response.ok) {
//         const errorResponse = await response.json();
//         setError(`Lỗi API: ${errorResponse.message || response.status}`);
//         return;
//       }

//       const updatedData = await response.json();
//       setProfile(updatedData.data);
//       setIsEditing(false);
//       alert("Cập nhật thành công!");
//     } catch (err) {
//       setError("Lỗi kết nối API: " + err.message);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-600">Đang tải dữ liệu...</p>;
//   if (error) return <p className="text-center text-red-500">Lỗi: {error}</p>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Thông tin cá nhân</h2>

//         {isEditing ? (
//           <div className="space-y-4">
//             {[{ label: "Họ và tên", name: "fullName", type: "text" },
//               { label: "Email", name: "email", type: "email" },
//               { label: "Số điện thoại", name: "phone", type: "text" },
//               { label: "Ngày sinh", name: "dateOfBirth", type: "date" }
//             ].map(({ label, name, type }) => (
//               <div key={name}>
//                 <label className="block text-sm font-medium text-gray-700">{label}</label>
//                 <input 
//                   type={type}
//                   name={name}
//                   value={editData[name] || ""}
//                   onChange={handleChange}
//                   className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" 
//                 />
//               </div>
//             ))}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Giới tính</label>
//               <select 
//                 name="gender" 
//                 value={editData.gender} 
//                 onChange={handleChange} 
//                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200">
//                 <option value="true">Nam</option>
//                 <option value="false">Nữ</option>
//               </select>
//             </div>
//             <div className="flex justify-between">
//               <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lưu</button>
//               <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">Hủy</button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {profile && (
//               <>
//                 <p><strong>Họ và tên:</strong> {profile.fullName}</p>
//                 <p><strong>Email:</strong> {profile.email}</p>
//                 <p><strong>Số điện thoại:</strong> {profile.phone}</p>
//                 <p><strong>Giới tính:</strong> {profile.gender ? "Nam" : "Nữ"}</p>
//               </>
//             )}
//             <button onClick={() => setIsEditing(true)} className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">Chỉnh sửa</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MemberPage;

import React, { useEffect, useState } from "react";
import "./MemberPage.css"; // Import CSS

const MemberPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Bạn chưa đăng nhập!");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error(`Lỗi API: ${response.status}`);
        
        const data = await response.json();
        console.log("Dữ liệu API trả về:", data); //Kiểm tra dữ liệu API

        if (!data?.data) throw new Error("Dữ liệu API không hợp lệ!");
        
        setProfile(data.data);
        setEditData({
          userId: data.data.userId ?? 0,
          username: data.data.username || "",
          fullName: data.data.fullName || "",
          gender: data.data.gender ? "true" : "false",
          dateOfBirth: data.data.dateOfBirth ? data.data.dateOfBirth.split("T")[0] : "",
          address: data.data.address || "",
          phone: data.data.phone || "",
          email: data.data.email || "",
          avatar: data.data.avatar || "",
          isDeleted: data.data.isDeleted ?? false,
          roleId: data.data.roleId ?? 3,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Bạn chưa đăng nhập!");
      return;
    }

    // if (!editData.userId || editData.userId === 0 || !editData.username.trim() || !editData.fullName.trim()) {
    //   setError("Thiếu dữ liệu bắt buộc! Vui lòng nhập đầy đủ thông tin.");
    //   console.log("Dữ liệu trước khi gửi:", editData);
    //   return;
    // }
    

    const formattedData = {
      userId: editData.userId || profile.userId, // Đảm bảo userId luôn có giá trị hợp lệ
      username: editData.username.trim(),
      fullName: editData.fullName.trim(),
      gender: editData.gender === "true",
      dateOfBirth: editData.dateOfBirth ? new Date(editData.dateOfBirth).toISOString() : null,
      address: editData.address.trim(),
      phone: editData.phone.trim(),
      email: editData.email.trim(),
      avatar: editData.avatar,
      isDeleted: editData.isDeleted,
      roleId: editData.roleId,
    };

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(`Lỗi API: ${errorResponse.message || response.status}`);
        return;
      }

      const updatedData  = await response.json();
      console.log("Dữ liệu API trả về:", updatedData ); // Debug xem API trả về gì
      if (!updatedData .data || !updatedData .data.userId) {
        setError("Dữ liệu API không hợp lệ!");
        return;
      }
      
      setProfile(updatedData.data);
      setIsEditing(false);
      alert("Cập nhật thành công!");
    //   setProfile(updatedData.data);
    //   setIsEditing(false);
    //   alert("Cập nhật thành công!");
    } catch (err) {
      setError("Lỗi kết nối API: " + err.message);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Đang tải dữ liệu...</p>;
  if (error) return <p className="text-center text-red-500">Lỗi: {error}</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Thông tin cá nhân</h2>

        {isEditing ? (
          <div className="space-y-4">
            {[{ label: "Họ và tên", name: "fullName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Số điện thoại", name: "phone", type: "text" },
              { label: "Ngày sinh", name: "dateOfBirth", type: "date" }
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input 
                  type={type}
                  name={name}
                  value={editData[name] || ""}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" 
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700">Giới tính</label>
              <select 
                name="gender" 
                value={editData.gender} 
                onChange={handleChange} 
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200">
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lưu</button>
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">Hủy</button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {profile && (
              <>
                <p><strong>Họ và tên:</strong> {profile.fullName}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Số điện thoại:</strong> {profile.phone}</p>
                <p><strong>Giới tính:</strong> {profile.gender ? "Nam" : "Nữ"}</p>
              </>
            )}
            <button onClick={() => setIsEditing(true)} className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">Chỉnh sửa</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberPage;
