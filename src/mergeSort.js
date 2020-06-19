const mergeSort = (nodes, setNodes, success) => {
    const heights = [...nodes];
    if (heights.length === 1) return heights;
    const median = Math.floor(heights.length / 2);
    const left = heights.slice(0, median);
    const right = heights.slice(median);
    return merge(mergeSort(left, setNodes, success), mergeSort(right, setNodes, success), setNodes, success);
}

const merge = (left, right, setNodes, success) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    success.play();
    setNodes([...result]);
    return result.concat(left, right);
}