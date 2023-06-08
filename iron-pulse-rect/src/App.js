import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import HomePageUser from "./pages/home-page-user";
import WorkoutSelect from "./pages/workout-select.js";
import Bookings from "./pages/bookings";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/home" element={<HomePageUser />} />
      <Route path="/workout" element={<WorkoutSelect />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>

    //test using tailwind
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>

  );
}
export default App;
