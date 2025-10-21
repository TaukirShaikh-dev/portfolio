import { lazy } from "react";

const Project = lazy(() => import('../PorfolioComponent/Project'));

export function ProjectLayout() {
    return(
       <Project />
    );
}