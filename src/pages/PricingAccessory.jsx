import React from "react";

const PricingAccessory = () => {
  return (
    <div className="bg-yellow-200 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-6">BẢNG GIÁ PHỤ KIỆN</h2>
        <table className="w-full border border-yellow-800">
          <thead>
            <tr className="bg-yellow-400 text-yellow-900">
              <th className="p-2 border border-yellow-800">Số lượng</th>
              <th className="p-2 border border-yellow-800">Ngắn</th>
              <th className="p-2 border border-yellow-800">Dài</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["10 - 30", "85.000", "95.000"],
              ["31 - 50", "72.000", "82.000"],
              ["51 - 70", "68.000", "78.000"],
              ["71 - 100", "63.000", "73.000"],
              ["101 - 150", "60.000", "70.000"],
              ["151 - 200", "59.000", "69.000"],
              ["201 - 300", "58.000", "68.000"],
              ["301 - 500", "55.000", "65.000"],
              [">500", "Báo giá", "Báo giá"],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-yellow-100" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="p-2 border border-yellow-800 text-center">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-yellow-800">
          <p>Phối vải nhiều màu: +10.000/màu/cái</p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccessory;
