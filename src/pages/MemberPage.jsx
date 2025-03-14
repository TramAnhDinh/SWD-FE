import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MemberPage.css"; // Import file CSS

const MemberPage = () => {
  const user = useSelector((state) => state.user.user);
  const [profile, setProfile] = useState({
    userId: "",
    username: "",
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://localhost:7163/api/User/${user.userId}`);
        const data = await response.json();
        setProfile({
          userId: data.userId,
          username: data.username,
          fullName: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          gender: data.gender ? "Nam" : "Nữ",
          dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          address: data.address || "",
          avatar: data.avatar || "https://via.placeholder.com/150",
        });
      } catch (error) {
        console.error("Lỗi tải thông tin người dùng:", error);
      }
    };

    if (user) fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...profile, gender: profile.gender === "Nam" }),
      });
      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Lỗi cập nhật thông tin:", error);
      alert("Cập nhật thất bại!");
    }
  };

  return (
    <div className="container">
      <h2>Trang cá nhân</h2>
      <div className="profile-card">
        <img src={profile.avatar} alt="Avatar" className="avatar" />
        <div className="input-group">
          <label>Tên đăng nhập:</label>
          <input type="text" name="username" value={profile.username} disabled />
        </div>
        <div className="input-group">
          <label>Họ và tên:</label>
          <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Số điện thoại:</label>
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Địa chỉ:</label>
          <input type="text" name="address" value={profile.address} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Giới tính:</label>
          <select name="gender" value={profile.gender} onChange={handleChange}>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <div className="input-group">
          <label>Ngày sinh:</label>
          <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
        </div>
        <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
      </div>
    </div>
  );
};

export default MemberPage;
