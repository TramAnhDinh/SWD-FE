import React from "react";
import { useParams } from "react-router-dom";
import c1 from "../assets/c/c1.png";
import c4 from "../assets/c/c4.png";
import c5 from "../assets/c/c5.png";
import c6 from "../assets/c/c6.png";
import c7 from "../assets/c/c7.png";
import c8 from "../assets/c/c8.png";
import c9 from "../assets/c/c9.png";
import c10 from "../assets/c/c10.png";
import c11 from "../assets/c/c11.png";

import s1 from "../assets/s/s1.png";
import s2 from "../assets/s/s2.png";
import s3 from "../assets/s/s3.png";
import s4 from "../assets/s/s4.png";
import s5 from "../assets/s/s5.png";
import s6 from "../assets/s/s6.png";
import s7 from "../assets/s/s7.png";
import s8 from "../assets/s/s8.png";
import s9 from "../assets/s/s9.png";
import s10 from "../assets/s/s10.png";
import s11 from "../assets/s/s11.png";
import s12 from "../assets/s/s12.png";
import s13 from "../assets/s/s13.png";
import s14 from "../assets/s/s14.png";
import s15 from "../assets/s/s15.png";
import s16 from "../assets/s/s16.png";
import s17 from "../assets/s/s17.png";
import s18 from "../assets/s/s18.png";
import s19 from "../assets/s/s19.png";

import e1 from "../assets/e/e1.png";
import e2 from "../assets/e/e2.png";
import e3 from "../assets/e/e3.png";
import e4 from "../assets/e/e4.png";
import e5 from "../assets/e/e5.png";
import e6 from "../assets/e/e6.png";

