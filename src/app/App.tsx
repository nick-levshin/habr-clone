import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Navbar } from "@/widgets/Navbar";
import "./styles/index.scss";

const App = ({}) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
