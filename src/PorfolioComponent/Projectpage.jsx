import { NoteApp } from "../Projects/Noteapp/Noteapp";
import { WeatherApp } from "../Projects/Weatherapp/Weatherapp";
import { ECommerseCart } from "../Projects/Ecommerseapp/Ecommersecart";
import { ExpenceTracker } from "../Projects/Expencetrackerapp/Expencetracker";
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";

export function ShowProject() {
    const {Projectname} = useParams();

    const Component = {
        'NoteApp': <NoteApp />,
        'WeatherApp': <WeatherApp />,
        'ExpencetrackerApp': <ExpenceTracker />,
        'EcommercecartApp': <ECommerseCart />
    };

    const projectComponent = Component[Projectname];

    return (
        <>
          {
             projectComponent 
               ? (projectComponent)
               : (<h2>Project Not found</h2>)  
          }
        </>
    );
}