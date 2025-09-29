import { useState } from "react";

export function useFilter(array, callback) {
    const [query, setQuery] = useState('');

     //filter array based on callback
    const filteredArray = array.filter((obj) => (
        callback(obj).includes(query)
     ))

    return [filteredArray, query, setQuery];
}