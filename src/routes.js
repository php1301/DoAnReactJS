import Home from "./components/Home/Home.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import DetailMovies from "./components/DetailMovies/DetailMovies.js";
import Discover from "./components/Discover/Discover.js";
import SearchResults from "./components/SearchResult/SearchResult.js";
import TicketBox from "./components/TicketBox/TicketBox.js";
import Payment from "./components/Payment/Payment.js";
import PayementDetails from "./components/PaymentDetails/PayementDetails.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import TicketItem from "./components/TicketItem/TicketItem.js";
import SliderComponent from "./components/TicketItem/TicketItem.js";
import CardGallery from "./components/CardGallery/CardGallery.js";
const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home,
        data: { requiresLogin: false }
    },
    {
        path: "/login",
        exact: true,
        component: UserLogin,
        data: { requiresLogin: false }
    },
    {
        path: "/profile",
        exact: true,
        component: UserProfile,
        data: { requiresLogin: true }
    },
    {
        path: "/details/movie/:id",
        exact: true,
        component: DetailMovies
    },
    {
        path: "/discover",
        exact: true,
        component: Discover
    },
    {
        path: "/search-results/:id",
        exact: true,
        component: SearchResults,
    },
    {
        path: "/ticket/:id/",
        exact: true,
        component: TicketBox
    },
    {
        path: "/details/movie/:id/payment",
        exact: true,
        component: Payment,
        data: { requiresLogin: true }
    },
    {
        path: "/details/movie/:id/payment/:idbooking",
        exact: true,
        component: PayementDetails,
        data: { requiresLogin: true }
    },
    {
        path: "/details/movie/:id/payment/:idbooking",
        exact: true,
        component: PayementDetails,
        data: { requiresLogin: true }
    },
    {
        path: "/test",
        exact: true,
        component: CardGallery,
    },
    {
        path: "/404",
        exact: true,
        component: PageNotFound
    },
]
export { routesHome }