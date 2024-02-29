function permutationSort(a) {
    let count = 0;

    function permute(arr, l, r) {
        if (l === r) {
            count++;
            if (isSorted(arr)) {
                return true;
            }
        } else {
            for (let i = l; i <= r; i++) {
                [arr[l], arr[i]] = [arr[i], arr[l]];
                if (permute(arr, l + 1, r)) {
                    return true;
                }
                [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
            }
        }
        return false;
    }

    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    permute(a, 0, a.length - 1);
    return count;
}

module.exports = permutationSort;
