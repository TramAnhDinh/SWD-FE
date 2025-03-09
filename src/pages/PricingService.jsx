import React from "react";

const PricingService = () => {
  return (
    <div className="bg-[#ffe6cc] min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-center text-3xl font-bold text-[#cc6600] mb-4">Dịch vụ in decal / PET</h2>
        <div className="grid grid-cols-2 gap-6">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#ffcc99] text-[#cc6600]">
                <th className="p-2 border">Số lượng</th>
                <th className="p-2 border">Giá dịch vụ</th>
              </tr>
            </thead>
            <tbody>
              {["1-5", "6-10", "11-20", ">20"].map((range, i) => (
                <tr key={i} className="odd:bg-[#ffe6cc]">
                  <td className="p-2 border">{range}</td>
                  <td className="p-2 border">{["100.000", "90.000", "80.000", "70.000"][i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#ffcc99] text-[#cc6600]">
                <th className="p-2 border">Phụ thu từ vùng in thứ 2</th>
                <th className="p-2 border">Giá</th>
              </tr>
            </thead>
            <tbody>
              {["A6", "A5", "A4", "A3"].map((size, i) => (
                <tr key={i} className="odd:bg-[#ffe6cc]">
                  <td className="p-2 border">{size}</td>
                  <td className="p-2 border">{["15.000", "20.000", "30.000", "50.000"][i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phần mới: PET kỹ thuật số */}
        <div className="mt-8">
          <h2 className="text-center text-3xl font-bold text-[#cc6600] mb-4">PET kỹ thuật số</h2>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#ffcc99] text-[#cc6600]">
                <th className="p-2 border">Mô tả sản phẩm</th>
                <th className="p-2 border">Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-[#ffe6cc]">
                <td className="p-2 border">PET KTS in theo yêu cầu, khổ ngang 56cm</td>
                <td className="p-2 border">110.000/mét</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-[#cc6600] text-sm">
            <p>- Sản phẩm PET kỹ thuật số chất lượng cao, hình in sắc nét, màu sắc sinh động.</p>
            <p>- Giá trên đã bao gồm in và bế hình in theo yêu cầu.</p>
            <p>- Giá trên chưa bao gồm 10% VAT.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingService;
