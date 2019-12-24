# Phase 3-1
### 17/12/2019
+ Thiết kế Payment.js
+ Thiết kế các logic cho Payment.js
+ Chỉnh sửa UI setState - toggle - validation 
+ Tạo 1 component con CreditCard.js quản lý cho việc show/hide
+ Tập tành deploy Firebase lại hiểu rõ hơn về Firebase
+ Thêm các mục modal Map bằng Hooks, hiểu rõ hơn về history.push và cách truyền state/pathname
+ Xử lý logic cho mục giá tiền hiển thị liveUpdate mượt mà
+ Lên ý tưởng truyền param payment/...
+ Lên draft bằng Firebase collection payment
### 18/12/2019
+ Thêm mục mã giảm giá
+ Thêm noti báo tương ứng
+ Hoàn thành Payment.js
+ Fix UI
+ Gặp kha khá khó khăn trong việc tìm hiểu docs nhưng về sau đã hiểu
+ querySelector
+ Gặp hoàn cảnh phải vận dụng async await để handle map (object) push lên db
#### Học được kĩ thuật add data vào firebase
>

    db.collection("user").doc(uid).collection("payment").add({})

### 19/12/2019
+ Sau khi hiểu ý tưởng làm payment thì làm khá nhanh
+ Vận dụng thêm thuật toán get docId vừa generate
+ Hiểu rõ hơn về promise và return giá trị
+ Refractor code thành 1 hàm handlePostFirebase hoàn chỉnh
+ Set link cho cả giao dịch vừa hoàn thành
![Imgur Image](https://i.imgur.com/3BNya1A.png)
+ Các test cases thành công
+ Chuyển trang bằng cách push và mang state theo sau đó set và đổ data vô PaymentDetails
+ Hoàn thành concept Payment
### 20/12/2019
+ Nghiên cứu về OAuth
+ Nghiên cứu concept về data structure thuận tiện cho việc chạy các chức năng của web
#### Nhận ra data structure là map theo id người dùng => kiếm cách lấy id add lên và genrate các document fields
+ Dự tính migrate sang auth khác thay vì TMDB
+ Tạo branch testauth để test auth with Provider Facebook của Firebase
#### Concept ban đầu là bắn action lên đẻ kích hoạt props logInStatus nhưng không maintain được cái props đó
+ Lúc này chưa test nên chưa rõ bug trên
Concept cơ bản UserLogin:
![Imgur Image](https://i.imgur.com/FAX2eCm.png)
#### hàm authenticate vận dụng các generate Provider dựa trên đối số truyền vào -> .then trả promise thận hiện authHandler chủ yếu là handle set displayName và avatar componentDidMount để giữ state người đã đăng nhập (check user===true?)
Concept cơ bản UserProfile:
![Imgur Image](https://i.imgur.com/5RWb1Zz.png)
#### Ban đầu chưa rõ về luồng đi nên là làm khá rối, chủ yếu nhận data từ bên Login vào bằng cách truyền state -> bất cập, sử dụng hàm logout của Firebase
+ Chạy thành công nhưng kha khá bugs
+ Lên ý tưởng layout userLogin và userProfile
### 21/12/2019
+ Hoàn thành userLogin và userProfile
+ Add và chỉnh carousel cho UserProfile
+ Học cách navigate đến data mình muốn và thành công
+ Đổ được data mong muốn
+ Data đặt vé đã xong - full responsive
+ Custom css ổn định chạy ok -> fix các override
+ Public app và Login Facebook thành công
+ Nhận ra có bugs khi dùng React DevTools -> Props logInStatus hoạt động không như ý muốn
+ Redirect không đúng ý muốn
+ Cân nhắc lại props logInStatus
+ Mentor gợi ý sử dụng localStorage
+ Demo thử login và hoạt động như ý muốn, không báo lỗi thường xuyên nữa
+ Add check login bằng uid -> Hoạt động mượt, sử dụng push để redirect thay vì {Redirect} của react-router-dom
+ Chỉnh route profile
+ Đổ data cho Ticket và Carousel của UserProfile thành công
+ Làm component Favorite
+ Áp dụng lại kĩ thuật add vô database từ component CreditCard -> thành công
#### Kiểm tra add chưa bằng findIndex -> truyền data trong collection bằng các documents bằng id
#### findIndex dựa theo id đó và id của trang đang coi -> thành công -> handle Thêm/Xóa
+ Add các notifications cho các hành động tương úng
+ Data structure hình thành theo ý muốn
+ Pull request và merge vô master
+ Vẫn còn bugs ở vài chỗ handle Login status nhưng đã có hướng fix bằng uid
+ Move to phase 3-2
