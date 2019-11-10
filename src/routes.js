import Home from "./components/Home/Home.js";
import UserLogin from "./components/UserLogin/UserLogin.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import DetailMovies from "./components/DetailMovies/DetailMovies.js";

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
        path: "/profile",
        exact: true,
        component: UserProfile
    },
    {
        path: "/details/movie/:id",
        exact: true,
        component: DetailMovies
    }
]
export {routesHome}