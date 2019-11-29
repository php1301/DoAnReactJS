import Home from "./components/Home/Home.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import DetailMovies from "./components/DetailMovies/DetailMovies.js";
import Discover from "./components/Discover/Discover.js";
import SearchResults from "./components/SearchResult/SearchResult.js";

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/login",
        exact: true,
        component: UserLogin
    },
    {
        path: "/profile/:status",
        exact: true,
        component: UserProfile
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
    }
]
export { routesHome }