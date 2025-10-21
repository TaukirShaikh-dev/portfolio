import { lazy } from "react";

const Contact = lazy(() => import('../PorfolioComponent/Contact'));

export function ContactLayout() {
    return(
          <Contact />
    );
}