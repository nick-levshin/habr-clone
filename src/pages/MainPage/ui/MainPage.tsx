import { FC } from "react";
import { useTranslation } from "react-i18next";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation("main");
  return <div>{t("Main Page")}</div>;
};

export default MainPage;
