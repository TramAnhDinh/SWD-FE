import React from "react";
import { useParams } from "react-router-dom";
import a1 from "../assets/slider/b/a1.png";
import a2 from "../assets/slider/b/a2.png";
import a3 from "../assets/slider/b/a3.png";
import a4 from "../assets/slider/b/a4.png";
import a5 from "../assets/slider/b/a5.png";
import a6 from "../assets/slider/b/a6.png";
import a7 from "../assets/slider/b/a7.png";
import a8 from "../assets/slider/b/a8.png";
import a9 from "../assets/slider/b/a9.png";
import a10 from "../assets/slider/b/a10.png";
import a11 from "../assets/slider/b/a11.png";
import a12 from "../assets/slider/b/a12.png";
import a13 from "../assets/slider/b/a13.png";
import a14 from "../assets/slider/b/a14.png";
import a15 from "../assets/slider/b/a15.png";
import a16 from "../assets/slider/b/a16.png";
import a17 from "../assets/slider/b/a17.png";
import a18 from "../assets/slider/b/a18.png";
import a19 from "../assets/slider/b/a19.png";
import a20 from "../assets/slider/b/a20.png";
import a21 from "../assets/slider/b/a21.png";
import a22 from "../assets/slider/b/a22.png";

import p1 from "../assets/slider/a/p1.png";
import p2 from "../assets/slider/a/p2.png";
import p3 from "../assets/slider/a/p3.png";
import p4 from "../assets/slider/a/p4.png";
import p5 from "../assets/slider/a/p5.png";
import p6 from "../assets/slider/a/p6.png";
import p7 from "../assets/slider/a/p7.png";
import p8 from "../assets/slider/a/p8.png";
import p9 from "../assets/slider/a/p9.png";
import p10 from "../assets/slider/a/p10.png";
import p11 from "../assets/slider/a/p11.png";
import p12 from "../assets/slider/a/p12.png";
import p13 from "../assets/slider/a/p13.png";
import p14 from "../assets/slider/a/p14.png";
import p15 from "../assets/slider/a/p15.png";
import p16 from "../assets/slider/a/p16.png";
import p17 from "../assets/slider/a/p17.png";
import p18 from "../assets/slider/a/p18.png";
import p19 from "../assets/slider/a/p19.png";

import q1 from "../assets/slider/q/q1.png";
import q2 from "../assets/slider/q/q2.png";
import q3 from "../assets/slider/q/q3.png";
import q4 from "../assets/slider/q/q4.png";
import q5 from "../assets/slider/q/q5.png";
import q6 from "../assets/slider/q/q6.png";
import q7 from "../assets/slider/q/q7.png";
import q8 from "../assets/slider/q/q8.png";

