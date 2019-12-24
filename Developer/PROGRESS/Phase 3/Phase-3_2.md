#Phase 3-2
### 22/12/2019
+ Đập đi xây lại UI cho tabs Movies
+ Thiết kế Carousel từ react-multi-carousel
+ Fix UI HomeHeader thành công
+ Gặp bugs khá khó chịu aria-labelled=true tất cả
+ Carousel hoàn thành mượt mà đầy đủ chức năng xem trailer (bằng Reactstrap) Link to DetailsMovies
+ Move các Carousels cũ sang tab Showing Nearby
+ Thiết kế các Categories text h2 bằng animation glitch
+ [Glitch Animation](https://codepen.io/lbebber/pen/ypgql)
+ Hoàn chỉnh responsive khá khó khăn, mobile và host deploy debug thì screen khác nhau khá khó chịu
+ Custom css cực, ctrl F và replace all
+ Chỉnh sửa các thứ bị overrided
+ Add winter effect
+ Cân nhắc thêm các mục như Gallery
#### Trong lúc thêm thì gặp phải 1 số vấn đề custom -> chạm IIFE componentDidMount -> đã fix được nhưng ảnh hưởng perfomance
+ Cân nhắc làm toggle và chỉnh responsive hide/show 1 số component cải thiện performance
+ Đã làm được nhưng vẫn ảnh hưởng performance
+ Xem lại thiết kế UI từ nguồn khác
### 23/12/2019
+ Chỉnh sửa full component Favorite check bằng uid
#### Sử dụng componentWillMount để thay đổi màu của trái tim setState state heart
+ Fix các bugs về login 
+ Push sang các trang khác nhau hợp lý hơn 
+ Redirect khi guard routing
#### Việc đặt tên document id rất quan trọng -> thuận lợi cho việc handle các chức năng
+ Thiêt kế lại Gallery -> Mượt hơn
+ Thêm hiệu ứng snow
+ Thêm FPSstats(đã hidden)
+ Login ổn, tự biết redirect trang, fix các bugs
+ Add được -> biết map ra các component bằng .get().then(querySelector)
#### Map lấy data Firebase
>

    firebaseRender = async () => {
      let uid = localStorage.getItem('uid')
      let arrToPush = []
      const db = firebase.firestore();
      if (uid !== null) {
         await db.collection("user").doc(uid).collection("favorite").get()
            .then((snapshot) => {
               snapshot.docs.forEach((doc) => {
                  arrToPush.push(doc.data())
               });
            });
      }
      console.log(arrToPush)
      return arrToPush }
+ Tạo toggle Box Bio
+ Thêm các disclaimer ở các chỗ hay bị bugs(khá phiền toái)
+ Fix bugs tương đối thành công chạy ổn -> render màu trái tim theo đúng logic - chưa logout -> đã add / chưa add
### 24/12/2019
+ Check lại performance
+ Thêm button scroll to top
+ Hoàn thành và cập nhật lại readme.md

