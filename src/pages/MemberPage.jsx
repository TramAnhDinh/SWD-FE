// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import "./MemberPage.css"; // Import file CSS

// const MemberPage = () => {
//   const user = useSelector((state) => state.user.user);
//   const [profile, setProfile] = useState({
//     userId: "",
//     username: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     avatar: "",
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch(`https://localhost:7163/api/User/${user.userId}`);
//         const data = await response.json();
//         setProfile({
//           userId: data.userId,
//           username: data.username,
//           fullName: data.fullName || "",
//           email: data.email || "",
//           phone: data.phone || "",
//           gender: data.gender ? "Nam" : "Nữ",
//           dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
//           address: data.address || "",
//           avatar: data.avatar || "https://via.placeholder.com/150",
//         });
//       } catch (error) {
//         console.error("Lỗi tải thông tin người dùng:", error);
//       }
//     };

//     if (user) fetchProfile();
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...profile, gender: profile.gender === "Nam" }),
//       });
//       alert("Cập nhật thông tin thành công!");
//     } catch (error) {
//       console.error("Lỗi cập nhật thông tin:", error);
//       alert("Cập nhật thất bại!");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Trang cá nhân</h2>
//       <div className="profile-card">
//         <img src={profile.avatar} alt="Avatar" className="avatar" />
//         <div className="input-group">
//           <label>Tên đăng nhập:</label>
//           <input type="text" name="username" value={profile.username} disabled />
//         </div>
//         <div className="input-group">
//           <label>Họ và tên:</label>
//           <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={profile.email} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Số điện thoại:</label>
//           <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Địa chỉ:</label>
//           <input type="text" name="address" value={profile.address} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Giới tính:</label>
//           <select name="gender" value={profile.gender} onChange={handleChange}>
//             <option value="Nam">Nam</option>
//             <option value="Nữ">Nữ</option>
//           </select>
//         </div>
//         <div className="input-group">
//           <label>Ngày sinh:</label>
//           <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
//         </div>
//         <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
//       </div>
//     </div>
//   );
// };

// export default MemberPage;


// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import "./MemberPage.css";

// const MemberPage = () => {
//   const reduxUser = useSelector((state) => state.user.user);
// const storedUserId = localStorage.getItem("userId");

// const userId = reduxUser?.userId || storedUserId;
// console.log("Redux user:", reduxUser);
// console.log("UserId từ Redux:", reduxUser?.userId);
// console.log("UserId từ localStorage:", storedUserId);

// if (!userId) {
//   console.error("🚨 Không tìm thấy userId!");
//   return;}
//   // const reduxUser = useSelector((state) => state.user.user);
//   // console.log("Redux user:", reduxUser);
//   // const storedUserId = localStorage.getItem("userId"); // Lấy userId từ localStorage
//   // console.log("UserId từ Redux:", reduxUser?.userId);
//   // const token = localStorage.getItem("token"); // Lấy token để gọi API
//   // console.log("UserId từ localStorage:", storedUserId);

//   const [profile, setProfile] = useState({
//     userId: "",
//     username: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     avatar: "",
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const userId = reduxUser?.userId || localStorage.getItem("userId");
//       if (!userId) {
//           console.error("🚨 Không tìm thấy userId!");
//       return;
//     }

//       // const userId = reduxUser?.userId || storedUserId; // Lấy từ Redux hoặc localStorage
//       // if (!userId) {
//       //   console.error("🚨 Không tìm thấy userId!");
//       //   return;
//       // }

//       try {
//         const response = await fetch(`https://localhost:7163/api/User/${userId}`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Lỗi tải thông tin người dùng!");
//         }

//         const data = await response.json();
//         setProfile({
//           userId: data.userId,
//           username: data.username,
//           fullName: data.fullName || "",
//           email: data.email || "",
//           phone: data.phone || "",
//           gender: data.gender ? "Nam" : "Nữ",
//           dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
//           address: data.address || "",
//           avatar: data.avatar || "https://via.placeholder.com/150",
//         });
//       } catch (error) {
//         console.error("🚨 Lỗi khi tải thông tin người dùng:", error);
//       }
//     };

