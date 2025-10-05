import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./PortfolioLayout/HomeLayout.jsx";
import { ContactLayout } from "./PortfolioLayout/ContactLayout.jsx";
import { ProjectLayout } from "./PortfolioLayout/ProjectLayout.jsx";
import {ShowProject} from './PorfolioComponent/Projectpage.jsx';
import './index.css'
import App from './App.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <HomeLayout />},
      {path: 'project', element: <ProjectLayout />},
      {path: 'contact', element: <ContactLayout />}
    ]
  },

  // This route is outside of the App layout -> No Navbar/Footer
  {path: '/project/:Projectname', element: <ShowProject />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router} />
)

