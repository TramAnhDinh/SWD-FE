import React from "react";
import { useParams } from "react-router-dom";
import r4 from '../assets/r/r4.png';
import r5 from '../assets/r/r5.png';
import r6 from '../assets/r/r6.png';
import r7 from '../assets/r/r7.png';
import r8 from '../assets/r/r8.png';
import r9 from '../assets/r/r9.png';
import r10 from '../assets/r/r10.png';

import y1 from '../assets/y/y1.png';
import y2 from '../assets/y/y2.png';
import y3 from '../assets/y/y3.png';
import y4 from '../assets/y/y4.png';
import y5 from '../assets/y/y5.png';
import y6 from '../assets/y/y6.png';
import y7 from '../assets/y/y7.png';
import y8 from '../assets/y/y8.png';

import d1 from '../assets/d/d1.png';
import d2 from '../assets/d/d2.png';
import d3 from '../assets/d/d3.png';
import d4 from '../assets/d/d4.png';
import d5 from '../assets/d/d5.png';
import d6 from '../assets/d/d6.png';
import d7 from '../assets/d/d7.png';
import d8 from '../assets/d/d8.png';
import d9 from '../assets/d/d9.png';
import d10 from '../assets/d/d10.png';
import d11 from '../assets/d/d11.png';
import d12 from '../assets/d/d12.png';
import d13 from '../assets/d/d13.png';
import d14 from '../assets/d/d14.png';
import d15 from '../assets/d/d15.png';
import d16 from '../assets/d/d16.png';
import d17 from '../assets/d/d17.png';
import d18 from '../assets/d/d18.png';
import d19 from '../assets/d/d19.png';
import d20 from '../assets/d/d20.png';
import d21 from '../assets/d/d21.png';
import d22 from '../assets/d/d22.png';