//     if (reduxUser || storedUserId) fetchProfile();
//   }, [reduxUser, storedUserId, token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ ...profile, gender: profile.gender === "Nam" }),
//       });

//       if (!response.ok) {
//         throw new Error("Cập nhật thất bại!");
//       }

//       alert("✅ Cập nhật thông tin thành công!");
//     } catch (error) {
//       console.error("🚨 Lỗi cập nhật thông tin:", error);
//       alert("Cập nhật thất bại!");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Trang cá nhân</h2>
//       <div className="profile-card">
//       <img src={profile.avatar || "https://via.placeholder.com/150"} alt="Avatar" className="avatar" />
//         <div className="input-group">
//           <label>Tên đăng nhập:</label>
//           <input type="text" name="username" value={profile.username} disabled />
//         </div>
//         <div className="input-group">
//           <label>Họ và tên:</label>
//           <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={profile.email} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Số điện thoại:</label>
//           <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Địa chỉ:</label>
//           <input type="text" name="address" value={profile.address} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Giới tính:</label>
//           <select name="gender" value={profile.gender} onChange={handleChange}>
//             <option value="Nam">Nam</option>
//             <option value="Nữ">Nữ</option>
//           </select>
//         </div>
//         <div className="input-group">
//           <label>Ngày sinh:</label>
//           <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
//         </div>
//         <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
//       </div>
//     </div>
//   );
// };

// export default MemberPage;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import "./MemberPage.css";

// const MemberPage = () => {
//   const reduxUser = useSelector((state) => state.user.user);
//   const [profile, setProfile] = useState({
//     userId: "",
//     username: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     avatar: "",
//   });

//   useEffect(() => {
//     if (reduxUser?.userId) {
//       localStorage.setItem("userId", reduxUser.userId);
//     }
//   }, [reduxUser]);

//   useEffect(() => {
//     const userId = reduxUser?.userId || localStorage.getItem("userId");
//     const token = localStorage.getItem("token");
    
//     if (!userId) {
//       console.error("🚨 Không tìm thấy userId!");
//       return;
//     }
    
//     if (!token) {
//       console.error("🚨 Không tìm thấy token!");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const response = await fetch(`https://localhost:7163/api/User/${userId}`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Lỗi tải thông tin người dùng!");
//         }

//         const data = await response.json();
//         setProfile({
//           userId: data.userId,
//           username: data.username,
//           fullName: data.fullName || "",
//           email: data.email || "",
//           phone: data.phone || "",
//           gender: data.gender ? "Nam" : "Nữ",
//           dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
//           address: data.address || "",
//           avatar: data.avatar || "https://via.placeholder.com/150",
//         });
//       } catch (error) {
//         console.error("🚨 Lỗi khi tải thông tin người dùng:", error);
//       }
//     };

//     fetchProfile();
//   }, [reduxUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Lỗi xác thực, vui lòng đăng nhập lại!");
//       return;
//     }

//     try {
//       const response = await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ ...profile, gender: profile.gender === "Nam" }),
//       });

//       if (!response.ok) {
//         throw new Error("Cập nhật thất bại!");
//       }

//       alert("✅ Cập nhật thông tin thành công!");
//     } catch (error) {
//       console.error("🚨 Lỗi cập nhật thông tin:", error);
//       alert("Cập nhật thất bại!");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Trang cá nhân</h2>
//       <div className="profile-card">
//         <img src={profile.avatar} alt="Avatar" className="avatar" />
//         <div className="input-group">
//           <label>Tên đăng nhập:</label>
//           <input type="text" name="username" value={profile.username} disabled />
//         </div>
//         <div className="input-group">
//           <label>Họ và tên:</label>
//           <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={profile.email} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Số điện thoại:</label>
//           <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Địa chỉ:</label>
//           <input type="text" name="address" value={profile.address} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Giới tính:</label>
//           <select name="gender" value={profile.gender} onChange={handleChange}>
//             <option value="Nam">Nam</option>
//             <option value="Nữ">Nữ</option>
//           </select>
//         </div>
//         <div className="input-group">
//           <label>Ngày sinh:</label>
//           <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
//         </div>
//         <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
//       </div>
//     </div>
//   );
// };

