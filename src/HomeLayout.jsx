import { Main } from "./PorfolioComponent/Main";
import { Skill } from "./PorfolioComponent/Skill";
import { Faq } from "./PorfolioComponent/Faq";

export function HomeLayout() {
    return(
        <>
          <Main />
          <Skill />
          <Faq />
        </>
    );
}