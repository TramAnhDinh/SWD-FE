import React from "react";

const PricingClass = () => {
    return (
      <div className="bg-yellow-100 p-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Bảng Giá Áo Lớp</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full mb-8">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="p-2 border border-white">Số lượng</th>
                  <th className="p-2 border border-white">100% Cotton 4c (190gsm)</th>
                  <th className="p-2 border border-white">100% Cotton 2c (250gsm)</th>
                  <th className="p-2 border border-white">100% Cotton 4c (240gsm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["21-30", "160.000", "210.000", "235.000"],
                  ["31-40", "150.000", "190.000", "205.000"],
                  ["41-50", "140.000", "180.000", "195.000"],
                  ["51-60", "130.000", "170.000", "185.000"]
                ].map((row, index) => (
                  <tr key={index} className="odd:bg-gray-200">
                    {row.map((cell, i) => (
                      <td key={i} className="p-2 border border-white text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
  
            <h2 className="text-2xl font-bold mb-4 text-center">Bảng Giá Áo Polo Basic</h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="p-2 border border-white">Số lượng</th>
                  <th className="p-2 border border-white">Cá sấu poly</th>
                  <th className="p-2 border border-white">Cá sấu 65% Cotton</th>
                  <th className="p-2 border border-white">Cá sấu 100% Cotton</th>
                  <th className="p-2 border border-white">Cá sấu Cafe</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["21-30", "175.000", "200.000", "230.000", "250.000"],
                  ["31-40", "165.000", "190.000", "220.000", "240.000"],
                  ["41-50", "155.000", "180.000", "210.000", "230.000"],
                  ["51-60", "145.000", "170.000", "200.000", "220.000"]
                ].map((row, index) => (
                  <tr key={index} className="odd:bg-gray-200">
                    {row.map((cell, i) => (
                      <td key={i} className="p-2 border border-white text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingClass;
  