// export default MemberPage;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import "./MemberPage.css";

// const MemberPage = () => {
//   const reduxUser = useSelector((state) => state.user.user);
//   const [profile, setProfile] = useState({
//     userId: "",
//     username: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     avatar: "",
//   });

//   // Lưu userId vào localStorage nếu có từ Redux
//   useEffect(() => {
//     if (reduxUser?.userId) {
//       localStorage.setItem("userId", reduxUser.userId);
//     }
//   }, [reduxUser]);

//   // Fetch profile từ API
//   useEffect(() => {
//     const userId = reduxUser?.userId || localStorage.getItem("userId");
//     const token = localStorage.getItem("token");

//     console.log("🔹 User ID:", userId);
//     console.log("🔹 Token:", token);

//     if (!userId) {
//       console.error("🚨 Không tìm thấy userId!");
//       return;
//     }

//     if (!token) {
//       console.error("🚨 Không tìm thấy token!");
//       return;
//     }

//     // const fetchProfile = async () => {
//     //   try {
//     //     const response = await fetch(`https://localhost:7163/api/User/${userId}`, {
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //         Authorization: `Bearer ${token}`,
//     //       },
//     //     });
    
//     //     if (!response.ok) {
//     //       throw new Error("Lỗi tải thông tin người dùng!");
//     //     }
    
//     //     const result = await response.json();
//     //     const data = result.data; // Lấy dữ liệu từ key 'data'
    