const articles = [
    {
        id: 1,
        title: "Hướng dẫn bảo quản vợt pickleball đúng cách",
        content: `
        <p>
        Vợt pickleball là công cụ quan trọng giúp bạn thực hiện những cú đánh chính xác trong mỗi trận đấu. Cùng Potato tìm hiểu về cách bảo quản vợt pickleball đúng cách qua bài viết dưới đây nhé!
        </p>
         <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#vi-sao" class="text-blue-600 hover:underline">Vì sao cần bảo quản vợt pickleball</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#keo" class="text-blue-600 hover:underline">1.1. Kéo dài tuổi thọ vợt</a></li>
    <li><a href="#duy" class="text-blue-600 hover:underline">1.2. Duy trì hiệu suất đánh bóng</a></li>
    <li><a href="#an" class="text-blue-600 hover:underline">1.3. Đảm bảo an toàn và bảo vệ sức khỏe</a></li>
    </ul>

    <li><a href="#huong" class="text-blue-600 hover:underline">Hướng dẫn chi tiết cách bảo quản vợt pickleball đúng cách</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#lam" class="text-blue-600 hover:underline">2.1. Làm sạch vợt sau khi sử dụng</a></li>
    <li><a href="#tranh" class="text-blue-600 hover:underline">2.2. Tránh tiếp xúc với hóa chất</a></li>
    <li><a href="#de" class="text-blue-600 hover:underline">2.3. Để vợt ở nơi khô ráo, thoáng mát</a></li>
    <li><a href="#su" class="text-blue-600 hover:underline">2.4. Sử dụng túi đựng vợt chuyên dụng</a></li>
    <li><a href="#kiem" class="text-blue-600 hover:underline">2.5. Kiểm tra tình trạng vợt thường xuyên</a></li>
    </ul>
    <li><a href="#meo" class="text-blue-600 hover:underline">Mẹo kéo dài tuổi thọ vợt pickleball</a></li>
        </ul>
    </div>
    <img src="${r4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Hướng dẫn bảo quản vợt pickleball đúng cách</p>

    <p id="vi-sao" class="text-2xl font-bold mt-6">1. Vì sao cần bảo quản vợt pickleball</p>
    <p>
    Việc bảo quản vợt pickleball đúng cách mang lại nhiều lợi ích thiết thực, không chỉ giúp tăng cường hiệu quả chơi mà còn bảo vệ sức khỏe của người chơi. Dưới đây là những lý do quan trọng tại sao bạn nên chú trọng đến việc bảo quản vợt pickleball của mình:
    </p>
    <p id="keo" class="text-2xl font-bold mt-6">1.1. Kéo dài tuổi thọ vợt</p>
    <p>
    Bảo quản vợt pickleball cẩn thận sẽ giúp duy trì độ bền của vợt, tránh được các hư hỏng do va đập, trầy xước hay mốc meo. Nhờ vậy, vợt sẽ có tuổi thọ lâu dài hơn, giúp bạn tiết kiệm chi phí thay vợt mới mà không cần lo lắng về việc sửa chữa hay thay thế thường xuyên
    </p>
    <img src="${r5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class=text-center">Bảo quản vợt pickleball cẩn thận sẽ giúp duy trì độ bền của vợt</p>

    <p id="duy" class="text-2xl font-bold mt-6">1.2. Duy trì hiệu suất đánh bóng</p>
    <p>
    Một chiếc vợt pickleball được bảo quản đúng cách sẽ giúp duy trì hiệu suất đánh bóng ổn định. Bảo vệ vợt khỏi hư hỏng không chỉ giúp bề mặt luôn sạch sẽ mà còn giữ cho bóng đi đúng hướng và đạt tốc độ như mong muốn. Khi vợt vẫn ở tình trạng tốt, bạn sẽ thực hiện những cú đánh chính xác, mạnh mẽ, từ đó nâng cao sự tự tin và cải thiện kỹ năng chơi của mình.
    </p>
    <p id="an" class="text-2xl font-bold mt-6">1.3. Đảm bảo an toàn và bảo vệ sức khỏe</p>
    <p>
    Vợt hư hỏng có thể gây nguy hiểm cho người chơi, chẳng hạn như khung vợt bị nứt vỡ có thể tạo ra các mảnh vụn, gây thương tích khi va chạm. Việc bảo quản vợt pickleball không chỉ giúp giảm thiểu nguy cơ tai nạn mà còn bảo vệ sức khỏe của bạn và những người xung quanh. 
    </p>
    <img src="${r6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Bảo quản vợt pickleball sẽ giúp bảo vệ sức khỏe người chơi hiệu</p>

    <p id="huong" class="text-2xl font-bold mt-6">2. Hướng dẫn chi tiết cách bảo quản vợt pickleball đúng cách</p>
    <p>
    Để vợt của bạn luôn bền đẹp và hiệu quả trong suốt quá trình sử dụng, việc bảo quản vợt pickleball đúng cách là vô cùng quan trọng. Dưới đây là những bước cụ thể giúp bạn duy trì vợt trong tình trạng tốt nhất:
    </p>

    <p id="lam" class="text-2xl font-bold mt-6">2.1. Làm sạch vợt sau khi sử dụng</p>
    <p>
    Sau mỗi trận đấu, bạn nên lau vợt bằng khăn mềm để loại bỏ bụi bẩn và mồ hôi tích tụ trên bề mặt. Điều này giúp bảo vệ chất liệu vợt và duy trì hiệu suất đánh bóng. Hãy nhớ lau sạch cả bề mặt đánh bóng và tay cầm sau khi sử dụng để tránh các vết bẩn bám lâu ngày.
    </p>
    <p id="tranh" class="text-2xl font-bold mt-6">2.2. Tránh tiếp xúc với hóa chất</p>
    <p>
    Các hóa chất tẩy rửa mạnh có thể làm hỏng cấu trúc vợt, khiến vợt trở nên giòn, nứt hoặc biến dạng. Những hóa chất này cũng có thể làm phai màu sơn và logo trên vợt. Vì vậy, nếu vợt bị bẩn, bạn có thể dùng một ít xà phòng nhẹ pha với nước để lau, sau đó rửa lại với nước sạch và lau khô bằng khăn mềm.
    </p>
    <img src="${r7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Tránh để vợt tiếp xúc với các hoá chất mạnh làm hỏng cấu trúc vợt</p>

    <p id="de" class="text-2xl font-bold mt-6">2.3. Để vợt ở nơi khô ráo, thoáng mát</p>
    <p>
    Hãy tránh để vợt tiếp xúc với nước mưa hoặc đặt vợt ở nơi có độ ẩm cao. Nếu vợt bị ướt, nên lau khô ngày và để vợt ở nơi thoáng mát. Tránh để vợt trong xe ô tô hoặc dưới ánh nắng trực tiếp, vì nhiệt độ cao có thể làm biến dạng vợt, đặc biệt nếu vợt làm từ vật liệu nhựa hoặc composite.
    </p>

    <p id="su" class="text-2xl font-bold mt-6">2.4. Sử dụng túi đựng vợt chuyên dụng</p>
    <p>
    Khi không sử dụng, hãy luôn đặt vợt vào túi đựng chuyên dụng để bảo vệ vợt khỏi va đập, bụi bẩn và các yếu tố tác động từ môi trường. Túi đựng vợt giúp duy trì nhiệt độ ổn định, tránh ánh nắng mặt trời trực tiếp và bảo vệ vợt khỏi các yếu tố khắc nghiệt khác.
    </p></br>
    <p>
    Trong quá trình di chuyển, hạn chế ném hoặc quăng vợt, vì hành động này có thể làm hỏng kết cấu khung hoặc dây căng của vợt. Bằng cách sử dụng bao đựng, vợt của bạn sẽ được bảo vệ tốt hơn, tránh va đập và giữ vợt luôn sạch sẽ, sẵn sàng cho những trận đấu tiếp theo.
    </p>
    <img src="${r8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Nên sử dụng bao đựng vợt chuyên dụng để bảo quản vợt pickleball lâu hơn</p>

    <p id="kiem" class="text-2xl font-bold mt-6">2.5. Kiểm tra tình trạng vợt thường xuyên</p>
    <p>
    Kiểm tra vợt định kỳ để phát hiện sớm các hỏng hóc như vết nứt, cong vênh hay mài mòn bề mặt. Nếu phát hiện bất kỳ vấn đề gì, hãy mang vợt đến cửa hàng chuyên dụng để bảo dưỡng và sửa chữa. Việc bảo dưỡng định kỳ (khoảng 6 tháng một lần) sẽ giúp vợt luôn hoạt động tốt và tránh các vấn đề nghiêm trọng.
    </p>

    <p id="meo" class="text-2xl font-bold mt-6">3. Mẹo kéo dài tuổi thọ vợt pickleball</p>
    <p>
    Để vợt pickleball của bạn luôn bền và duy trì hiệu suất chơi tối ưu, hãy tham khảo các mẹo sau:
    </p>
    <ul class="list-disc ml-6">
        <li>Tránh chơi trên các bề mặt cứng và gồ ghề, vì chúng có thể gây hỏng khung và bề mặt vợt. Lựa chọn sân chơi có bề mặt phẳng và mềm để bảo vệ vợt và kéo dài tuổi thọ của nó.</li>
        <li>Nếu vợt có dấu hiệu hư hỏng nặng mà không thể sửa chữa, đừng ngần ngại thay vợt mới. Việc thay vợt kịp thời giúp duy trì hiệu suất chơi và tránh các sự cố không mong muốn trong trận đấu.</li>
        <li>Tránh để người khác mượn vợt quá thường xuyên, vì việc sử dụng không cẩn thận có thể làm giảm chất lượng và tuổi thọ của vợt.</li>
    </ul>

    <img src="${r9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Nên sửa chữa ngay nếu vợt có dấu hiệu hư hỏng nặng</p>
    <p>
    Việc bảo quản vợt pickleball đúng cách không chỉ giúp nâng cao hiệu suất chơi mà còn kéo dài tuổi thọ của vợt. Đừng quên theo dõi blog Potato để cập nhật thêm nhiều kiến thức bổ ích về pickleball nhé!
    </p>
    <img src="${r10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Liên hệ với Potato ngay nếu bạn có nhu cầu đặt may áo pickleball nhé</p></br>
    <p>
    Nếu bạn có nhu cầu đặt may áo pickleball, đừng ngần ngại liên hệ với Potato qua hotline 078 608 6494, nhắn tin fanpage, hoặc để lại thông tin tại form bên dưới để được Potato tư vấn hỗ trợ ngay!
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
        title: "Cách bảo quản áo lớp bền đẹp theo thời gian",
        content: `
        <p>
        Áo lớp là thứ gắn liền với nhiều kỷ niệm đáng nhớ, nhưng nếu không bảo quản đúng cách, chúng sẽ dễ bị phai màu và hư hỏng. Để áo lớp luôn bền đẹp, hãy để Potato Clothing chia sẻ những mẹo bảo quản áo lớp lâu dài qua bài viết dưới đây nhé!
        </p>

        <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#vi" class="text-blue-600 hover:underline">Vì sao nên bảo quản áo lớp thường xuyên</a></li>
    
    <li><a href="#cach" class="text-blue-600 hover:underline">Cách sử dụng áo lớp khi vừa nhận về</a></li>
    <li><a href="#bao" class="text-blue-600 hover:underline">Cách bảo quản áo luôn bền đẹp</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#cang" class="text-blue-600 hover:underline">3.1. Căng thẳng tiếp theo với chất tẩy rửa</a></li>
    <li><a href="#lua" class="text-blue-600 hover:underline">3.2. Lựa chọn móc treo phù hợp</a></li>
    <li><a href="#de" class="text-blue-600 hover:underline">3.3. Để quần áo ở nơi thoáng mát</a></li>
    <li><a href="#cam" class="text-blue-600 hover:underline">3.4. Cảm giác xúc động tiếp theo với các vật sắc nét</a></li>
    <li><a href="#dung" class="text-blue-600 hover:underline">3.5. Sử dụng thêm giấy hút ẩm</a></li>
    </ul>

    <li><a href="#nhung" class="text-blue-600 hover:underline">Những lỗi thường gặp khi bảo quản áo lớp</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#ban" class="text-blue-600 hover:underline">4.1. áo quần quá nhiều lần</a></li>
    <li><a href="#treo" class="text-blue-600 hover:underline">4.2. Treo áo bằng móc kim loại</a></li>
    <li><a href="#ui" class="text-blue-600 hover:underline">4.3. Ủi áo ở nhiệt độ cao</a></li>
    <li><a href="#p" class="text-blue-600 hover:underline">4.4. P áo thở ngoài trời quá lâu</a></li>
    </ul>
    </div>
    <img src="${y1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Cách bảo quản áo lớp bền đẹp theo thời gian</p>

    <p id="vi" class="text-2xl font-bold mt-6">1. Vì sao nên bảo quản áo lớp thường xuyên</p>
    <p>
    Áo lớp không chỉ là trang phục thể hiện tinh thần kết nối mà còn gắn liền với những khoảnh khắc đáng nhớ trong thời gian học sinh. Đặc biệt, áo lớp thường xuyên được sử dụng trong các tình huống, ngoại khóa ngoài trời, nên nếu không được bảo quản đúng cách, áo lớp dễ bị mất độ bền, màu sắc nhạt dần và hình dạng mờ đi. 
    </p></br>
    <p>
        Vì vậy, việc bảo quản lớp không chỉ giúp duy trì vẻ ngoài như mới mà còn kéo dài tuổi thọ của những chiếc áo này. Khi mỗi người đều chú ý đến việc giữ áo lớp, cả nhóm sẽ cùng tạo ra một môi trường tích cực, đầy tinh thần đồng đội. Áo lớp sạch sẽ, thơm tho nhưng vẫn tạo cảm giác tự tin khi bạn mặc, và gây ấn tượng tốt cho những người xung quanh. 
    </p>
    <img src="${y2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Áo liền quần với những khoảnh khắc đáng nhớ trong thời gian học sinh</p>

    <p id="cach" class="text-2xl font-bold mt-6">2. Cách sử dụng áo lớp khi vừa nhận về</p>
    <ul class="list-disc ml-6">
        <li><strong>Phơi nắng trước khi mặc:</strong> Khi mới nhận áo, bạn cần phơi áo dưới ánh nắng nhẹ khoảng 10-15 phút trước khi mặc. Điều này giúp hình thành trên áo khô hoàn toàn, tránh tình trạng khó chịu khi tiếp xúc với độ ẩm hoặc mồ hôi.</li>
        <li><strong>Giặt lần đầu với nước bằng tay:</strong> Khi rửa áo lần đầu, hãy nhẹ nhàng áo trái ra ngoài và rửa bằng tay với nước lạnh hoặc nước ấm dưới 40°C. Tránh ngâm áo quá lâu trong nước hoặc nước xả phòng vì điều này có thể làm giảm độ bền của vải.</li>
        <li><strong>Căng áo và phơi ngay sau khi tẩy:</strong> Sau khi tẩy, bạn nên căng lại áo sao cho áo không bị nhăn hoặc co lại, tránh để áo bị căng hoặc bị ngửa ở những chỗ có hình, vì điều này có thể làm hỏng phần in.</li>
        <li><strong>Treo quần thẳng thớm:</strong> Sau khi áo khô, nếu bạn cần treo áo, hãy treo áo thẳng trên móc có kích thước phù hợp để áo không bị giãn hay mất dáng. Nếu không cần mặc ngay, bạn có thể gấp gọn áo gọn gàng và cất vào tủ để áo luôn giữ được hình thức đẹp và tránh bị biến dạng.</li>
    </ul>
    <img src="${y3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Sau khi không nên treo quần thẳng thớm để tránh mất form</p>

    <p id="bao" class="text-2xl font-bold mt-6">3. Cách bảo quản áo luôn bền đẹp</p>
    <p id="cang" class="text-2xl font-bold mt-6">3.1. Căng thẳng tiếp theo với chất tẩy rửa</p>
    <p>
    Các chất tẩy rửa như axit hay clo có thể gây hại cho vải và làm mờ màu áo lớp. Nếu không được xả sạch hoàn toàn, các chất tẩy rửa này có thể gây kích ứng khi bạn mặc áo. 
    </p></br>
    <p>
    Do đó, để bảo vệ lớp áo, bạn nên sử dụng sữa rửa mặt nhẹ nhàng, không chứa chất tẩy rửa mạnh. Ngoài ra, việc pha nước sạch cũng sẽ giúp áo giữ được độ bền lâu dài và không bị hư hại.
    </p>
    <img src="${y4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Chế độ các chất tẩy rửa mạnh làm màu vải áo</p>

    <p id="lua" class="text-2xl font-bold mt-6">3.2. Lựa chọn móc treo phù hợp</p>
    <p>
    Móc treo cũng đóng vai trò quan trọng trong công việc bảo quản áo lớp. Loại móc kim có thể làm áo biến dạng và tạo nếp nhăn, trong khi móc nhựa hoặc gỗ giúp áo giữ được kiểu dáng. Vì vậy đối với áo thun, bạn có thể chọn móc đơn giản, còn đối với áo sơ mi, hãy sử dụng loại móc chắc chắn để tránh tình trạng áo bị nhăn. 
    </p>

    <p id="de" class="text-2xl font-bold mt-6">3.3. Để quần áo ở nơi thoáng mát</p>
    <p>
    Bạn nên mặc áo lớp ở nơi khô ráo, thoáng mát để tránh ẩm, ẩm. Nếu áo được đặt trong môi trường ẩm ướt, bạch dương và vi khuẩn có thể hình thành, gây khó chịu và ảnh hưởng đến chất lượng áo. Tốt nhất, hãy sắm áo trong các tủ đồ có khe thoáng khí hoặc hộp kính quần áo có thể thoát hơi ẩm.
    </p>
    <img src="${y5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Cẩn thận phơi quần áo ở nơi thoáng mát tránh kem</p>

    <p id="cam" class="text-2xl font-bold mt-6">3.4. Cảm giác xúc động tiếp theo với các vật sắc nét</p>
    <p>
    Các vật quý như chìa khóa, đồ sức hoặc các vật dụng khác có thể làm rách hoặc hư hỏng bề mặt áo. Để bảo vệ lớp áo khỏi những tổn thương này, bạn nên giữ áo luôn gọn gàng và tránh để áo tiếp xúc với những vật quý giá. Điều này sẽ giúp áo không bị choáng hoặc run rẩy, giữ được vẻ đẹp lâu dài
    </p>

    <p id="dung" class="text-2xl font-bold mt-6">3.5. Sử dụng thêm giấy hút ẩm</p>
    <p>
    Giấy hút ẩm là một giải pháp hiệu quả giúp giữ áo luôn khô và thơm. Các loại giấy hút ẩm sẽ giúp loại bỏ độ ẩm dư thừa, hòa bình và diệt khuẩn, đồng thời cũng lưu lại hương thơm lâu dài, tạo áo lớp luôn tươi mới mỗi lần sử dụng. 
    </p>

    <p id="nhung" class="text-2xl font-bold mt-6">4. Những lỗi thường gặp khi bảo quản áo lớp</p>
    <p id="ban" class="text-2xl font-bold mt-6">4.1. áo quần quá nhiều lần</p>
    <p>
    nền áo quá thường xuyên có thể làm giảm độ bền của vải và làm màu nhạt dần theo thời gian. Vì vậy, bạn chỉ nên giặt áo khi thực sự cần thiết và tránh ngâm áo trong nước hay xà phòng quá 1 giờ trước khi giặt. Việc giặt quá nhiều lần không chỉ làm áo nhanh hư mà còn làm phai màu hình trong, khiến áo mất đi sự tươi mới.
    </p>
    <img src="${y6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Không nên giặt quần áo thường xuyên vì sẽ làm giảm độ bền của vải</p>
    <p id="treo" class="text-2xl font-bold mt-6">4.2. Treo áo bằng móc kim loại</p>
    <p>
    Loại móc kim có thể làm áo bị biến dạng và để lại vết loét khó coi, đặc biệt là đối với áo thun hoặc áo sơ mi. Chúng còn có thể gây nguy hiểm, làm hỏng chất liệu vải và ảnh hưởng đến độ bền của lớp áo. Thay vào đó, bạn nên sử dụng móc treo bằng nhựa hoặc gỗ, giúp áo luôn giữ được kiểu dáng thời trang và không bị gấp nếp. 
    </p>

    <p id="ui" class="text-2xl font-bold mt-6">4.3. Ủi áo ở nhiệt độ cao</p>
    <p>
    Ủi áo ở nhiệt độ quá cao có thể làm vải cháy, làm mất hình trong hoặc vải được chế tạo lại, ảnh hưởng đến chất lượng áo. Đặc biệt, khi nén áo có hình in, nhiệt độ cao sẽ làm cho hình ảnh bị mờ hoặc bong tróc. Để tránh điều này, bạn nên nén áo ở nhiệt độ thấp và luôn đặt khăn vải mỏng lên hình khi an ủi, tránh an toàn trực tiếp lên hình in.
    </p>
    <img src="${y7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Tránh keo quần áo ở nhiệt độ cao để làm cháy vải</p>

    <p id="p" class="text-2xl font-bold mt-6">4.4. P áo thở ngoài trời quá lâu</p>
    <p>
    P áo hơi dưới ánh nắng trực tiếp trong thời gian dài có thể gây hại cho vải và làm giảm độ bền. Để áo giữ lớp luôn như mới, bạn nên phơi áo ở nơi mát mẻ hoặc bóng mát, tránh ánh nắng trực tiếp làm ảnh hưởng đến chất lượng hình ảnh.
    </p>
    <img src="${y8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Việc bảo quản áo lớp đúng cách sẽ giúp áo luôn bền đẹp</p></br>
    <p>
    Việc bảo quản áo lớp đúng cách không chỉ giúp áo luôn bền đẹp mà còn kéo dài tuổi thọ và giữ lại những kỷ niệm đáng nhớ. Nếu còn bất kỳ thắc mắc nào muốn đặt áo lớp cho đội của mình, đừng ngần ngại hãy liên hệ với chúng tôi qua đường dây nóng 078 608 6494 hoặc nhắn tin Facebook hay điền thông tin tại biểu mẫu bên dưới để được Potato tư vấn tận tình nhé!
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
        title: "Kinh nghiệm chọn màu áo lớp đẹp dành cho các bạn học sinh",
        content: `
        <p>
        Việc chọn màu áo lớp không chỉ giúp lớp bạn tạo dấu ấn riêng biệt mà còn ảnh hưởng đến vẻ ngoài của các bạn học sinh. Xem ngày bài viết này để cùng Potato chia sẻ kinh nghiệm chọn màu áo lớp đẹp và phù hợp nhất nhé!
        </p>
        <div class='bg-yellow-100 p-4 rounded-md'>
      <h3 class='text-lg font-bold text-gray-800'>Mục lục</h3>
    <ul class='list-decimal pl-6 text-gray-700'>
    <li><a href="#kinh" class="text-blue-600 hover:underline">Kinh nghiệm chọn màu áo lớp</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#chon" class="text-blue-600 hover:underline">1.1. Chọn màu theo hot trend</a></li>
    <li><a href="#mau" class="text-blue-600 hover:underline">1.2. Chọn màu theo sở thích số đông</a></li>
    <li><a href="#de" class="text-blue-600 hover:underline">1.3. Chọn màu để tôn da</a></li>
    </ul>

    <li><a href="#top" class="text-blue-600 hover:underline">Top những màu áo lớp đẹp nhất tại Potato Clothing</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#doi" class="text-blue-600 hover:underline">2.1. Đối với da ngăm</a></li>
    <li><a href="#voi" class="text-blue-600 hover:underline">2.2. Đối với da sáng</a></li>
    </ul>

    <li><a href="#phoi" class="text-blue-600 hover:underline">Mẹo phối màu áo lớp đơn giản</a></li>
    <ul class='list-disc pl-6'>
    <li><a href="#don" class="text-blue-600 hover:underline">3.1. Phối màu đơn sắc</a></li>
    <li><a href="#cung" class="text-blue-600 hover:underline">3.2. Phối màu cùng tone</a></li>
    <li><a href="#bo" class="text-blue-600 hover:underline">3.3. Phối màu bổ sung</a></li>
    <li><a href="#tuong" class="text-blue-600 hover:underline">3.4. Phối màu tương phản</a></li>
    </ul>
    <li><a href="#tham" class="text-blue-600 hover:underline">Tham khảo bảng màu của Potato Clothing ở đâu?</a></li>
    </ul>
    </div>
        <img src="${d1}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
        <p class="text-center">Kinh nghiệm chọn màu áo lớp đẹp dành cho các bạn học sinh</p>

    <p id="kinh" class="text-2xl font-bold mt-6">1. Kinh nghiệm chọn màu áo lớp</p>
    <p id="chon" class="text-2xl font-bold mt-6">1.1. Chọn màu theo hot trend</p>
    <p>
    Các xu hướng màu sắc trong giới trẻ thường xuyên thay đổi, từ những bộ sưu tập thời trang nổi bật cho đến các màu sắc được các ngôi sao yêu thích. Ngoài ra, các màu pastel nhẹ nhàng hay những tông màu neon rực rỡ cũng đang rất được ưa chuộng. Do đó, việc lựa chọn màu theo hot trend sẽ giúp áo lớp luôn bắt kịp thời đại, tạo ra cho lớp mình những xu hướng thời trang phong cách hơn.
    </p></br>
    <p>
    Vd: Peach Fuzz được xem là màu hot trend trong năm 2024, với sắc cam đào nhẹ nhàng, mang đến cảm giác ấm áp, bình yên trong cuộc sống đầy biến động. Không chỉ là một màu sắc, Peach Fuzz còn gửi gắm thông điệp về sự kết nối, đồng cảm và những niềm vui giản dị trong cuộc sống.
    </p>
    <img src="${d2}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Peach Fuzz là màu hot trend 2024 mang thông điệp về sự đồng cảm và niềm vui</p></br>
    <p id="mau" class="text-2xl font-bold mt-6">1.2. Chọn màu theo sở thích số đông</p>
    <p>
    Chọn màu áo lớp là một quyết định tập thể, việc tham khảo ý kiến của mọi người trong lớp là vô cùng quan trọng. Bạn nên tổ chức một cuộc khảo sát để biết màu sắc nào được ưa chuộng nhất. Khi phần lớn thành viên trong lớp cùng yêu thích một màu, chiếc áo sẽ trở nên có ý nghĩa đặc biệt, gắn kết mọi người lại với nhau.
    </p></br>
    <p>
    Tuy nhiên, nếu một màu được coi là hot trend nhưng không nhận được sự đồng thuận của các bạn trong lớp, đừng ngần ngại mà hãy cân nhắc thêm những màu sắc khác. Sự đa dạng về sở thích và cá tính là điều không thể tránh khỏi, nếu bạn là lớp trưởng có thể giúp tổng hợp ý kiến và lựa chọn màu sắc sao cho hài hòa và phù hợp với ngân sách chung của lớp.
    </p>

    <p id="de" class="text-2xl font-bold mt-6">1.3. Chọn màu để tôn da</p>
    <p>
    Một yếu tố quan trọng khi chọn màu áo lớp chính là làm sao để màu sắc phù hợp với sắc tố da của đa số các bạn trong lớp. Nếu lớp có nhiều bạn có làn da sáng, thì các gam màu nhẹ nhàng như trắng, xanh pastel hay hồng nhạt sẽ rất phù hợp hợp, giúp mang lại một vẻ ngoài dịu dàng và tươi mới. 
    </p></br>
    <p>
    Còn nếu lớp có nhiều bạn có làn da ngăm, nên chọn những màu đậm và nổi bật như đỏ đô, xanh dương, hay vàng mustard sẽ giúp tạo sự tương phản mạnh mẽ, làm sáng da và khiến mọi người trông thật cuốn hút.
    </p>
    <img src="${d3}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Xanh dương là màu luôn được các bạn học sinh ưa chuộng tại Potato</p>

    <p id="top" class="text-2xl font-bold mt-6">2. Top những màu áo lớp đẹp nhất tại Potato Clothing</p>
    <p id="doi" class="text-2xl font-bold mt-6">2.1. Đối với da ngăm</p>
    <p>
    Màu xanh dương: Màu xanh dương là một lựa chọn tuyệt vời cho các bạn có làn da ngăm, vì đây là màu sắc tươi sáng nhưng không quá chói. Màu xanh dương tạo nên sự nổi bật mà không làm mất đi vẻ tự nhiên của làn da. Đây là màu sắc dễ phối đồ và có thể làm nổi bật phong cách năng động và hiện đại của lớp.
    </p>
    <img src="${d4}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu xanh dương giúp tạo sự nổi bật nhẹ nhàng</p>
    <p>
    Màu xanh trời nhạt: Màu xanh trời nhạt là một lựa chọn tuyệt vời cho những bạn có làn da ngăm. Sắc xanh nhẹ nhàng, tươi mới này mang lại cảm giác thư thái, bình yên và đầy năng lượng tích cực. Đây là màu sắc dịu mắt, dễ chịu, phù hợp với những dịp vui vẻ, năng động.
    </p>
    <img src="${d5}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu xanh trời nhạt mang lại cảm giác thư thái, bình yên</p></br>
    <p>
    Màu đỏ đô: Đỏ đô là một màu sắc rất đặc biệt, vừa tôn lên vẻ đẹp của làn da ngăm, vừa tạo cảm giác cá tính mạnh mẽ. Ngoài ra, màu đỏ đô là sự lựa chọn lý tưởng cho những dịp đặc biệt, giúp lớp bạn trở nên ấn tượng và thu hút mọi ánh nhìn.
    </p>
    <img src="${d6}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu đỏ đô giúp làn da ngăm thêm rạng rỡ, mang lại sự ấm áp và sang trọng</p>
    <p>
    Màu xanh rêu: Màu xanh rêu là một màu sắc rất hài hòa, dễ chịu cho mắt nhưng không kém phần nổi bật và thu hút. Đây là màu sắc thể hiện sự tinh tế và trưởng thành, dễ phối hợp với nhiều phụ kiện và trang phục khác để tạo nên những bộ outfit đầy ấn tượng nhưng không quá phô trương.
    </p>
    <img src="${d7}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center>Màu xanh rêu mang đến sự mạnh mẽ nhưng vẫn hài hoà</p></br>
    <p>
    Màu đen: Màu đen luôn là lựa chọn an toàn và không bao giờ lỗi mốt. Đây là một màu sắc huyền bí, sang trọng và có thể tôn lên vẻ đẹp của mọi làn da. Màu đen giúp tạo sự tương phản rõ rệt, mang lại cảm giác quyến rũ và đầy quyền lực. Đây cũng là màu dễ dàng lựa chọn cho các dịp học tập, sự kiện hoặc các hoạt động ngoài trời.
    </p>
    <img src="${d8}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu đen là lựa chọn an toàn và sang trọng, giúp tôn lên vẻ đẹp của da ngăm</p></br>
    <p>
    Màu vàng: Mặc dù không phải là màu phổ biến trong các thiết kế áo lớp, nhưng với làn da ngăm, màu vàng hay vàng tươi có thể giúp da trông sáng hơn rất nhiều. Màu vàng tạo ra sự nổi bật mà không quá lòe loẹt, mang đến một diện mạo tươi mới và đầy năng lượng.
    </p>
    <img src="${d9}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu vàng thể hiện sự tươi mới và đầy năng lượng</p></br>
    <p>
    Màu tím đậm: Màu tím đậm là một lựa chọn mạnh mẽ và ấn tượng cho áo lớp. Màu tím đậm giúp tôn lên vẻ đẹp của làn da ngăm, tạo ra sự tương phản nổi bật mà không làm mất đi vẻ tự nhiên. Nó cũng thể hiện sự chín chắn và tinh tế, làm cho người mặc cảm thấy tự tin và thu hút ánh nhìn. 
    </p>
    <img src="${d10}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu tím đậm là một lựa chọn mạnh mẽ và ấn tượng cho áo lớp</p></br>

    <p id="voi" class="text-2xl font-bold mt-6">2.2. Đối với da sáng</p>
    <p>
    Màu cam: Màu cam giúp làm sáng gương mặt và tạo sự rực rỡ, đặc biệt phù hợp với làn da sáng. Đây là màu sắc tươi tắn, mang lại vẻ năng động và trẻ trung, rất thích hợp cho những dịp vui tươi hoặc các hoạt động ngoài trời.
    </p>
    <img src="${d11}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu cam mang phong cách tươi tắn, rực rỡ</p></br>
    <p>
    Màu hồng: Màu hồng nhạt hay hồng pastel là lựa chọn hoàn hảo cho áo đồng phục lớp, mang đến vẻ đẹp nhẹ nhàng, dịu dàng và tươi mới, đặc biệt phù hợp với làn da sáng. Đây là màu sắc thân thiện, gợi lên hình ảnh nhí nhảnh, dễ thương, giúp tập thể trở nên rực rỡ và tràn đầy sức sống.
    </p>
    <img src="${d12}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu hồng là lựa chọn hoàn hảo cho vẻ đẹp nhẹ nhàng</p></br>

    <p>
    Màu trắng: Màu trắng là lựa chọn kinh điển và dễ dàng kết hợp với mọi trang phục. Nó giúp làm sáng da và tạo cảm giác thanh thoát, nhẹ nhàng. Sự tối giản và tinh tế của màu trắng rất thích hợp cho những dịp trang trọng hay casual, dễ dàng phối hợp với phụ kiện và các màu sắc khác để tạo điểm nhấn cho áo lớp.
    </p>
    <img src="${d13}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu trắng là lựa chọn kinh điển và dễ dàng kết hợp với mọi trang phục</p></br>

    <p>
    Màu vàng: Các tông màu vàng nhẹ như vàng tươi hay vàng chanh rất phù hợp với da sáng, mang lại cảm giác tươi mới và thanh thoát. Đây là màu sắc không bao giờ lỗi mốt, tạo sự nổi bật mà vẫn giữ được vẻ dịu dàng, tạo nên sự cân bằng hoàn hảo giữa sự tươi trẻ và vẻ đẹp tự nhiên.
    </p>
    <img src="${d14}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu vàng tươi mang cảm giác tươi mới và thanh thoát</p></br>

    <p>
    Màu đỏ: Màu đỏ tươi hay đỏ cherry rất phù hợp với làn da sáng, giúp làm nổi bật làn da và tạo cảm giác rạng rỡ. Đây là màu sắc mạnh mẽ, thể hiện sự tự tin, quyến rũ và thu hút ánh nhìn. Màu đỏ cũng là biểu tượng của sức mạnh và sự nhiệt huyết, giúp người mặc trở nên nổi bật và thu hút sự chú ý trong mọi tình huống.
    </p>
    <img src="${d15}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu đỏ tươi rất phù hợp với làn da sáng</p></br>
    <p>
    Màu tím nhạt: Màu tím nhạt là một lựa chọn tuyệt vời cho áo lớp, đặc biệt phù hợp với những bạn có làn da sáng. Sắc tím nhẹ nhàng này mang đến vẻ đẹp dịu dàng và thanh lịch, giúp người mặc cảm thấy tự tin và nổi bật một cách tinh tế. 
    </p>
    <img src="${d16}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu tím nhạt mang vẻ đẹp dịu dàng, thanh lịch</p></br>

    <p>
    Màu xanh lá nhạt: Màu xanh lá nhạt mang đến vẻ đẹp tự nhiên và tươi mới. Sắc xanh lá nhẹ nhàng này tượng trưng cho sự tươi mát, thư giãn và làm nổi bật làn da sáng. Màu xanh lá nhạt tạo ra sự thanh thoát, dễ chịu và mang lại cảm giác mát mẻ cho người mặc.
    </p>
    <img src="${d17}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu xanh lá nhạt tượng trưng cho sự tươi mát, thư giãn</p></br>

    <p id="phoi" class="text-2xl font-bold mt-6">3. Mẹo phối màu áo lớp đơn giản</p>
    <p id="don" class="text-2xl font-bold mt-6">3.1. Phối màu đơn sắc</p>
    <p>
    Phối màu đơn sắc tạo sự thống nhất và đơn giản nhưng vẫn rất hiệu quả. Bạn có thể chọn các gam màu trung tính như  trắng, đen, xám, beige để dễ phối hợp với bất kỳ màu sắc khác. Đây là cách phối hợp không cầu kỳ nhưng lại giúp bộ trang phục có sự hài hòa và tinh tế, mang đến cảm giác trang nhã và thanh lịch. 
    </p>
    <img src="${d18}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Màu be là màu dễ phối đồ phù hợp với mọi loại da</p></br>

    <p id="cung" class="text-2xl font-bold mt-6">3.2. Phối màu cùng tone</p>
    <p>
    Phối màu cùng tone là sự kết hợp các sắc thái của cùng một màu, như các tông xanh dương từ xanh nhạt đến xanh navy hay xanh biển. Cách này tạo sự đồng nhất nhưng vẫn có sự đa dạng, giúp lớp bạn không bị nhàm chán. Bạn chỉ cần chọn tông màu chủ đạo, sau đó tìm các biến thể của màu đó để phối hợp một cách hợp lý.
    </p>
    <img src="${d19}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Có thể chọn phối các gam màu cùng tông từ đậm đến nhạt</p>

    <p id="bo" class="text-2xl font-bold mt-6">3.3. Phối màu bổ sung</p>
    <p>
    Phối màu bổ sung là cách kết hợp các màu đối diện nhau trên bánh xe màu sắc, ví dụ như cam và xanh dương. Đây là kiểu phối mang lại sự tươi mới và sức sống, tạo điểm nhấn thú vị cho chiếc áo lớp. Bạn hãy chọn một màu chủ đạo rồi tìm màu đối diện trên bảng màu để tạo sự tương phản hấp dẫn.
    </p>
    <img src="${d20}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Phối màu bổ sung là cách kết hợp các màu đối diện nhau trên bánh xe màu sắc</p></br>

    <p id="tuong" class="text-2xl font-bold mt-6">3.4. Phối màu tương phản</p>
    <p>
    Phối màu tương phản giúp tạo sự nổi bật và ấn tượng bằng cách kết hợp các màu sắc mạnh mẽ, như đỏ với xanh lá cây, đen với vàng, hay tím với cam. Phương pháp này giúp áo lớp của bạn thêm phần độc đáo và thu hút sự chú ý, phù hợp cho những ai muốn thể hiện cá tính mạnh mẽ.
    </p>
    <img src="${d21}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Phối màu tương phản sẽ giúp áo lớp của bạn thêm phần độc đáo hơn</p>

    <p id="tham" class="text-2xl font-bold mt-6">4. Tham khảo bảng màu của Potato Clothing ở đâu?</p>
    <p>
    Để chọn màu áo lớp phù hợp, bạn có thể tham khảo bảng màu vải trên website Potato Clothing. Còn nếu muốn trực tiếp cảm nhận màu sắc và chất liệu, hãy đến Potato Clothing Store tại 12 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Q3, nhân viên sẽ hỗ trợ bạn xem mẫu và thử các màu áo lớp để chọn lựa màu sắc ưng ý.
    </p></br>
    <p>
    Chọn màu áo lớp không chỉ là cách thể hiện cá tính tập thể mà còn là kỷ niệm đáng nhớ của tuổi học trò. Đừng quên tham khảo các mẫu áo lớp tại Potato Clothing để tìm kiếm những thiết kế đẹp mắt, hợp xu hướng và phù hợp với phong cách riêng của lớp bạn nhé!
    </p>
    <img src="${d22}" alt="Mẫu áo nhóm" class="w-full rounded-md shadow-md mt-4" />
    <p class="text-center">Ghé thăm cửa hàng Potato Clothing Store để được nhân viên tư vấn tận tình nhé</p></br>
    <p>
    Hy vọng những kinh nghiệm và gợi ý trong bài viết sẽ giúp bạn dễ dàng chọn được màu áo phù hợp nhất. Nếu bạn còn bất kỳ thắc mắc nào hay có nhu cầu đặt áo cho lớp của mình, đừng ngại mà hãy liên hệ ngay với Potato qua hotline 078 608 649 hoặc fanpage Potato Clothing, hay để thông tin tại form bên dưới để được tư vấn tận tình nhé!
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

];

const HandDetail = () => {
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

export default HandDetail;