const articles = [
    {
        id: 1,
        title: "Nên chọn áo bóng chày hay áo thun làm đồng phục lớp?",
        content: `
        <p>
        Khi chọn đồng phục lớp, áo bóng chày và áo thun là hai lựa chọn phổ biến. Mỗi loại áo có những ưu điểm riêng về kiểu dáng, chất liệu và sự thoải mái. Hãy cùng Potato Clothing so sánh và giúp bạn tìm ra lựa chọn phù hợp cho lớp mình nhé!
        </p>

        <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#ao-bong-chay" class="text-blue-600 hover:underline">Áo bóng chày là gì?</a></li>
    <li><a href="#ao-thun" class="text-blue-600 hover:underline">Áo thun đồng phục là gì?</a></li>
    <li><a href="#so-sanh" class="text-blue-600 hover:underline"> So sánh áo bóng chày và áo thun</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#uu-diem" class="text-blue-600 hover:underline">3.1. Điểm giống nhau</a></li>
      <li><a href="#nhuoc-diem" class="text-blue-600 hover:underline">3.2. Điểm khác nhau</a></li>
    </ul>
    <li><a href="#nen" class="text-blue-600 hover:underline">Nên chọn áo bóng chày hay áo thun làm đồng phục lớp?</a></li>
    <li><a href="#dat-may" class="text-blue-600 hover:underline">Đặt may áo lớp ở đâu chất lượng, uy tín?</a></li>
        </ul>
    </div>

    <img src="${c1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Nên chọn áo bóng chày hay áo thun làm đồng phục lớp?</em></p>

    <p id="ao-bong-chay" class="text-2xl font-bold mt-6">1. Áo bóng chày là gì?</p>
    <p>
    Áo bóng chày (còn được gọi là áo Jersey), là mẫu áo phục thể thao được các cầu thủ bóng chày sử dụng trong các trận đấu và luyện tập. Áo bóng chày được thiết kế để hỗ trợ sự vận động linh hoạt, nhằm mang lại cảm giác thoải mái cho người mặc, đồng thời thể hiện phong cách thể thao mạnh mẽ, cá tính.
    </p></br>
    <p>
    Áo bóng chày thường được may từ các chất liệu như vải mè, cotton, polyester hay mesh fabric, giúp áo thoáng mát, bền bỉ và thấm hút mồ hôi tốt. Thiết kế áo có cổ chữ V hoặc cổ tim, tay ngắn và form dáng rộng rãi, nhằm có thể dễ dàng mặc vào và không gây cản trở khi vận động.
    </p></br>
    <img src="${c4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p><em>Áo bóng chày có thiết kế rộng rãi, dễ mặc, không gây cản trở khi vận động</em></p></br>

    <p>
    Ngoài chức năng thể thao, áo bóng chày còn được yêu thích vì tính thẩm mỹ và sự cá tính. Kiểu áo này luôn được nhiều lớp học, nhóm bạn lựa chọn không chỉ đẹp mắt mà còn dễ dàng in logo, slogan hay hình ảnh đặc trưng để tạo nên sự khác biệt. Áo bóng chày đã trở thành xu hướng đồng phục mới, đặc biệt phù hợp với giới trẻ năng động, sáng tạo.
    </p></br>
    <img src="${c5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p><em>Xem thêm về BST áo lớp bóng chày Ver 2 của Potato</em></p></br>

    <p id="ao-thun" class="text-2xl font-bold mt-6">2. Áo thun đồng phục là gì?</p>
    <p>
    Đồng phục áo thun cổ tròn là lựa chọn quen thuộc của nhiều lớp học, được ưa chuộng bởi thiết kế đơn giản, dễ mặc và dễ phối đồ. Với chất liệu vải thun như thun lạnh, cá sấu, cotton hay vải mè, mang lại cảm giác thoải mái, dễ chịu cho người mặc suốt cả ngày dài.
    </p></br>
    <p>
    Bên cạnh đó, áo thun đồng phục cũng có thể dễ dàng được tùy chỉnh với các họa tiết, hình in nổi bật, giúp lớp học thể hiện cá tính riêng biệt. Nhờ vào tính ứng dụng cao và sự đơn giản trong thiết kế, áo thun vẫn luôn là một trong những mẫu đồng phục lớp phù hợp với mọi lứa tuổi và vóc dáng.
    </p>
    <img src="${c6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p><em>Áo thun đồng phục là lựa chọn quen thuộc phù hợp với mọi lứa tuổi và vóc dáng</em></p>
        
    <p id="so-sanh" class="text-2xl font-bold mt-6">3. So sánh áo bóng chày và áo thun</p>
    <p id="uu-diem" class="text-2xl font-bold mt-6">3.1. Điểm giống nhau</p></br>
    <p>
    Tuy là hai mẫu áo đồng phục lớp khác nhau, áo bóng chày và áo phông vẫn có những nét tương đồng về chất liệu, kiểu dáng, màu sắc, tính ứng dụng… cụ thể: 
    </p>
    
    <table className="w-full border-collapse mt-4">
  <thead>
    <tr className="text-left border-b-2 border-gray-400">
      <th className="p-3 font-bold">Đặc điểm</th>
      <th className="p-3 font-bold">Áo bóng chày</th>
      <th className="p-3 font-bold">Áo thun</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">Chất liệu</td>
      <td className="p-3">Được may từ chất liệu thoáng mát, co giãn tốt, thấm hút mồ hôi (vải mè, cotton, polyester)</td>
      <td className="p-3">Thoáng mát, mềm mại, dễ giặt</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">Kiểu dáng</td>
      <td className="p-3">Form rộng rãi, tạo sự linh hoạt, không gây bí bách khi vận động</td>
      <td className="p-3">Đơn giản, dễ phối đồ</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">Màu sắc</td>
      <td className="p-3">Có đa dạng màu sắc phù hợp với phong cách các lớp</td>
      <td className="p-3">Đơn sắc hoặc in họa tiết</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">Thiết kế</td>
      <td className="p-3">Dễ dàng thiết kế để tạo điểm nhấn, thể hiện thông điệp và cá tính của tập thể</td>
      <td className="p-3">Thiết kế đơn giản, dễ mix & match</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className="p-3 font-semibold">Đối tượng</td>
      <td className="p-3">Phù hợp với cả nam và nữ, mọi vóc dáng (cân đối, mi nhon hay mũm mĩm)</td>
      <td className="p-3">Thoải mái, không kén người mặc</td>
    </tr>
    <tr>
      <td className="p-3 font-semibold">Ứng dụng</td>
      <td className="p-3">Có thể diện trong các hoạt động như văn nghệ, thể thao, học lớp, đi chơi, học nhóm…</td>
      <td className="p-3">Dễ dàng sử dụng hàng ngày, từ đi học đến đi chơi</td>
    </tr>
  </tbody>
</table>

<img src="${c7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
<p class="text-center"><em>Áo bóng chày và áo thun có thể ứng dụng trong nhiều hoạt động văn nghệ</em></p></br>

<p id="nhuoc-diem" class="text-2xl font-bold mt-6">3.2. Điểm khác nhau</p></br>
<p>
Bên cạnh những điểm giống nhau mà Potato vừa nêu trên, áo thun bóng chày và áo phông cũng có nhiều điểm khác biệt trong thiết kế, giúp lớp mình có thể dễ dàng phân biệt và nhận diện, cụ thể:
</p>

<table className="w-full border-collapse mt-4">
        <thead>
          <tr className="text-left border-b-2 border-gray-400">
            <th className="p-3 font-bold">Đặc điểm</th>
            <th className="p-3 font-bold">Áo bóng chày</th>
            <th className="p-3 font-bold">Áo thun</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-semibold">Tinh thần chiếc áo</td>
            <td className="p-3">Đậm chất thể thao, khỏe khoắn, hoạt bát, cool ngầu</td>
            <td className="p-3">Thiết kế basic, trẻ trung, năng động, cá tính</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-semibold">Form dáng</td>
            <td className="p-3">Form rộng vừa phải, thoải mái</td>
            <td className="p-3">Form dáng đa dạng: oversize, rộng vừa phải, ôm sát</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-semibold">Cổ áo</td>
            <td className="p-3">Cổ tim hoặc cổ chữ V, cùng đường viền khác màu</td>
            <td className="p-3">Cổ tròn, cổ bẻ, phần viền cổ áo có thể khác màu với thân áo</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-semibold">Khuy cài</td>
            <td className="p-3">Có khuy cài chạy dọc từ cổ đến hông áo</td>
            <td className="p-3">Không có khuy áo hoặc có 2 hàng khuy ở phần cổ (tương tự như áo polo)</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Tay áo</td>
            <td className="p-3">Tay ngắn, thường có viền hoặc màu khác biệt</td>
            <td className="p-3">Tay ngắn hoặc tay dài</td>
          </tr>
        </tbody>
      </table>
      <img src="${c8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST áo thun Cool Collar nổi bật với phần viền cổ khác màu với thân áo</p>

      <p id="nen" class="text-2xl font-bold mt-6">4. Nên chọn áo bóng chày hay áo thun làm đồng phục lớp?</p>
      <p>
      Khi phải quyết định giữa áo bóng chày và áo thun làm đồng phục lớp, Potato tin rằng từng thành viên đều đã có đáp án cho riêng mình. Thực tế, cả 2 loại áo đều có những ưu điểm riêng biệt. 
      </p></br>
      <p>
      Vậy nên, tuỳ vào phong cách, sở thích và mong muốn của cả lớp, bạn có thể cân nhắc và lựa chọn cho mình kiểu áo phù hợp nhất. Dưới đây là một số gợi ý từ Potato giúp lớp bạn dễ dàng đưa ra quyết định phù hợp khi chọn áo đồng phục:
      </p></br>

       <ul className="list-disc list-outside space-y-3">
        <li>
          <span className="font-bold">Xác định phong cách và tinh thần chung của lớp:</span> Bạn muốn chiếc áo đồng phục thể hiện phong cách gì?, năng động, cá tính, tự tin hay nhẹ nhàng, sâu lắng… Phong cách này sẽ quyết định rất nhiều trong việc lựa chọn kiểu dáng và màu sắc áo.
        </li>
        <li>
          <span className="font-bold">Xác định hình ảnh lớp muốn xây dựng:</span> Lớp bạn muốn mọi người nhớ đến qua chiếc áo đồng phục như thế nào, hình ảnh của lớp sẽ được thể hiện rõ qua kiểu dáng, màu sắc và thiết kế áo.
        </li>
        <li>
          <span className="font-bold">Xem xét đặc điểm của các thành viên trong lớp:</span> Hãy tham khảo ý kiến của tất cả các thành viên về sở thích, tính cách và ngoại hình của họ, vì áo đồng phục cần phải thoải mái và phù hợp với tất cả mọi người.
        </li>
        <li>
          <span className="font-bold">Mục đích sử dụng áo đồng phục:</span> Lớp sẽ sử dụng áo trong những sự kiện nào? Để làm nổi bật sự kiện hay đơn giản chỉ để tạo sự đồng nhất khi tham gia các hoạt động chung của trường, câu trả lời sẽ giúp bạn chọn lựa thiết kế và chất liệu phù hợp.
        </li>
      </ul>
      <img src="${c9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">
      Bạn nên xác định trước phong cách và hình ảnh lớp muốn xây dựng để có thể chọn được kiểu áo phù hợp
      </p>

      <p id="dat-may" class="text-2xl font-bold mt-6">5. Đặt may áo lớp ở đâu chất lượng, uy tín?</p>
      <p>
      Nếu bạn đang tìm kiếm một đơn vị đáng tin cậy để đặt may áo đồng phục lớp, Potato chính là lựa chọn hoàn hảo. Với hơn 9 năm kinh nghiệm trong ngành sản xuất đồng phục, Potato đã xây dựng được uy tín vững chắc và được đông đảo các bạn học sinh, sinh viên tin tưởng lựa chọn.
      </p>
      <img src="${c10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Potato là đơn vị có hơn 8 năm kinh nghiệm trong ngành sản xuất đồng phục</p></br>
      <p>
      Potato Clothing mang đến đa dạng mẫu áo, từ áo thun, áo bóng chày cho đến áo sơ mi, polo, bóng bầu dục và nhiều kiểu áo khác. Đặc biệt, Potato hỗ trợ thiết kế theo yêu cầu, không giới hạn sự sáng tạo. Bạn chỉ cần chia sẻ ý tưởng, đội ngũ thiết kế của Potato sẽ giúp bạn hiện thực hóa một chiếc áo đồng phục đẹp và độc đáo nhất.
      </p>
      <img src="${c11}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-cneter">Tại Potato Clothing bạn sẽ không bị giới hạn sự sáng tạo khi thiết kế</p></br>

      <p>
      Chọn áo bóng chày hay áo thun làm đồng phục lớp không hề khó khăn khi bạn hiểu rõ nhu cầu và phong cách của lớp mình. Nếu bạn vẫn còn bất kỳ thắc mắc nào hoặc cần tư vấn thêm, đừng ngần ngại liên hệ với Potato Clothing qua hotline 078 608 6494, nhắn tin fanpage, hoặc để lại thông tin tại form bên dưới để đội ngũ Potato sẵn sàng hỗ trợ bạn nhiệt tình nhé!
      </p>

      <h2 class='text-2xl font-bold mt-6'>Thông tin liên hệ</h2>
      <ul class='mt-2 text-gray-700'>
        <li><strong>Fanpage:</strong> Potato Clothing</li>
        <li><strong>Hotline:</strong> 028 6683 0386 - 078 608 6494</li>
        <li><strong>Email:</strong> info@potato.clothing | marketing@potato.clothing</li>
        <li><strong>Cửa hàng:</strong> 12 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Q.3, TP.HCM</li>
        <li><strong>Xưởng sản xuất:</strong> 32 Lê Đình Cẩn, P. Bình Trị Đông A, Q. Bình Tân, TP.HCM</li>
      </ul>           
        `,
    },

    {
      id: 2,
      title: "Tổng hợp các mẫu áo lớp polo được yêu thích tại Potato",
      content:`
      <p>
      Áo lớp Polo luôn là kiểu áo đồng phục phổ biến được nhiều bạn học sinh yêu thích bởi vẻ thời trang và thanh lịch của chúng. Xem ngay bài viết này để tìm hiểu về các BST áo lớp polo tại nhà Potato nhé! 
      </p>

      <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#vi-sao" class="text-blue-600 hover:underline">Vì sao áo lớp Polo được yêu thích trong năm học mới?</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#kieu" class="text-blue-600 hover:underline">1.1 Kiểu dáng trẻ trung, năng động</a></li>
      <li><a href="#phoi-do" class="text-blue-600 hover:underline">1.2 Dễ dàng phối đồ</a></li>
      <li><a href="#chat-lieu" class="text-blue-600 hover:underline">1.3 Chất liệu thoáng mát, thấm hút mồ hôi</a></li>
      <li><a href="#the-hien" class="text-blue-600 hover:underline">1.4 Thể hiện tinh thần đoàn kết</a></li>
    </ul>
    <li><a href="#mau" class="text-blue-600 hover:underline">Các mẫu áo Polo hot nhất tại Potato</a></li>
    <ul class='list-disc pl-6'>
      <li><a href="#bts1" class="text-blue-600 hover:underline">2.1. BST Polo Cool Collar</a></li>
      <li><a href="#bts2" class="text-blue-600 hover:underline">2.2. BST Poloholic</a></li>
      <li><a href="#bts3" class="text-blue-600 hover:underline">2.3. BST Polo Sporty Chic</a></li>
      <li><a href="#bts4" class="text-blue-600 hover:underline">2.4. BST Polo Dynamix</a></li>
      <li><a href="#bts5" class="text-blue-600 hover:underline">2.5. BST Zippy Polo</a></li>
    </ul>

    <li><a href="#form" class="text-blue-600 hover:underline">Các form áo lớp Polo tại Potato Clothing</a></li>
    <ul class='list-dics pl-6'>    
      <li><a href="#u" class="text-blue-600 hover:underline">3.1 Form Unisex</a></li>
      <li><a href="#o" class="text-blue-600 hover:underline">3.2 Oversized</a></li>
      </ul>
    <li><a href="#chat" class="text-blue-600 hover:underline">Chất liệu thường sử dụng cho áo Polo</a></li>
    <li><a href="#bang" class="text-blue-600 hover:underline">Bảng size áo Polo nhà Potato</a></li>
  </ul>
</div>
      <img src="${s1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Tổng hợp các mẫu áo lớp polo được yêu thích tại Potato</p>

      <p id="vi-sao" class="text-2xl font-bold mt-6">
      1. Vì sao áo lớp Polo được yêu thích trong năm học mới?
      </p>
      <p id="kieu" class="text-2xl font-bold mt-6">1.1 Kiểu dáng trẻ trung, năng động</p></br>

      <p>
      Áo polo sở hữu kiểu dáng basic nhưng không hề đơn điệu, mang đến sự trẻ trung, năng động cho các bạn học sinh. Với thiết kế cổ bẻ thanh lịch, kết hợp cùng đường may tinh, tế tạo nên vẻ ngoài gọn gàng, lịch thiệp, phù hợp với mọi vóc dáng, và giúp các bạn tự tin khoe cá tính riêng của mình.
      </p>
      <img src="${s2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">
      Áo lớp polo có kiểu dáng trẻ trung, năng động
      </p></br>

      <p id="phoi-do" class="text-2xl font-bold mt-6">
      1.2 Dễ dàng phối đồ
      </p>
      <p>
      Với sự đa dạng về màu sắc và kiểu dáng, áo polo không chỉ là trang phục học đường mà còn là biểu tượng của phong cách cá nhân. Các bạn có thể phối áo polo với nhiều item thời trang khác nhau, thỏa sức thể hiện phong cách và cá tính của tập thể.
      </p></br>
      <p>
      Không chỉ phù hợp để mặc khi đi học, áo polo còn lý tưởng cho các dịp đi chơi, du lịch hay tham gia các hoạt động văn nghệ, mang đến sự linh hoạt trong nhiều hoàn cảnh khác nhau. Đây là lựa chọn hoàn hảo cho những ai tìm kiếm sự tiện lợi và phong cách trong trang phục hàng ngày.
      </p>
      <img src="${s3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Áo lớp polo có thể phối với nhiều phong cách</p></br>

      <p id="chat-lieu" class="text-2xl font-bold mt-6">1.3 Chất liệu thoáng mát, thấm hút mồ hôi</p>
      <p>
      Áo lớp polo tại Potato Clothing thường được làm từ chất liệu vải mềm mại, thoáng khí và co giãn, giúp các bạn học sinh cảm thấy thoải mái khi vận động cả ngày ở trường.
      </p></br>
      <img src="${s4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Áo lớp polo tại Potato Clothing thường được làm từ chất liệu vải mềm mại</p>

      <p id="the-hien" class="text-2xl font-bold mt-6">1.4 Thể hiện tinh thần đoàn kết</p>
      <p>
      Khi diện áo lớp polo hoặc các kiểu đồng phục khác, các bạn học sinh sẽ cảm thấy gắn kết hơn, thể hiện được tinh thần đoàn kết của tập thể lớp. Đồng thời, áo lớp polo đồng phục cũng là cách để các bạn khẳng định bản thân và tạo ấn tượng với những người xung quanh.
      </p>
      <img src="${s5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p>Áo lớp polo thể hiện tinh thần đoàn kết của tập thể</p>

      <p id="mau" class="text-2xl font-bold mt-6">2. Các mẫu áo Polo hot nhất tại Potato</p>
      <p id="bts1" class="text-2xl font-bold mt-6">2.1. BST Polo Cool Collar</p>
      <p>
      Cool Collar là BST mà bạn không thể bỏ qua nếu muốn lớp mình trở nên nổi bật và khác biệt. Với sự kết hợp độc đáo giữa nét thanh lịch của áo polo và sự năng động của áo thun, mỗi thiết kế trong BST đều mang dấu ấn sáng tạo riêng, giúp các thành viên dễ dàng thể hiện cá tính và phong cách chất lừ.
      </p></br>
      <p>
      Điểm nhấn của áo polo Cool Collar nằm ở thiết kế cổ áo không nút đầy mới lạ, vừa giữ được nét trang nhã đặc trưng của dáng polo, vừa mang lại cảm giác thoải mái, tự do như áo thun. Đây chính là lựa chọn lý tưởng cho những ai muốn cân bằng giữa sự thanh lịch và linh hoạt, phù hợp với mọi hoạt động từ lớp học đến những buổi vui chơi, ngoại khóa.
      </p>
      <img src="${s6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Áo polo Cool Collar nằm ở thiết kế cổ áo không nút đầy mới lạ</p>

      <p id="bts2" class="text-2xl font-bold mt-6">2.2. BST Poloholic</p>
      <p>
      Nếu bạn đang muốn tìm kiếm một chiếc áo polo độc đáo được kết hợp màu sắc tinh tế, BST Poloholic của Potato Clothing là lựa chọn hoàn hảo dành cho bạn. 
      </p></br>
      <p>
      Điểm nhấn của BST này chính là phần vai raglan được phối đa dạng màu sắc, mang lại sự mới mẻ và khác biệt. Dù sử dụng nhiều gam màu, áo polo Holic vẫn giữ được sự hài hòa và tinh tế, giúp người mặc thể hiện rõ cá tính riêng.
      </p>
      <img src="${s7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Áo polo với chi tiết áo kẻ dọc cực cá tính</p>
      <img src="${s8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Áo polo kết hợp với raglan với phối màu ở vai bắt mắt</p>

      <p id="bts3" class="text-2xl font-bold mt-6">2.3. BST Polo Sporty Chic</p>
      <p>
      BST Sporty Chic của Potato Clothing là sự kết hợp hoàn hảo giữa chất liệu vải mềm mại, thoáng mát cùng thiết kế với nhiều lỗ thông hơi. Nhờ đó, áo polo Sporty Chic không chỉ mang lại sự dễ chịu mà còn giúp các bạn học sinh luôn thoải mái suốt cả ngày dài năng động.
      </p></br>
      <p>
      Đây là lựa chọn lý tưởng cho những buổi picnic, chuyến thăm sở thú hay bất kỳ hoạt động ngoài trời nào. Với khả năng thoát mồ hôi hiệu quả, áo polo Sporty Chic không chỉ phù hợp cho các buổi ngoại khóa mà còn hoàn hảo khi tham gia các hoạt động thể thao, giúp bạn tự tin trải nghiệm mọi khoảnh khắc trong ngày.
      </p>
      <img src="${s9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST Sporty Chic đem lại cảm giác dễ chịu suốt ngày dài</p>

      <p id="bts4" class="text-2xl font-bold mt-6">2.4. BST Polo Dynamix</p>
      <p>
       BST Polo Dynamix đem đến cho bạn sự kết hợp hoàn hảo giữa phong cách trẻ trung và thiết kế hiện đại. Với gam màu sáng tạo cùng họa tiết đơn giản, mỗi mẫu áo polo đều là tuyên ngôn cá tính riêng biệt dành cho giới trẻ. 
      </p></br>
      <p>
      Bộ sưu tập này bao gồm nhiều mẫu áo khác nhau, từ sự mạnh mẽ với tông màu xám và đen, đến sự tươi mới với màu tím và màu be. Tất cả đều mang trong mình phong cách thể thao nhưng không kém phần cá tính, giúp bạn dễ dàng thể hiện bản thân trong mọi tình huống, từ đi học, đi làm đến các buổi dạo chơi cùng bạn bè.
      </p>
      <img src="${s10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST Polo Dynamix là sự kết hợp hoàn hảo giữa phong cách trẻ trung và thiết kế hiện đại</p>

      <p id="bts5" class="text-2xl font-bold mt-6">2.5. BST Zippy Polo</p>
      <p>
      BST Zippy Polo là sự kết hợp hoàn hảo giữa sự trẻ trung và sự sáng tạo trong thiết kế. Với điểm nhấn là cổ áo khóa kéo hiện đại và tay áo raglan phối viền thời trang, mẫu áo này không chỉ đơn giản mà còn vô cùng độc đáo, dễ dàng phối hợp với mọi outfit của bạn.
      </p></br>
      <p>
      Đặc biệt, với thiết kế cổ áo khóa zip thay vì nút áo truyền thống, Zippy Polo mang đến một diện mạo mới lạ, cá tính và vô cùng năng động. Dù bạn tham gia các hoạt động năng động hay chỉ đơn giản là gặp gỡ bạn bè, mẫu áo này chắc chắn sẽ giúp bạn tỏa sáng.
      </p>
      <img src="${s11}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST Zippy Polo có điểm nhấn là cổ áo khóa kéo hiện đại và tay áo raglan phối viền thời trang</p>

      <p id="form" class="text-2xl font-bold mt-6">3.Các form áo lớp Polo tại Potato Clothing</p>
      <p id="u" class="text-2xl font-bold mt-6">3.1 Form Unisex</p>
      <p>
      Áo Polo Unisex của Potato Clothing phù hợp cho cả nam và nữ. Với dáng áo suông, tay áo ngắn, áo thun Unisex thích hợp cho mọi lứa tuổi và không kén người mặc. Ngoài ra áo form áo polo unisex có thể che hầu hết các khuyết điểm của cơ thể, phù hợp cho nhiều sự kiện yêu cầu đồng phục.
      </p>
      <img src="${s12}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Form áo polo unisex</p>

      <p id="o" class="text-2xl font-bold mt-6">3.2 Oversized</p>
      <p>
      Tương tự như áo Unisex, form áo Oversized cũng phù hợp cho cả nam và nữ. Tuy nhiên, áo thun Oversized có một số thay đổi ở cổ áo, tay áo và dáng áo để phù hợp với phong cách thời trang đường phố trẻ trung hơn, được nhiều khách hàng là học sinh ưa chuộng.
      </p>
      <img src="${s13}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">Form áo polo oversized</p></br>

      <p id="chat" class="text-2xl font-bold mt-6">4. Chất liệu thường sử dụng cho áo Polo </p>
      <p>
      Để tạo ra một chiếc áo Polo đẹp, đứng form, thoáng mát và co giãn thoải mái, Potato Clothing thường sử dụng chất liệu vải Cá sấu. Tại Potato Clothing, có 3 loại vải Cá sấu phổ biến được ưa chuộng tại, bao gồm: cá sấu 100% Cotton, cá sấu 65% cotton, và cá sấu poly. 
      </p></br>
      <p>
      Ngoài ra, Potato Clothing còn có thêm một loại vải Cá sấu mới, chất lượng cao là vải Cá sấu Cafe (bạn có thể tham khảo thêm thông tin về loại vải này tại đây).
      </p>
      <img src="${s14}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${s15}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${s16}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${s17}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />

      <p id="bang" class="text-2xl font-bold mt-6">5. Bảng size áo Polo nhà Potato </p>
      <img src="${s18}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${s19}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p>Các bạn có thể tham khảo những mẫu thiết kế áo Polo cực đẹp, cực xịn tại Bảo tàng thiết kế áo lớp.</p>
      <p><em>
      Hy vọng qua bài viết này sẽ giúp bạn có thêm thông tin chi tiết về BST Polo Collection tại Potato. Nếu còn bất kỳ thắc mắc nào, đừng ngại mà hãy gọi ngay hotline 078 608 6494 hoặc nhắn tin Fanpage hay điền thông tin tại form bên dưới để được chúng mình tư vấn và hỗ trợ tận tình nhé! 
      </em></p>

      <h2 class='text-2xl font-bold mt-6'>Thông tin liên hệ</h2>
      <ul class='mt-2 text-gray-700'>
        <li><strong>Fanpage:</strong> Potato Clothing</li>
        <li><strong>Hotline:</strong> 028 6683 0386 - 078 608 6494</li>
        <li><strong>Email:</strong> info@potato.clothing | marketing@potato.clothing</li>
        <li><strong>Cửa hàng:</strong> 12 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Q.3, TP.HCM</li>
        <li><strong>Xưởng sản xuất:</strong> 32 Lê Đình Cẩn, P. Bình Trị Đông A, Q. Bình Tân, TP.HCM</li>
      </ul>     
      `,
    },

    {
      id: 3,
      title: "Tổng hợp các mẫu áo lớp best-seller tại Potato Clothing",
      content:`
      <p>
      Trong năm học vừa qua, các bộ sưu tập áo lớp từ thương hiệu Potato Clothing đã thực sự tạo nên cơn sốt với những mẫu áo trendy mang phong cách vô cùng trẻ trung, năng động. Hãy cùng chúng mình nhìn lại những bộ sưu tập áo lớp bán chạy nhất tại Potato nhé!
      </p>

      <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#bts-ao" class="text-blue-600 hover:underline">BST Áo Lớp Bóng Bầu Dục</a></li>
    <li><a href="#bts-lop" class="text-blue-600 hover:underline">BST Áo Lớp Football Ver 2</a></li>
    <li><a href="#bts-polo" class="text-blue-600 hover:underline">BST Áo Lớp Zippy Polo</a></li>    
    <li><a href="#bts-chay" class="text-blue-600 hover:underline">BST Áo Lớp Bóng Chày</a></li>
    <li><a href="#bts-ver" class="text-blue-600 hover:underline">BST Áo Lớp Bóng Chày Ver 2</a></li>
    </div></br>
    <p id="bts-ao" class="text-2xl font-bold mt-6">1. BST Áo Lớp Bóng Bầu Dục</p>
    <p>
    Áo lớp bóng bầu dục của Potato Clothing được cảm hứng từ trang phục thi đấu chuyên nghiệp. Nhờ form dáng thể thao hiện đại, kết hợp với chất liệu thoáng mát, bền bỉ, chịu lực tốt, điều này không chỉ mang lại sự thoải mái mà còn giúp lớp bạn thật sự nổi bật với vẻ năng động và cá tính riêng.
    </p>

   <img src="${e1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center>Áo lớp bóng bầu dục vừa cá tính vừa năng động</p>
    <p>
    Khác hẳn với áo lớp polo hay áo thun cổ tròn thông thường, áo bóng bầu dục của Potato sở hữu form thể thao hiện đại với cổ tim và tay áo lửng, mang lại vẻ ngoài mới lạ và thu hút. Bạn có thể in thêm những điểm nhấn đặc biệt như kẻ sọc ngang hay biểu tượng riêng của lớp, làm cho áo lớp của bạn thực sự độc đáo và nổi bật.
    </p></br>
    <p>
    Thiết kế thân áo chia thành 2 phần mang đến sự sáng tạo không giới hạn trong việc phối màu, cho phép bạn tạo ra một chiếc áo lớp không giống bất kỳ ai. Không chỉ là sự lựa chọn lý tưởng cho các hoạt động thể thao, áo lớp bóng bầu dục còn là lựa chọn lý tưởng giúp bạn thể hiện phong cách thời trang khi xuống phố.
    </p>

    <p id="bts-lop" class="text-2xl font-bold mt-6">2. BST Áo Lớp Football Ver 2</p>
    <p>
    BST Áo Lớp Football Ver 2 được ra mắt vào năm 2024 với những cải tiến vượt bậc. Nếu Ver 1 ưu tiên sự thoải mái với vải mè thì Ver 2 đã được nâng cấp với phần thân trên làm từ vải bóng chiếu cao cấp. Chất liệu này mang lại hiệu ứng lấp lánh độc đáo khi ánh sáng phản chiếu từ nhiều góc độ, giúp chiếc áo trở nên nổi bật hơn trong mọi hoàn cảnh.
    </p></br>
    <p>
    Nhờ sự cải tiến này, BST Ver 2 không chỉ thể hiện sự sáng tạo trong thiết kế mà còn lan tỏa nguồn năng lượng tích cực đến tập thể. Potato tin rằng với áo lớp Football Jersey Ver 2, lớp bạn sẽ luôn là tâm điểm của mọi ánh nhìn, dù ở khuôn viên trường học, trong các hoạt động ngoại khóa, hay bất kỳ sự kiện nào.
    </p></br>
    <img src="${e2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p>BST Áo Lớp Football Ver 2 được nâng cấp với chất liệu vải bóng chiếu cao cấp ở thân trên</p>

    <p id="bts-polo" class="text-2xl font-bold mt-6">3. BST Áo Lớp Zippy Polo</p>
    <p>
    Áo lớp Zippy Polo từ Potato Clothing là một phiên bản sáng tạo của áo polo cổ bẻ truyền thống, kết hợp phong cách thời trang với tính năng tiện ích. Thiết kế này mang đến sự kết hợp hoàn hảo giữa sự thoải mái của áo thun và sự chỉn chu của áo sơ mi. 
    </p>
    <img src="${e3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Thiết kế cổ zip độc đáo, năng động cho áo lớp</p></br>
    <h3 className="text-lg font-bold text-gray-900">
        Đặc điểm nổi bật của áo Zippy Polo:
      </h3>
      <ul className="mt-2 space-y-2">
        <li>
          <span className="font-bold">Khóa kéo độc đáo:</span> Thay vì nút truyền
          thống, áo lớp Zippy Polo nổi bật với khóa kéo tiện lợi. Chất liệu khóa
          kéo nhựa thời trang, không gỉ, dễ dàng điều chỉnh và giặt giữ.
        </li>
        <li>
          <span className="font-bold">Form oversized thời trang:</span> Áo có
          thiết kế rộng rãi, thoải mái, lý tưởng cho các hoạt động ngoài trời
          hoặc sự kiện văn nghệ mà không lo bị gò bó.
        </li>
        <li>
          <span className="font-bold">Tay áo raglan cá tính:</span> Tay áo raglan
          từ cổ áo đến cánh tay có thể phối màu đa dạng, tạo điểm nhấn sáng tạo
          cho lớp bạn.
        </li>
        <li>
          <span className="font-bold">Cổ áo linh hoạt:</span> Cổ áo có thể điều
          chỉnh thành cổ cao hoặc cổ bẻ, phù hợp với sở thích và nhu cầu của
          bạn.
        </li>
        <li>
          <span className="font-bold">Chất liệu và màu sắc đa dạng:</span> Áo
          được làm từ 100% cotton với màu sắc tươi sáng, thoáng khí, giúp bạn
          cảm thấy thoải mái trong mọi hoạt động.
        </li>
      </ul>
      <img src="${e4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST Zippy Polo: Đa năng, thời thượng, phối zip cực kỳ trendy</p>

      <p id="bts-chay class="text-2xl font-bold mt-6">4. BST Áo Lớp Bóng Chày</p></br>
      <p>
      Áo lớp bóng chày tại Potato Clothing mang đến một sự lựa chọn thú vị cho những ai yêu thích sự thể thao và năng động. Những mẫu áo lớp bóng chày của chúng mình được yêu thích không chỉ vì thiết kế khỏe khoắn mà còn vì sự độc đáo trong từng chi tiết.
      </p></br>
      <p>
      Chiếc áo được làm từ vải cotton cao cấp, mang lại cảm giác thoải mái tối đa khi mặc. Thiết kế cổ trái tim kết hợp cùng hàng khuy trắng tinh tế không chỉ tạo điểm nhấn khác biệt mà còn toát lên vẻ sang trọng và hiện đại, biến mẫu áo thành lựa chọn hoàn hảo cho phong cách năng động và thanh lịch.
      </p></br>
      <img src="${e5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center">BST Áo lớp bóng chày: Cá tính với phong cách thể thao năng động</p>
      <p>
      Ngoài ra, Potato có hai kiểu dáng áo lớp bóng chày để bạn lựa chọn: kiểu unisex đơn giản và kiểu tay áo raglan. Đối với cả 2 form áo bóng chày, bạn đều có thể thoải mái phối màu phần tay áo và viền áo, giúp bạn dễ dàng nổi bật và thể hiện cá tính riêng.
      </p>

      <p id="bts-ver" class="text-2xl font-bold mt-6">5. BST Áo Lớp Bóng Chày Ver 2</p>
      <p>
      Lấy cảm hứng từ BST áo lớp bóng chày best seller năm 2023, Potato Clothing tiếp tục gây ấn tượng với BST Áo Lớp Bóng Chày Ver 2 với một diện mạo hoàn toàn mới mẻ. Phiên bản này được nâng cấp với những chi tiết độc đáo ở cổ áo và tay áo.
      </p></br>
      <p>
      Phần tay áo được bổ sung thêm hai viền sọc nổi bật, trong khi cổ áo được bo thun ôm sát, giúp áo đứng form và tăng thêm vẻ khỏe khoắn, năng động. Ngoài ra, phiên bản Ver 2 cũng chuyển sang sử dụng màu sắc đồng nhất cho toàn bộ thân áo, mang đến diện mạo trẻ chung đáp ứng xu hướng thời trang học đường.
      </p>
      <img src="${e6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />

      <h2 class='text-2xl font-bold mt-6'>Thông tin liên hệ</h2>
      <ul class='mt-2 text-gray-700'>
        <li><strong>Fanpage:</strong> Potato Clothing</li>
        <li><strong>Hotline:</strong> 028 6683 0386 - 078 608 6494</li>
        <li><strong>Email:</strong> info@potato.clothing | marketing@potato.clothing</li>
        <li><strong>Cửa hàng:</strong> 12 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Q.3, TP.HCM</li>
        <li><strong>Xưởng sản xuất:</strong> 32 Lê Đình Cẩn, P. Bình Trị Đông A, Q. Bình Tân, TP.HCM</li>
      </ul> 
      `,
    },
];

const NewsDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return <div className="text-center text-gray-700 p-10">Bài viết không tồn tại.</div>;
  }

  return (
    <div className="bg-white text-black min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Chỉ hiển thị tiêu đề nếu bài viết không có tiêu đề trong content */}
        {!article.content.includes(`<h1`) && (
          <h1 className="text-3xl font-bold text-center mb-4">{article.title}</h1>
        )}
        {/* Kiểm tra nếu có ảnh riêng thì mới hiển thị */}
        {article.image && (
          <img src={article.image} alt={article.title} className="w-full rounded mb-4 shadow-md" />
        )}
        <div className="text-lg" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </div>
  );
};

export default NewsDetail;
