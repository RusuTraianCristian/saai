import React, { Fragment, useState, useEffect } from 'react';
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
//import { mergeSort } from "./mergeSort";

const Map = () => {

    const [nodes, setNodes] = useState([]);
    const [error] = useState(new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"));
    const [success] = useState(new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"));

    useEffect(() => {
        const createHeights = () => {
            const heights = [];
            for (let i = 0; i < 222; i++ ) {
                heights.push(Math.round(Math.random() * 333));
            }
            return heights;
        }
        const heights = createHeights();
        setNodes([...heights]);
    }, []);

    // create a new random array
    const randomize = () => {
        const heights = [];
        for (let i = 0; i < 222; i++) {
            heights.push(Math.round(Math.random() * 333));
        }
        setNodes([...heights]);
        error.play();
    }

    const mergeSort = (nodes, setNodes, success) => {
        const heights = [...nodes], result = [];
        if (heights.length === 1) return heights;
        const median = Math.floor(heights.length / 2);
        const left = heights.slice(0, median);
        const right = heights.slice(median);
        const leftNode = mergeSort(left, setNodes, success);
        const rightNode = mergeSort(right, setNodes, success);
        while (leftNode.length && rightNode.length) {
            if (leftNode[0] <= rightNode[0]) {
                result.push(leftNode.shift());
            } else {
                result.push(rightNode.shift());
            }
        }
        success.play();
        setNodes([...result]);
        return result.concat(leftNode, rightNode);
    }

    return (
        <Fragment>
            <div className="App">
                <div className="topbar">
                    <div className="innerbar">
                        <div className="logo">ALGO[inSight]</div>
                        <div className="navbar">
                            <button id="randomize" onClick = { randomize }>randomize</button>
                            <button id="bubblesort" onClick = { () => bubbleSort(nodes, setNodes, success) }>bubble sort</button>
                            <button id="selectionsort" onClick = { () => selectionSort(nodes, setNodes, success) }>selection sort</button>
                            <button id="mergesort" onClick = { () => mergeSort(nodes, setNodes, success) }>merge sort</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                { nodes.map((node, idx) => (<div className="node" key={ idx } style={ { height: node } }><div className="tooltip">{ node }</div></div>)) }
            </div>
            <p>[add merge sort]</p>
            <p>[show indexes here and swap them in real time]</p>
            <p>[add colors to nodes currently being checked]</p>
        </Fragment>
    );
}

export default Map;
