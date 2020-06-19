// sort array using bubble sort (instant)
// export const bubbleSort = (nodes, setNodes, success) => {
//     const heights = [...nodes];
//     for (let i = 0; i < heights.length - 1; i++) {
//         for (let k = 0; k < heights.length - i - 1; k++) {
//             if (heights[k] > heights[k+1]) {
//                 [heights[k], heights[k+1]] = [heights[k+1], heights[k]];
//             }
//         }
//     }
//     setNodes([...heights]);
//     success.play();
// }

export const bubbleSort = (nodes, setNodes, success) => {
    const heights = [...nodes];
    for (let i = 0; i < heights.length - 1; i++) {
        setTimeout(() => {
            for (let k = 0; k < heights.length - i - 1; k++) {
                if (heights[k] > heights[k+1]) {
                    [heights[k], heights[k+1]] = [heights[k+1], heights[k]];
                }
            }
            setNodes([...heights]);
        }, 90 * i);
    }
    success.play();
}