const articles = [
  {
    id: 1,
    title: "Lý Do Nên Đặt Áo Nhóm Câu Lạc Bộ Tại Potato Clothing?",
    content: `
      <p>Áo nhóm không chỉ là đồng phục thông thường mà còn là biểu tượng của sự gắn kết và cá tính tập thể. 
      Cùng Potato tìm hiểu lý do bạn nên đặt áo nhóm cho CLB qua bài viết dưới đây nhé!</p>
      
      <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#ao-nhom-la-gi" class="text-blue-600 hover:underline">Áo nhóm là gì?</a></li>
    <li><a href="#nhung-tieu-chi" class="text-blue-600 hover:underline">Những tiêu chí khi đặt áo nhóm cho CLB</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#mau-sac" class="text-blue-600 hover:underline">2.1 Màu sắc</a></li>
      <li><a href="#thiet-ke" class="text-blue-600 hover:underline">2.2 Thiết kế</a></li>
      <li><a href="#chat-lieu" class="text-blue-600 hover:underline">2.3 Chất liệu</a></li>
      <li><a href="#gia-ca" class="text-blue-600 hover:underline">2.4 Giá cả</a></li>
      <li><a href="#time" class="text-blue-600 hover:underline">2.5 Thời gian sản xuất</a></li>
    </ul>
    <li><a href="#ly-do" class="text-blue-600 hover:underline">Lý do nên đặt áo nhóm CLB?</a></li>
    <ul class='list-disc pl-6'>
      <li><a href="#dong-nhat" class="text-blue-600 hover:underline">3.1 Tạo nên sự đồng nhất</a></li>
      <li><a href="#quang-ba" class="text-blue-600 hover:underline">3.2 Quảng bá hình ảnh cho CLB</a></li>
      <li><a href="#khac-biet" class="text-blue-600 hover:underline">3.3 Tạo sự khác biệt</a></li>
      <li><a href="#qua-tang" class="text-blue-600 hover:underline">3.4 Làm quà tặng</a></li>
      <li><a href="#ky-niem" class="text-blue-600 hover:underline">3.5 Lưu giữ kỷ niệm</a></li>
    </ul>
    <li><a href="#uu-diem" class="text-blue-600 hover:underline">Ưu điểm khi đặt áo nhóm CLB tại Potato Clothing</a></li>
    <ul class='list-disc pl-6'>
      <li><a href="#gia-uu-dai" class="text-blue-600 hover:underline">4.1 Giá ưu đãi tốt nhất</a></li>
      <li><a href="#tu-van-thiet-ke" class="text-blue-600 hover:underline">4.2 Hỗ trợ tư vấn thiết kế</a></li>
      <li><a href="#giao-hang" class="text-blue-600 hover:underline">4.3 Giao hàng nhanh chóng, đúng hẹn</a></li>
    </ul>
    <li><a href="#mau-ao-nhom" class="text-blue-600 hover:underline">Tham khảo các mẫu áo nhóm/CLB tại Potato Clothing</a></li>
  </ul>
</div>


      <p id="ao-nhom-la-gi" class="text-2xl font-bold mt-6">1. Áo nhóm là gì?</p>
      <p>Áo nhóm là loại áo được thiết kế với cùng mẫu mã, logo, khẩu hiệu hoặc tên nhóm/CLB để thể hiện sự thống nhất và đoàn kết trong một nhóm người. Loại áo này thường
       được sử dụng trong các hoạt động tập thể như sự kiện, hội nghị, dã ngoại, hoặc trong BTC, công ty, câu lạc bộ, nhóm bạn, gia đình,…</p>
      <img src="${a1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />

      <p class="text-center"><em>Áo nhóm thường được sử dụng trong các hoạt động tập thể</em></p></br>

      <p>Áo nhóm thường được làm từ các chất liệu như vải mè, cá sấu poly, cotton 4 chiều…, và có các kiểu dáng phổ biến như áo thun, áo polo, hoặc áo sơ mi. Trong đó, áo thun và áo polo là lựa chọn phổ biến nhất. 
      Thiết kế và in ấn áo nhóm có thể tùy chỉnh theo nhu cầu và sở thích của các thành viên, nhằm tạo nên nét đặc trưng riêng cho tập thể.</p>
      <img src="${a2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />

      <p id="nhung-tieu-chi" class="text-2xl font-bold mt-6">2. Những tiêu chí khi đặt áo nhóm cho CLB</p>
      <p id="mau-sac" class="text-2xl font-bold mt-6">2.1. Màu sắc</p>
      <p>
      Màu sắc của áo đóng vai trò quan trọng trong việc thể hiện tinh thần của CLB. Bạn hãy lựa chọn màu sắc phù hợp với sở thích chung của các thành viên 
      và phản ánh được chủ đề hoặc tính chất hoạt động của CLB. 
      </p></br>

      <p>
      Ví dụ, CLB thiện nguyện có thể chọn màu xanh lá tượng trưng cho sự hy vọng, trong khi CLB âm nhạc 
      có thể chọn màu đen hoặc trắng để tạo sự tinh tế và cá tính.
      </p>
      <img src="${a3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>
      Bạn nên chọn màu áo nhóm phù hợp với chủ đề và tính chất của CLB
      </em></p></br>
      <p id="thiet-ke" class="text-2xl font-bold mt-6">2.2. Thiết kế</p>
      <p>
      Thiết kế áo nên sáng tạo, ấn tượng, và thể hiện rõ tinh thần hoặc thông điệp của CLB. Một chiếc áo đẹp không chỉ giúp các thành viên tự hào khi mặc mà còn tạo dấu ấn riêng, 
      thu hút sự chú ý từ bên ngoài. Đừng quên kết hợp thêm logo, slogan, hoặc biểu tượng đặc trưng của CLB để tạo nên sự khác biệt.
      </p>
      <img src="${a4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Thiết kế áo nhóm nên sáng tạo, thể hiện rõ tinh thần CLB</em></p>

      <p id="chat-lieu" class="text-2xl font-bold mt-6">2.3. Chất liệu</p>
      <p>
        Chất liệu áo cần được ưu tiên để đảm bảo sự thoải mái và độ bền. Các loại vải thoáng mát, co giãn tốt như cotton 4 chiều hoặc 
        vải mè sẽ giúp các thành viên dễ dàng tham gia các hoạt động mà không cảm thấy khó chịu. 
      </p></br>

      <p>Bên cạnh đó, chất liệu tốt còn giúp áo giữ được form dáng và 
      màu sắc trong thời gian dài, tránh tình trạng nhanh cũ hoặc phai màu.
      </p>
      <img src="${a5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Cotton 4 chiều là loại vải được nhiều CLB ưa chuộng khi đặt áo nhóm</em></p>

      <p id="gia-ca" class="text-2xl font-bold mt-6">2.4. Giá cả</p>
      <p>
      Ngân sách luôn là yếu tố quan trọng khi đặt áo nhóm. Hãy cân nhắc lựa chọn đơn vị sản xuất đồng phục có giá cả phù hợp với 
      khả năng tài chính của CLB mà vẫn đảm bảo chất lượng. Một mức giá hợp lý sẽ giúp tất cả các thành viên sẵn sàng đóng góp mà không gặp khó khăn.
      </p>

      <p id="time" class="text-2xl font-bold mt-6">2.5. Thời gian sản xuất</p>
      <p>
      Thời gian sản xuất cũng cần được lên kế hoạch rõ ràng để đảm bảo áo được hoàn thành đúng hẹn, kịp thời cho các sự kiện hoặc hoạt động của CLB. Hãy trao đổi cụ thể với đơn vị sản xuất và đặt áo trước một khoảng thời gian hợp lý để tránh những rủi ro không mong muốn.
      </p></br>

      <p>
      Khi cân nhắc và đáp ứng đủ các tiêu chí trên, CLB của bạn sẽ sở hữu những chiếc áo nhóm không chỉ đẹp mắt mà còn ý nghĩa, gắn kết các thành viên và để lại dấu ấn đặc biệt trong mọi hoạt động.
      </p>

      <p id="ly-do" class="text-2xl font-bold mt-6">3. Lý do nên đặt áo nhóm CLB?</p>

      <p id="dong-nhat" class="text-2xl font-bold mt-6">3.1. Tạo nên sự đồng nhất</p>
      <p>
      Áo nhóm giúp xây dựng sự thống nhất về trang phục, từ đó tạo ra sự đồng bộ và gắn kết giữa các thành viên. Khi tất cả cùng mặc một chiếc áo giống nhau, tinh thần đoàn kết sẽ được nâng cao, giúp các thành viên cảm thấy tự hào và có trách nhiệm hơn với đội nhóm. 
      </p>
      <img src="${a6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
       <p class="text-center"><em>Áo nhóm giúp tạo nên sự đồng nhất giữa các thành viên trong CLB</em></p> 

       <p id="quang-ba" class="text-2xl font-bold mt-6">3.2. Quảng bá hình ảnh cho CLB</p>
       <p>
       Áo nhóm không chỉ là trang phục mà còn là công cụ quảng bá hiệu quả. Khi các thành viên mặc áo nhóm trong các sự kiện, hoạt động, hình ảnh của CLB sẽ được nhận diện rõ ràng hơn. Những chi tiết đặc trưng như logo, slogan, màu sắc hay họa tiết trên áo giúp người khác dễ dàng nhận biết và ấn tượng với phong cách riêng của nhóm.
       </p>
       <img src="${a7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
       <p class="text-center"><em>Áo nhóm góp phần quảng bá hình ảnh cho CLB</em></p>

       <p id="khac-biet" class="text-2xl font-bold mt-6">3.3. Tạo sự khác biệt</p>
       <p>
       Một chiếc áo nhóm được thiết kế riêng là cách tuyệt vời để khẳng định sự khác biệt của CLB. Trong cùng một lĩnh vực hoặc hoạt động, chiếc áo độc đáo sẽ khiến nhóm của bạn nổi bật và dễ dàng được nhận diện hơn so với các nhóm khác.
       </p>
       <img src="${a8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Một chiếc áo nhóm được thiết kế riêng biệt sẽ khẳng định sự khác biệt của CLB</em></p>
      
      <p id="qua-tang" class="text-2xl font-bold mt-6">3.4. Làm quà tặng</p>
      <p>
        Áo nhóm còn là một món quà tinh thần đầy ý nghĩa dành cho các thành viên. Chiếc áo không chỉ đơn thuần là trang phục mà còn lưu giữ những kỷ niệm đẹp trong hành trình cùng CLB. Khi nhận được áo nhóm, mỗi thành viên sẽ cảm nhận được sự quan tâm và ý nghĩa của việc gắn bó với tập thể.
      </p>
      
      <p id="ky-niem" class="text-2xl font-bold mt-6">3.5. Lưu giữ kỷ niệm</p>
      <p>
        Trong các hoạt động chung, việc cả nhóm mặc đồng phục sẽ tạo nên những khoảnh khắc đẹp và đáng nhớ. Những chiếc áo nhóm không chỉ gợi nhắc về những kỷ niệm cũ mà còn là minh chứng cho sự đồng hành và phát triển của cả tập thể. Dù thời gian trôi qua, chiếc áo nhóm sẽ luôn là biểu tượng của những ngày tháng đầy ý nghĩa bên nhau.
      </p>
      <img src="${a9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Áo nhóm còn là minh chứng cho sự đồng hành và phát triển của CLB</em></p>

      <p id="uu-diem" class="text-2xl font-bold mt-6">4. Ưu điểm khi đặt áo nhóm CLB tại Potato Clothing</p>

      <p id="gia-uu-dai" class="text-2xl font-bold mt-6">4.1. Giá ưu đãi tốt nhất</p>

      <p>
      Potato Clothing luôn đồng hành cùng các CLB tại các trường Đại Học, THPT khi bạn có nhu cầu đặt áo nhóm cho các chương trình hoặc sự kiện. Với chính sách ưu đãi hấp dẫn, Potato hỗ giảm giá từ 15 - 30% cho các đơn hàng áo đồng phục nhóm.
      </p></br>

      <p>
      Bạn chỉ cần gửi proposal và thông tin chi tiết chương trình qua email marketing.potatoclothing@gmail.com, đội ngũ nhân viên sẽ nhanh chóng liên hệ và hỗ trợ bạn một cách tận tình.
      </p>
      <img src="${a10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Potato Clothing nhận hỗ trợ giảm giá cho các đơn hàng áo nhóm, CLB</em></p>

      <p id="tu-van-thiet-ke" class="text-2xl font-bold mt-6">4.2. Hỗ trợ tư vấn thiết kế</p>
      <p>
      Potato Clothing sở hữu đội ngũ tư vấn bán hàng và thiết kế chuyên nghiệp, giúp bạn dễ dàng hiện thực hóa ý tưởng của mình. Bạn chỉ cần gửi ý tưởng hoặc mẫu thiết kế mong muốn, Potato sẽ hỗ trợ bạn chọn màu sắc, kiểu dáng đến hoàn thiện hình in miễn phí.
      </p></br>

      <p>
      Đồng thời, Potato sẽ gợi ý các phương án thiết kế tối ưu để mang lại những chiếc áo nhóm độc đáo, chất lượng và mang đậm phong cách riêng cho CLB của bạn.
      </p>
      <img src="${a11}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Potato hỗ trợ lên mẫu thiết kế cho các đơn hàng áo nhóm, doanh nghiệp từ 21 cái</em></p>
      <p id="giao-hang" class="text-2xl font-bold mt-6">4.3. Giao hàng nhanh chóng, đúng hẹn</p>
      <p>
      Potato cam kết giao hàng đúng tiến độ với thời gian gia công cơ bản từ 10 - 12 ngày. Nếu bạn cần áo gấp, Potato vẫn có thể đáp ứng với dịch vụ gia công nhanh từ 3 - 5 ngày, đảm bảo bạn nhận áo đúng lúc cho sự kiện hoặc hoạt động của mình. 
      </p></br>
      <p>
      Vì vậy, nếu bạn có nhu cầu đặt áo nhóm cho CLB, hãy liên hệ với Potato Clothing sớm nhất để được hỗ trợ thiết kế và đặt hàng nhanh chóng mà không bị phụ thu phí gấp nhé!
      </p>
      <img src="${a12}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <p class="text-center"><em>Potato nhận gia công đơn hàng từ 10 - 12 ngày</em></p>

      <p id="mau-ao-nhom" class="text-2xl font-bold mt-6">5. Tham khảo các mẫu áo nhóm/CLB tại Potato Clothing</p>
      <img src="${a13}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a14}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a15}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a16}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a17}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a18}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a19}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a20}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a21}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
      <img src="${a22}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" /></br>
      <p>
        Áo nhóm không chỉ là biểu tượng của sự đoàn kết mà còn là cách để CLB thể hiện cá tính trong các hoạt động. Với sự đồng hành từ Potato Clothing, bạn không chỉ nhận được những chiếc áo nhóm chất lượng mà còn tận hưởng dịch vụ tư vấn chuyên nghiệp, giá cả ưu đãi và thời gian giao hàng nhanh chóng. 
      </p></br>

      <p>
      Hãy để Potato Clothing giúp bạn tạo nên những chiếc áo nhóm ý nghĩa và ghi dấu kỷ niệm đẹp cho CLB của mình. Liên hệ ngay với Potato qua hotline 078 608 6494, nhắn tin fanpage hay điền thông tin tại form bên dưới để được hỗ trợ tận tình nhé!
      </p></br>


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
    title: "Áo sweater là gì? Cách phối đồ với áo sweater cực thời trang",
    content: `<p class="text-gray-700">Áo sweater là món đồ thời không thể thiếu trong tủ đồ của nhiều người nhân dịp đông về. Cùng Potato khám phá áo sweater là gì và cách phối đồ với áo sweater cực thời trang qua bài viết dưới đây nhé! </p>
    
    <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#ao-sweater" class="text-blue-600 hover:underline">Áo sweater là gì?</a></li>
    <li><a href="#cach-phoi-do" class="text-blue-600 hover:underline">Cách phối đồ với áo sweater</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#phoi" class="text-blue-600 hover:underline">2.1 Phối với áo sơ mi</a></li>
      <li><a href="#chan-vay" class="text-blue-600 hover:underline">2.2 Phối với chân váy</a></li>
      <li><a href="#quan-rong" class="text-blue-600 hover:underline">2.3 Phối với quần ống rộng</a></li>
      <li><a href="#quan-jean" class="text-blue-600 hover:underline">2.4 Phối với quần jeans</a></li>
      <li><a href="#quan-short" class="text-blue-600 hover:underline">2.5 Phối với quần short</a></li>
      <li><a href="#phu-kien" class="text-blue-600 hover:underline">2.6 Phối cùng nón, phụ kiện</a></li>
    </ul>
    <li><a href="#cau-hoi" class="text-blue-600 hover:underline">Những câu hỏi về áo sweater</a></li>
    <ul class='list-disc pl-6'>
      <li><a href="#ao-khoac" class="text-blue-600 hover:underline">3.1 Áo sweater có phải áo khoác không?</a></li>
      <li><a href="#mac-ao" class="text-blue-600 hover:underline">3.2 Mặc áo sweater có cần mặc áo trong không?</a></li>
    </ul>
    <li><a href="#cac-kieu" class="text-blue-600 hover:underline">Các kiểu áo sweater tại Potato Clothing</a></li>
    </div>

    <p id="ao-sweater"class="text-2xl font-bold mt-6">1. Áo sweater là gì?</p>
    <p>
    Áo sweater là loại áo dài tay được làm từ các chất liệu như len, cotton hay vải sợi tổng hợp. Xuất xứ từ những quốc gia có khí hậu lạnh như Anh và các nước Bắc Âu, áo sweater ban đầu được chế tác từ len lông cừu nhằm mục đích giữ ấm trong mùa đông. 
    </p></br>

    <p>
    Theo thời gian, với sự phát triển của thời trang, áo sweater không chỉ còn là một món đồ giữ nhiệt mà đã trở thành biểu tượng của phong cách tối giản và dễ dàng phối hợp trang phục.
    </p>

    <img src="${p1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Áo sweater có nguồn gốc từ các quốc gia lạnh giá</em></p></br>

    <p>
    Điểm nổi bật của áo sweater là thiết kế đơn giản, không có mũ, khóa kéo hay nút, thường có kiểu dáng trơn hoặc điểm xuyết họa tiết nhẹ nhàng. Chính nhờ sự đơn giản này, áo mang lại cảm giác thoải mái và ấm áp cho người mặc. 
    </p></br>
    <p>
    Nhờ sự đa dạng về chất liệu và thiết kế, áo sweater đã trở thành item yêu thích của các bạn trẻ, đặc biệt là trong các buổi gặp gỡ bạn bè, đi học, hay các sự kiện không quá trang trọng.
    </p>
    <img src="${p2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Áo sweater được thiết kế để mang lại cảm giác ấm áp cho người mặc</em></p>

    <p id="cach-phoi-do" class="text-2xl font-bold mt-6">2. Cách phối đồ với áo sweater</p>
    <p>
    Áo sweater dễ dàng phối hợp với nhiều món đồ khác nhau, từ quần jeans cho đến chân váy, mang đến cho các bạn vô số sự lựa chọn phong cách. Dưới đây là những gợi ý phối đồ cùng áo sweater giúp bạn tự tin hơn mỗi ngày!
    </p>

    <p id="phoi" class="text-2xl font-bold mt-6">2.1. Phối với áo sơ mi</p>
    <p>
    Một trong những cách phối đồ đơn giản với áo sweater là kết hợp với áo sơ mi. Bạn nên để lộ phần cổ áo hoặc tay áo ra ngoài để tạo nên vẻ thanh lịch và trẻ trung, giúp trang phục thêm phần ấn tượng và phong cách. Đây là một lựa chọn lý tưởng cho những ngày thời tiết chuyển mùa, vừa giữ ấm vừa tạo nên sự lịch lãm, tinh tế.
    </p>
    <img src="${p3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Mix áo sweater với áo sơ mi tạo nên vẻ thanh lịch và trẻ trung</em></p></br>

    <p id="chan-vay" class="text-2xl font-bold mt-6">2.2. Phối với chân váy</p>
    <p>
    Đối với các bạn gái yêu thích sự dịu dàng nhưng vẫn muốn thể hiện cá tính, áo sweater kết hợp với một chiếc chân váy ngắn màu đen hoặc trắng là lựa chọn tuyệt vời. Phối đồ như vậy vừa giữ được vẻ trẻ trung, năng động, lại không thiếu phần thanh lịch. 
    </p></br>
    <p>
    Còn nếu muốn tạo một vẻ ngoài nàng thơ hơn, bạn có thể phối với chân váy dài. Outfit này sẽ tạo nên vẻ ngoài nhẹ nhàng, thanh thoát, rất thích hợp cho những dịp cần sự duyên dáng mà vẫn đầy sành điệu, phù hợp cho những bạn gái yêu thích sự lãng mạn.
    </p>
    <img src="${p4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Các bạn nữ có thể lựa chọn phối áo sơ mi với chân váy để tạo nên sự nữ tính</em></p>
    
    <p id="quan-rong" class="text-2xl font-bold mt-6">2.3. Phối với quần ống rộng</p>
    <p>
    Áo sweater khi kết hợp với quần ống rộng mang đến vẻ ngoài thoải mái nhưng vẫn rất phong cách. Bạn có thể lựa chọn các kiểu quần như quần túi hộp hoặc quần jogger để tạo điểm nhấn độc đáo, phù hợp với phong cách đường phố. Set đồ này sẽ là lựa chọn hoàn hảo cho các hoạt động như thể thao, dạo phố, hay các buổi gặp gỡ bạn bè. 
    </p>
    <img src="${p5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Áo sweater kết hợp với quần ống rộng mang đến vẻ ngoài thoải mái, phong cách</em></p></br>

    <p id="quan-jean" class="text-2xl font-bold mt-6">2.4. Phối với quần jeans</p>
    <p>
    Quần jeans là món đồ cơ bản, dễ dàng kết hợp với hầu hết mọi trang phục kể cả áo sweater. Bạn có thể chọn quần jeans skinny để tôn lên vóc dáng hoặc quần jeans ống rộng để tạo sự thoải mái, thư giãn. Bộ đôi áo sweater và quần jeans phù hợp cho mọi dịp, từ đi học, đi chơi đến các cuộc hẹn bạn bè.
    </p>
    <img src="${p6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Quần jeans là món đồ cơ bản có thể phù hợp với mọi outfit</em></p></br>
    
    <p id="quan-short" class="text-2xl font-bold mt-6">2.5. Phối với quần short</p>
    <p>
    Khi thời tiết trở nên ấm áp hơn, bạn có thể thử phối áo sweater với quần short để tạo nên vẻ ngoài trẻ trung và năng động. Quần short giúp làm dịu bớt sự dày dặn của áo sweater, tạo sự cân bằng cho bộ trang phục. Đây là một lựa chọn tuyệt vời cho các bạn học sinh vào những ngày hè hoặc thu.
    </p>
    <img src="${p7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Phối áo sweater với quần short thích hợp cho những ngày hè thu</em></p>

    <p id="phu-kien" class="text-2xl font-bold mt-6">2.6. Phối cùng nón, phụ kiện</p>
    <p>
    Để thêm phần nổi bật, bạn có thể kết hợp áo sweater với các phụ kiện như nón lưỡi trai hoặc mũ len. Những món phụ kiện này không chỉ giúp bộ trang phục thêm phần thời trang mà còn giúp bạn thể hiện cá tính riêng. Đặc biệt, trong những ngày se lạnh, một chiếc khăn hoặc mũ len sẽ giúp bạn giữ ấm mà vẫn thời trang.
    </p>
    <img src="${p8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Kết hợp thêm với phụ kiện nón lưỡi trai hoặc mũ len sẽ giúp trang phục có điểm nhấn hơn</em></p></br>

    <p id="cau-hoi" class="text-2xl font-bold mt-6">3. Những câu hỏi về áo sweater</p>
    <p id="ao-khoac" class="text-2xl font-bold mt-6">3.1. Áo sweater có phải áo khoác không?</p>
    <p>
    Mặc dù áo sweater thường có khả năng giữ ấm khá tốt, nhưng nó không phải là áo khoác. Áo sweater thường là áo dài tay, chui đầu, không có mũ hoặc khóa kéo. Nếu bạn cần một lớp bảo vệ khỏi gió lạnh mạnh, bạn nên chọn áo khoác. Tuy nhiên, áo sweater có thể dùng để mặc bên trong áo khoác trong những ngày đông lạnh giá.
    </p></br>

    <p id="mac-ao" class="text-2xl font-bold mt-6">3.2. Mặc áo sweater có cần mặc áo trong không?</p>
    <p>
    Khi mặc áo sweater, bạn không nhất thiết phải mặc thêm áo trong, tùy thuộc vào chất liệu và độ dày của áo. Nếu áo sweater của bạn mỏng và không có lớp lót, bạn có thể mặc thêm một chiếc áo thun hoặc sơ mi bên trong để cảm thấy thoải mái hơn. Nếu áo sweater dày và giữ ấm tốt, bạn có thể chỉ cần mặc nó trực tiếp.
    </p>
    <img src="${p9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Áo sweater không giống với áo khoác</em></p></br>
    
    <p id="cac-kieu" class="text-2xl font-bold mt-6">4. Các kiểu áo sweater tại Potato Clothing</p>
    <img src="${p10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p11}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p12}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p13}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p14}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p15}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p16}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p17}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p18}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${p19}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" /></br>
    <p>
    Áo sweater không chỉ giữ ấm mà còn là lựa chọn linh hoạt cho nhiều phong cách khác nhau. Hãy thử ngay các cách phối đồ mà Potato gợi ý để làm mới vẻ ngoài của bạn mỗi ngày nhé!
    </p></br>
    <p>
    Nếu bạn còn bất kỳ thắc mắc nào hay có nhu cầu đặt áo sweater làm áo lớp hay áo đồng phục, đừng ngại mà hãy liên hệ ngay với Potato qua hotline 078 608 649 hoặc fanpage Potato Clothing, hay để thông tin tại form bên dưới để được tư vấn tận tình nhé!
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
    id: 3,
    title: "TẠI SAO ĐỒNG PHỤC POTATO CLOTHING GIÁ CAO?",
    content: `<p>Các yếu tố làm nên 1 chiếc áo thun chất lượng tại Potato Clothing: chất liệu vải tốt, độ bền màu cao và hình in trên áo chất lượng cao.</p>
    <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#chat-lieu" class="text-blue-600 hover:underline">Chất liệu vải</a></li>
    <li><a href="#in-hinh" class="text-blue-600 hover:underline">Chất lượng hình in</a></li>
    </div></br>

    <p>
    Các yếu tố làm nên 1 chiếc áo thun chất lượng tại Potato Clothing bao gồm: chất liệu vải tốt; độ bền màu cao; và hình in trên áo chất lượng cao.
    </p>
     
    <p id="chat-lieu" class="text-2xl font-bold mt-6">1. Chất liệu vải</p>
    <p>
    Trên thị trường có rất nhiều loại vải khác nhau. Potato Clothing tuyển chọn và sử dụng những loại vải cao cấp, chất lượng và có xuất xứ rõ ràng để sản xuất áo thun, áo khoác, quần thun.
    </p></br>
    <p>
    Chất liệu vải được nhiều khách hàng đặt nhất ở Potato là vải Cotton 100% co giãn 4 chiều. Đây là chất liệu tốt nhất dùng để may áo thun, được biết đến rộng rãi bởi các ưu điểm lớn đi kèm dẫn chứng sau đây:
    </p>
    <p>
    - Chất liệu được dệt 100% từ sợi bông
    - Thấm hút mồ hôi tốt, cảm giác mặc mát mẻ
    - Áo không xù lông
    - Độ bền màu cao
    - Độ co giãn thoải mái
    - Hình in chất lượng cao, không bong tróc, không gãy nứt.
    </p></br>
    <p>
    Vải Cotton 4 chiều 100% được dệt nên hoàn toàn từ sợi bông hữu cơ lấy từ cây bông, không pha Polyeste. Chất liệu hoàn toàn từ sợi bông được nhận thấy rõ khi bạn đốt vải áo thun này: tro tàn nhanh, không vón cục vì không có pha nhựa PE trong vải. 
    </p>
    <img src="${q1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Vải khi cháy tro tàn nhanh do được làm từ 100% sợi cotton</em></p></br>
    <p>
    Vải Cotton 4 chiều 100% tại Potato Clothing thấm hút mồ hôi tốt. Khi đổ nước lên vải, tốc độ thấm nước rất nhanh:
    </p>
    <img src="${q2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Áo thun thấm hút tốt do được làm từ 100% sợi cotton</em></p></br>

    <p>
    Đa số các chất liệu vải sẽ bắt đầu xù lông dần trong quá trình sử dụng do bề mặt vải gặp ma sát khi hoạt động hàng ngày và giặt giũ. Tuy nhiên, hiện tượng vải bị xù lông cũng có 1 nguyên nhân rất lớn bắt nguồn từ cách dệt vải. Vải Cotton 4 chiều 100% tại Potato Clothing được dệt với quy trình chỉnh chu, tỉ mỉ, mật độ vải cao, hạn chế hiện tượng xù lông áo thun trong quá trình mặc.
    </p>
    <img src="${q3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" /></br>
    <p>
    Để thấy rõ độ co dãn cao của vải, mang lại sự thoải mái khi vận động cho người mặc, Potato Clothing quay lại video thực tế khi kéo dãn chiếc áo theo 4 chiều: 2 chiều ngang và 2 chiều dọc. Dễ nhận thấy độ co dãn của áo cao, đồng thời có độ đàn hồi rất tốt. Áo nhanh chóng trở về hình dạng ban đầu, không bị nhăn, chùng vải hay dãn.
    </p></br>
    <img src="${q4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" /></br>
    <p>
    Thông thường quần áo mặc lâu bị bạc màu là do chất liệu vải không tốt, làm cho màu nhuộm chưa bám vào vải. Đối với các chất liệu được sử dụng tại Potato Clothing, áo thun không ra màu. Để áo bền màu lâu, bạn chỉ cần không sử dụng thuốc tẩy và không đổ nước giặt/bột giặt thẳng lên bề mặt áo là được.
    </p>
    <img src="${q5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Độ bền màu của áo thun Potato Clothing</em></p></br>

    <p id="in-hinh" class="text-2xl font-bold mt-6">2. Chất lượng hình in</p></br>
    <p>
    Hình in trên chiếc áo thun nói lên rất nhiều ý nghĩa của chiếc áo và những người đang mặc nó. Do đó, việc hình in luôn giữ đúng màu sắc, hình dạng, rõ ràng, sắc nét… là 1 điều rất quan trọng để nói lên chất lượng của 1 chiếc áo thun.
    </p></br>

    <p>
    Kinh doanh trong ngành may mặc với kinh nghiệm gần 7 năm (từ 2016), Potato Clothing tự tin hình in trên sản phẩm của mình luôn có chất lượng tốt nhất:
    - Hình in dẻo, co dãn theo áo
    - Hình in không bong tróc
    - Hình in không gãy nứt
    - Hình in có độ sắc nét cao
    - Màu sắc hình in không bị nhiễm màu của vải
    </p></br>

    <p>
    Một trong những nguyên nhân khiến hình in trên áo thun bị nứt là bởi vì chất liệu áo co giãn, nhưng hình in lại không co giãn theo áo. Khi giặt quần áo hoặc khi người mặc vận động mạnh làm áo căng ra, hình in trên bề mặt vải không có độ co dãn sẽ bị nứt. 
    Potato Clothing sử dụng chất liệu màu in cao cấp, với nhiều công nghệ in phù hợp với từng kiểu thiết kế khác nhau, mang đến độ dẻo cùng độ bám cao cho hình in, giúp hình in co dãn theo bề mặt vải áo, không nứt, không bong tróc.
    </p>
    <img src="${q6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center"><em>Hình in áo dẻo dai, không nứt, không bong tróc</em></p></br>

    <p>
    Đối với 1 số loại màu in chất lượng kém, những hình in màu trắng khi in lên vải đen hoặc màu tối sẽ bị nhiễm màu của vải vào hình in, dẫn đến tình trạng hình in bị thâm kim, màu trắng trên hình in ngả màu xám, nấu… 
    </p></br>

    <p>
    Với chất lượng mực in cao cấp, hình in trên áo thun tại Potato Clothing giữ màu rất tốt, không bị nhiễm màu, không bị thâm kim. Ngoài ra, độ bền màu của hình in cũng rất cao, không bị phai màu sau nhiều lần giặt.
    </p></br>
    <img src="${q7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <img src="${q8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" /></br>

    <p>
    Chất lượng của vải áo và hình in tại Potato Clothing luôn được đảm bảo là tốt nhất và luôn luôn cải thiện từng ngày. Đó chính là lí do tại sao áo đồng phục Potato Clothing có giá cao.
    </p></br>

    <p>
    Các bạn có thể tham khảo những mẫu thiết kế cực đẹp, cực xịn tại Bảo tàng thiết kế áo lớp.
    </p></br>

    <p>
    Để được tư vấn cụ thể hơn cho mẫu áo đồng phục của bạn, hãy gọi đến hotline 028 6683 0386, nhắn tin cho Fanpage hoặc để lại thông tin tại Form Nhận Tư vấn bên dưới, Potato Clothing sẽ liên hệ bạn ngay.
    </p></br>

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



const ArticleDetail = () => {
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

export default ArticleDetail;
