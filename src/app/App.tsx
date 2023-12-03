import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";

const App = ({}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About Us</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
