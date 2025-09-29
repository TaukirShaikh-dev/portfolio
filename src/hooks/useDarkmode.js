import { useEffect, useState } from "react";

export function useDarkmode() {
    //on page reload check localStorage dark mode
    const [dark, setDark] = useState(() => {
       let darkCondition = localStorage.getItem('dark');
       return darkCondition ? JSON.parse(darkCondition) : false;
    });

    //update localStorage whenever dark mode change
    useEffect(() => {
       localStorage.setItem('dark', dark);
    }, [dark]);

    //toggle dark mode 
    function handleToggle() {
        //toggle dark mode
        setDark((prev) => !prev);
    }

    return [dark, handleToggle];
}