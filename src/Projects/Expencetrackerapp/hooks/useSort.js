export function useSort(array, callback) {
    //sort ExpenceArray based on user given array and callback
    const filteredArray = array.sort(callback());
    return filteredArray;
}
