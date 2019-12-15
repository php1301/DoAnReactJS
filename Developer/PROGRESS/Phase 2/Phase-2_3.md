# Phase 2-3
### 2/12/2019
+ Xong auth Login cho trang Homepage - đăng nhập
+ Nghiên cứu api add favorite của TMDB
+ Nghiên cứu api đặt vé của bên Cybersoft
+ Fix responsive
+ Bắt đầu 1 phase chủ yếu xử lý logic chính của Đồ án -> Đặt vé
### 3/12/2019
+ Làm thêm tab Showing Nearby
+ Handle logic switch tab
#### Học được kĩ thuật truyền lại state cho cha bằng cách dùng 1 hàm dạng props từ cha để truyền params vô
### 4/12/2019
+ Nghiên cứu layout Showing Nearby
+ Fix responsive và tổ chức lại code scss 1 số chỗ của page bị scss của layout Showing Nearby đè
### 5/12/2019
+ Xong layout của Showing Nearby - Fully responsive
+ Nghiên cứu tiếp layout của TicketBox 
+ Nghiên cứu scss Ticket Box
+ Hiểu rõ hơn được về cách log props
+ Thuần thục các extension như Redux manager và React DevTools
+ Refractor code lại 1 số chỗ
+ Nghiên cứu UI/UX đặt vé
### 6/12/2019
+ Hoàn thành layout TicketBox
+ Tạo lần lượt các component con cho TicketBox
+ Áp dụng Hooks cho TicketBox
+ Nghiên cứu component Modal có sẵn của Reactstrap
### 7/12/2019
+ Handle vụ đặt ghế và times không thành công vì luồng đi sai
#### Buộc phải truyền thẳng 1 maLichChieu -> componentDidMount onSaveSeats(maLichChieu)
+ Chấp nhận thiếu sót ở đây và phải chống chế render cứng
+ Tiếp tục áp dụng Hooks 
### 8/12/2019
+ TicketBox hình thành -> handle logic cho TicketBox
+ Hiểu rõ hơn về useState của Hooks dùng cho component SeatsItem -> Seats
#### Hiểu rõ cách truyền const [count,setCount] = useState(0) => cho state count = 0 và 1 hàm manipulate state của count là setCount()
+ Nhận ra không nên lạm dụng Hooks
### 9/12/2019
+ Mọi thứ khá ổn chỉ trừ việc id từ 2 nguồn nên phải render cứng vài chỗ
+ Nhưng chung quy chỗ đó biết sai gì và nhận ra được bình thường phải làm sao => sai nhưng biết cách sửa
+ getMovies => return path ...details/item.maPhim => details/this.props.match.params.id => id này lấy danhSachLichChieu => danhSachLichChieu maps lấy maLichChieu truyền qua component Times và map render ra tất cả Times
+ getSeats => tương tự nhưng dễ hơn
+ id => map lấy tất times từ (id) return component Times chứa props maLichChieu => Times có seats => truyền tiếp maLichChieu vô Comp Modal để có seats tương ứng trong mỗi modal-body
### 10/12/2019
+ Handle các hàm logic như handle format time
+ Handle Render Nav
+ Handle render cho đẹp và trả item tương ứng rạp (rạp cũng làm html cứng vì luồng sai từ chỗ sai id truyền - do từ 2 nguồn)
### 11/12/2019
+ Handle tiếp các logic như trả về só lượng vé => ý tưởng ban đâu là đếm số class nhưng nhận ra querySelectorAll.length DOM thật -> chậm
#### Xài Hooks [count, setCount] handle setCount = (x) => {....logic}
+ Áp dụng kĩ thuật truyền từ con sang cha (ngược luồng) làm props hàm và truyền đối số 
#### Gặp bugs set On tất cả thẻ li thay vì 1 => hiểu ra rằng phải chia nhỏ component và cho mỗi thằng con 1 state thay vì cho state từ component cha (Seats là con của SeatItems)
### 12/12/2019
+ Handle tiếp tục logic và truyền hết data vào cho modal thành công
+ Modal vẫn chưa được xử lý responsive -> dự kiến overflow-x overflow-y
#### Kĩ thuật đặt tên props giống nhau nhưng truyền data khác nhau vào component con => cấu trúc giống nhưng manipulate data 1 cách tùy ý dễ kiểm soát
### 13/12/2019
+ Tiếp tục học hiểu thêm về Hooks
+ Rewrite Seats component dưới dạng class để tiện làm cho việc truyền dữ liệu
### 14/12/2019
+ Thành thục React DevTools để log props và handle dễ các props truyền vì truyền tận:
+ Handle logic vị trí ghế A1, A2,... 
+ Handle logic thêm và xóa vào mảng listGhe base on tình trạng this.state.on và truyền nhận ra sự khác nhau của thêm bằng spread operator và push
+ Tiếp tục sử dũng kĩ thuật tạo hàm ở hàm cha nhận đối số và dùng hàm đó làm props truyền đi xử logic (đi hứng value con) và return ở cha
>

    const handleVe = (mang) => { return (props.viTri.map(item =>{return(item), console.log(item)}))}
#### Học được kĩ thuật truyền props bằng Link To bằng cách lợi dụng tạo object state: -> access ở comp cha bằng cách this.props.history.location.state
>

    DetailsMovies
      |_ScheduleDetails
        |_Times *3 (kĩ thuật props giống nhau nhưng value khác)
          |_Modal (Hooks)
            |_TicketBox (Hooks)
            | |_SeatItems
            |   |_Seats (li) setState riêng để tráng bugs render tất cả các li vì ảnh hưởng state cha
            |_ 
              |_TicketBooking kĩ thuật truyền props bằng Link To (xài class) vì ban đầu truyền ở component cha là TicketBox đang xài Hooks không làm được nên tạo comp con xài class và làm -> Link To Payment
### 15/12/2019
+ Đổ dữ liệu vô component Payment
+ Setup Firebase và chọn Firestore
+ Deploy thành công nhận ra được deploy liên tục nhưng phải ctrl + f5 mới upload
+ Nhận ra api bên Cybersoft không GET được về khi deploy -> do HTTP (Cybersoft) và HTTPS (Firebase)
+ Hiểu thêm 1 chút về CTDL
+ Handle các logic về tính tiền
+ Feature mã giảm giá - phim 3D
+ Live update giá tiền
+ Thêm notification tương ứng cho việc nhập
+ Push thành công obj muốn push lên Firebase với các list keys cần thiết
### 16/12/2019
+ Refractor code phase 2-3
+ Bắt đầu research về việc auth tương ứng cho Firebase
+ Move to Phase 3-1

