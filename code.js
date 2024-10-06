function insertionSortReverse(array) {
    for(var i = (arr.length - 1); i > 0; i--)
        {
            var val = arr[i];
            var j;
            for(j = 1; j < i && arr[j-1] < val; j++)
                {
                    arr[j-1] = arr[j];
                }
            arr[j] = val;
        }
    return array;
}
