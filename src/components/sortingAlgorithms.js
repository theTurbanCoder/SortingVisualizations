/**
 * 
 * @param {[]} array 
 * @param {number} n 
 */
export const myBubbleSort = (array,n) => {
    const animations = []
    
    let auxArray = array.slice()
    bubbleSort(auxArray, animations, n)
    console.log(auxArray.length, animations.length)
    return [auxArray, animations]
}


export const mySelectionSort = (array, n) => {

    const animations = []
    let auxArray = array.slice()
    selectionSort(auxArray, animations, n)
    return [auxArray, animations]
}


let bubbleSort = ( auxArray, animations,n) => {

    for (let i = 0; i < n-1; i++) {      
            for (let j = 0; j < n-i-1; j++) {

                animations.push([j,j+1])
                animations.push([j,j+1])

                if (auxArray[j] > auxArray[j+1]) {
                    animations.push([j, auxArray[j+1]])
                    animations.push([j+1, auxArray[j]])
                    swap(auxArray, j, j+1)
                }
                else{
                    animations.push([-1,-1])
                    animations.push([-1,-1])
                }

            }
        }

}

let selectionSort = (auxarray, animations, n) => {

    for (let i = 0; i < n-1; i++) {
       let minIndex = i

       for (let j = i+1; j < n; j++) {


            animations.push(['comparison1',j,minIndex])
            animations.push(['comparison2',j,minIndex])
            
           if(auxarray[minIndex] > auxarray[j]){
                minIndex = j
           }
           
       }
       
       animations.push(['swap',minIndex,auxarray[i]])
       animations.push(['swap',i,auxarray[minIndex]])
       
       swap(auxarray,i,minIndex);
       
    }
}

export const myInsertionSort = (array,n) => {

    const animations = []
    let auxArray = array.slice()

    insertionSort(auxArray, animations, n)
    return [auxArray , animations]
}

let insertionSort = (auxArray,animations, n) => {

    for (let i = 1; i < n; i++) {
        
        let key = auxArray[i]
        let j = i-1

        animations.push(["comparison1",j,i])
        // animations.push(["comparison1",j,i])
        while(j >= 0 && auxArray[j] > key){

            animations.push(["comparison1",j+1,j])
            auxArray[j + 1] = auxArray[j] 
            animations.push(['swap', j+1, auxArray[j]])
            // animations.push(['swap', j, auxArray[j+1]])
            j = j - 1

        }

        auxArray[j+1] = key
        animations.push(['swap',j+1, key])
        // animations.push(["comparison1",j+1,i])
    }

}

let swap = (auxArray, index1, index2) => {

    let temp = auxArray[index1]
    auxArray[index1] = auxArray[index2]
    auxArray[index2] = temp

}