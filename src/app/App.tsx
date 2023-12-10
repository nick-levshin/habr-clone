import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";

const App = ({}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
};

export default App;
