// sort array using selection sort (instant)
// export const selectionSort = (nodes, setNodes, success) => {
//     const heights = [...nodes];
//     for (let i = 0; i < heights.length - 1; i++) {
//         let min_idx = i;
//         for (let k = i + 1; k < heights.length; k++) {
//             if (heights[k] < heights[min_idx]) {
//                 min_idx = k;
//             }
//         }
//         [heights[min_idx], heights[i]] = [heights[i], heights[min_idx]];
//     }
//     setNodes([...heights]);
//     success.play();
// }

export const selectionSort = (nodes, setNodes, success) => {
    const heights = [...nodes];
    for (let i = 0; i < heights.length - 1; i++) {
        setTimeout(() => {
            let min_idx = i;
            for (let k = i + 1; k < heights.length; k++) {
                if (heights[k] < heights[min_idx]) {
                    min_idx = k;
                }
            }
            [heights[min_idx], heights[i]] = [heights[i], heights[min_idx]];
            setNodes([...heights]);
        }, 90 * i);
    }
    success.play();
}