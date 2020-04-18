import React, {useState, useEffect} from 'react'
import './SortingVisualizer.css';
import {myBubbleSort} from './sortingAlgorithms'
import {mySelectionSort, myInsertionSort, myMergeSort} from './sortingAlgorithms'

const randomFunction = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
}


const checkEqualArrays = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        console.log(arr1.length,'length')
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            console.log(arr1[i]+ ' !== '+ arr2[i] )
            return false}        
    }

    return true
}
//

export default React.memo(props => {

    const [array,setArray] = useState([])
    const resetArray = () => {
        const myArray= []
        for (let index = 0; index < 120; index++) {
            myArray.push(randomFunction(5,750))
        }
       setArray(myArray)
    
    }
    
    const bubbleSort = () => {
        const jsSortedArray = array.slice().sort((a,b) => a-b)
        const [auxArray, animations] = myBubbleSort(array, array.length)
        
        console.log(checkEqualArrays(jsSortedArray, auxArray))

        for (let i=0;i<animations.length;i++){
            const isColorChange = (i % 4 === 0) || (i % 4 === 1)
            const arrayBars = document.getElementsByClassName('array-bar');
            if (isColorChange) {
                
                const [barOneIdx, barTwoIdx] = animations[i]
                // console.log(barOneIdx, barTwoIdx, animations[i])
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color = (i % 4 === 0 )? 'red': 'turquoise'

                setTimeout(() => {
                    
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i*10)

            } else {
                const [barOneIdx, newHeight] = animations[i]
                if(barOneIdx !== -1){
                const barOneStyle = arrayBars[barOneIdx].style
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`
                }, i*10)
                }

                
            }
        }

    }
    
    const mergeSort = () => {

        const [auxArray, animations] = myMergeSort(array,array.length)
        // const jsSortedArray = array.slice().sort((a,b) => a-b)

        for (let i = 0; i < animations.length; i++) {
            
            const isColorChange = (i % 3 !== 2)
            const arrayBars = document.getElementsByClassName('array-bar')

            if(isColorChange) {
                const color = (i % 3 === 0) ? 'red' : 'turquoise'
                const [barOneIdx, barTwoIdx] = animations[i]
               
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*50)
            }

            else{
                const [barOneIdx, newHeight] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`
                }, i*50)


                
            }
            
        }



    }

    const quickSort = () => {
        
    }

    const heapSort = () => {
        
    }

    const insertionSort = () => {
        const jsSortedArray = array.slice().sort((a,b) => a-b)
        const [auxArray, animations] = myInsertionSort(array, array.length)
        
        // console.log(checkEqualArrays(jsSortedArray,auxArray))
        // console.log(animations)

        for (let i = 0; i < animations.length; i++) {
            
            const isColorChange = (animations[i][0] === 'comparison1') || (animations[i][0] === 'comparison2')
            const arrayBars = document.getElementsByClassName('array-bar')

            if(isColorChange){
                const [_, barOneIdx, barTwoIdx] = animations[i]
                // console.log('tatat')
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = (animations[i][0]  === 'comparison1' ) ? 'red': 'turquoise'

                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i*50)

            }

            else{
                const [_,barOneIdx, newHeight] = animations[i]

                // console.log(barOneIdx)

                const barOneStyle = arrayBars[barOneIdx].style

                setTimeout(() => {

                    barOneStyle.backgroundColor = 'turquoise'
                    barOneStyle.height = `${newHeight}px`

                }, i*50)

            }
            
        }
    }

    const selectionSort = () =>{
        
        const jsSortedArray = array.slice().sort((a,b) => a-b)
        const [auxArray, animations] = mySelectionSort(array, array.length)
        
       

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0]  === 'comparison1') || (animations[i][0]  === 'comparison2')
            const arrayBars = document.getElementsByClassName('array-bar');
            
            if(isColorChange) {

                const [_,barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = (animations[i][0]  === 'comparison1') ? 'red': 'turquoise'

                setTimeout(() => {
                    
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i*50)
            }
          
            else {
                const [_,barOneIdx, newHeight] = animations[i]
            
                const barOneStyle = arrayBars[barOneIdx].style
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`
                }, i*50)
                }
        //     }
            
        }
    }
    

    useEffect(()=>{
        resetArray()
    },[])

   
    return(
        <div className='array-container'>
        {array.map((value,idx) => {
            return  <div className='array-bar' style={{height: `${value}px`}} key={idx}></div>
        })}
        <button onClick={() => resetArray()} > Generate New Array</button>
        <button onClick={() => bubbleSort()} > Bubble Sort</button>
        <button onClick={() => mergeSort()} > Merge Sort</button>
        <button onClick={() => quickSort()} > Quick Sort</button>
        <button onClick={() => heapSort()} > Heap Sort</button>
        <button onClick={() => selectionSort()} > Selection Sort</button>
        <button onClick={() => insertionSort()} > Insertion Sort</button>
        </div>
     )


})