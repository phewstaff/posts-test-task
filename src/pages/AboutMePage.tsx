import { FC } from "react";
import Header from "../components/ui/Header";
import AboutMe from "../components/ui/AboutMe";

const AboutMePage: FC = () => {
  return (
    <>
      <Header showSearchBar={false} showSortSelector={false} />
      <main>
        <AboutMe />
      </main>
    </>
  );
};

export default AboutMePage;