//     //     setProfile({
//     //       userId: data.sid, // Lấy userId từ 'data.sid'
//     //       username: data.username,
//     //       fullName: data.fullName || "",
//     //       email: data.email || "",
//     //       phone: data.phone || "",
//     //       gender: data.gender === 1 ? "Nam" : "Nữ",
//     //       dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
//     //       address: data.address || "",
//     //       avatar: data.avatar || "https://via.placeholder.com/150",
//     //     });
//     //   } catch (error) {
//     //     console.error("🚨 Lỗi khi tải thông tin người dùng:", error);
//     //   }
//     // };
    
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch(`https://localhost:7163/api/User/${userId}`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Lỗi tải thông tin người dùng!");
//         }

//         const data = await response.json();
//         setProfile({
//           // userId: data.User_ID,
//           username: data.Username,
//           fullName: data.FullName || "",
//           email: data.Email || "",
//           phone: data.Phone || "",
//           gender: data.Gender === 1 ? "Nam" : "Nữ",
//           dateOfBirth: data.DateOfBirth ? data.DateOfBirth.split("T")[0] : "",
//           address: data.Address || "",
//           avatar: data.Avatar || "https://via.placeholder.com/150",
//         });
//       } catch (error) {
//         console.error("🚨 Lỗi khi tải thông tin người dùng:", error);
//       }
//     };

//     fetchProfile();
//   }, [reduxUser]);

//   // Cập nhật state khi thay đổi input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   // Gửi yêu cầu cập nhật thông tin
//   const handleSave = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Lỗi xác thực, vui lòng đăng nhập lại!");
//       return;
//     }

//     try {
//       const response = await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           User_ID: profile.userId,
//           Username: profile.username,
//           FullName: profile.fullName,
//           Email: profile.email,
//           Phone: profile.phone,
//           Gender: profile.gender === "Nam" ? 1 : 0,
//           DateOfBirth: profile.dateOfBirth,
//           Address: profile.address,
//           Avatar: profile.avatar,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Cập nhật thất bại!");
//       }

//       alert("✅ Cập nhật thông tin thành công!");
//     } catch (error) {
//       console.error("🚨 Lỗi cập nhật thông tin:", error);
//       alert("Cập nhật thất bại!");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Trang cá nhân</h2>
//       <div className="profile-card">
//         <img src={profile.avatar} alt="Avatar" className="avatar" />
//         <div className="input-group">
//           <label>Tên đăng nhập:</label>
//           <input type="text" name="username" value={profile.username} disabled />
//         </div>
//         <div className="input-group">
//           <label>Họ và tên:</label>
//           <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={profile.email} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Số điện thoại:</label>
//           <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Địa chỉ:</label>
//           <input type="text" name="address" value={profile.address} onChange={handleChange} />
//         </div>
//         <div className="input-group">
//           <label>Giới tính:</label>
//           <select name="gender" value={profile.gender} onChange={handleChange}>
//             <option value="Nam">Nam</option>
//             <option value="Nữ">Nữ</option>
//           </select>
//         </div>
//         <div className="input-group">
//           <label>Ngày sinh:</label>
//           <input type="date" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
//         </div>
//         <button className="save-btn" onClick={handleSave}>Lưu thay đổi</button>
//       </div>
//     </div>
//   );
// };

// export default MemberPage;


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MemberPage.css";

const MemberPage = () => {
  const reduxUser = useSelector((state) => state.user.user);
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
    if (reduxUser?.userId) {
      localStorage.setItem("userId", reduxUser.userId);
    }
  }, [reduxUser]);

  useEffect(() => {
    const userId = reduxUser?.userId || localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      console.error("🚨 Không tìm thấy userId hoặc token!");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://localhost:7163/api/User/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Lỗi tải thông tin người dùng!");
        }

        const data = await response.json();
        setProfile({
          username: data.Username,
          fullName: data.FullName || "",
          email: data.Email || "",
          phone: data.Phone || "",
          gender: data.Gender === 1 ? "Nam" : "Nữ",
          dateOfBirth: data.DateOfBirth ? data.DateOfBirth.split("T")[0] : "",
          address: data.Address || "",
          avatar: data.Avatar || "https://via.placeholder.com/150",
        });
      } catch (error) {
        console.error("🚨 Lỗi khi tải thông tin người dùng:", error);
      }
    };

    fetchProfile();
  }, [reduxUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Lỗi xác thực, vui lòng đăng nhập lại!");
      return;
    }

    try {
      const response = await fetch(`https://localhost:7163/api/User/${profile.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          User_ID: profile.userId,
          Username: profile.username,
          FullName: profile.fullName,
          Email: profile.email,
          Phone: profile.phone,
          Gender: profile.gender === "Nam" ? 1 : 0,
          DateOfBirth: profile.dateOfBirth,
          Address: profile.address,
          Avatar: profile.avatar,
        }),
      });

      if (!response.ok) {
        throw new Error("Cập nhật thất bại!");
      }

      alert("✅ Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("🚨 Lỗi cập nhật thông tin:", error);
      alert("Cập nhật thất bại!");
    }
  };

  // Thêm vào giỏ hàng
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Bạn cần đăng nhập để mua hàng!");
      return;
    }

    try {
      const response = await fetch(`https://localhost:7163/api/Cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: profile.userId,
          productId: productId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi khi thêm vào giỏ hàng!");
      }

      alert("✅ Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      console.error("🚨 Lỗi khi thêm vào giỏ hàng:", error);
      alert("Không thể thêm vào giỏ hàng!");
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

      {/* Hiển thị danh sách sản phẩm */}
      <div className="product-list">
        <h3>Sản phẩm gợi ý</h3>
        <div className="product-card">
          <p>White T-Shirt</p>
          <p>150 VND</p>
          <button onClick={() => handleAddToCart(1)}>Thêm vào giỏ hàng</button>
        </div>
        <div className="product-card">
          <p>Shoe</p>
          <p>100 VND</p>
          <button onClick={() => handleAddToCart(2)}>Thêm vào giỏ hàng</button>
        </div>
        <div className="product-card">
          <p>T-shirt</p>
          <p>100 VND</p>
          <button onClick={() => handleAddToCart(3)}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;

