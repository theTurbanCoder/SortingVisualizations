/**
 *
 * @param {[]} array
 * @param {number} n
 */
export const myBubbleSort = (array, n) => {
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

let bubbleSort = (auxArray, animations, n) => {
 for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
   animations.push([j, j + 1])
   animations.push([j, j + 1])

   if (auxArray[j] > auxArray[j + 1]) {
    animations.push([j, auxArray[j + 1]])
    animations.push([j + 1, auxArray[j]])
    swap(auxArray, j, j + 1)
   } else {
    animations.push([-1, -1])
    animations.push([-1, -1])
   }
  }
 }
}

let selectionSort = (auxarray, animations, n) => {
 for (let i = 0; i < n - 1; i++) {
  let minIndex = i

  for (let j = i + 1; j < n; j++) {
   animations.push(["comparison1", j, minIndex])
   animations.push(["comparison2", j, minIndex])

   if (auxarray[minIndex] > auxarray[j]) {
    minIndex = j
   }
  }

  animations.push(["swap", minIndex, auxarray[i]])
  animations.push(["swap", i, auxarray[minIndex]])

  swap(auxarray, i, minIndex)
 }
}

export const myInsertionSort = (array, n) => {
 const animations = []
 let auxArray = array.slice()

 insertionSort(auxArray, animations, n)
 return [auxArray, animations]
}

let insertionSort = (auxArray, animations, n) => {
 for (let i = 1; i < n; i++) {
  let key = auxArray[i]
  let j = i - 1

  animations.push(["comparison1", j, i])
  // animations.push(["comparison1",j,i])
  while (j >= 0 && auxArray[j] > key) {
   animations.push(["comparison1", j + 1, j])
   auxArray[j + 1] = auxArray[j]
   animations.push(["swap", j + 1, auxArray[j]])
   // animations.push(['swap', j, auxArray[j+1]])
   j = j - 1
  }

  auxArray[j + 1] = key
  animations.push(["swap", j + 1, key])
  // animations.push(["comparison1",j+1,i])
 }
}

export const lomutosQuickSort = (array, n) => {
 let animations = []
 let auxArray = array.slice()

 lomutos(auxArray, animations, 0, n - 1)

 return [auxArray, animations]
}

export const hoaresQuickSort = (array, n) => {
 const auxArray = array.slice()
 const animations = []
 hoares(auxArray, animations, 0, n - 1)
 return [auxArray, animations]
}

const hoares = (auxArray, animations, low, high) => {
 if (low < high) {
  let pi = hoaresPartition(auxArray, animations, low, high)
  hoares(auxArray, animations, low, pi)
  hoares(auxArray, animations, pi + 1, high)
 }
}

const hoaresPartition = (auxarray, animations, low, high) => {
 let pivot = auxarray[low]
 let i = low - 1
 let j = high + 1

 while (true) {
  do {
   i++
   animations.push(["compare", i, low])
  } while (auxarray[i] < pivot)
  animations.push(["compare", i, low])
  do {
   j--
   animations.push(["compare", j, low])
  } while (auxarray[j] > pivot)
  animations.push(["compare", j, low])
  if (i >= j) {
   animations.push(["compare", i, j])
   return j
  }

  animations.push(["swap", i, auxarray[j]])
  animations.push(["swap", j, auxarray[i]])
  swap(auxarray, i, j)
 }
}

const lomutos = (auxArray, animations, low, high) => {
 if (low < high) {
  let pi = partition(auxArray, animations, low, high)
  lomutos(auxArray, animations, low, pi - 1)
  lomutos(auxArray, animations, pi + 1, high)
 }
 // if(high - low === auxArray.length - 1 ) return auxArray/
}

const partition = (auxArray, animations, low, high) => {
 let pivot = auxArray[high]
 let i = low - 1

 for (let j = low; j < high; j++) {
  animations.push(["compare", j, high])
  animations.push(["compare", j, high])
  if (auxArray[j] < pivot) {
   i++
   animations.push(["swap", i, auxArray[j]])
   animations.push(["swap", j, auxArray[i]])
   swap(auxArray, i, j)
  } else {
   animations.push(["compare", j, high])
   animations.push(["compare", j, high])
  }
 }

 animations.push(["swap", i + 1, auxArray[high]])
 animations.push(["swap", high, auxArray[i + 1]])
 swap(auxArray, i + 1, high)
 return i + 1
}

export const myMergeSort = (array, n) => {
 const animations = []
 let auxArray = array.slice()
 mergeSort(auxArray, 0, n - 1, animations)

 return [auxArray, animations]
}

let mergeSort = (A, start, end, animations) => {
 if (start < end) {
  let mid = Math.floor((start + end) / 2)
  mergeSort(A, start, mid, animations)
  mergeSort(A, mid + 1, end, animations)
  mergeArray(A, start, mid, end, animations)
 } else return
}

let mergeArray = (A, start, mid, end, animations) => {
 let temp = []

 // let n = (end-start+1)

 let [i, j] = [start, mid + 1, 0]

 while (i <= mid && j <= end) {
  animations.push([i, j])
  animations.push([i, j])
  if (A[i] <= A[j]) {
   // temp[k] = A[i]
   animations.push([temp.length + start, A[i]])
   temp.push(A[i++])
  } else {
   // temp[k] = A[j]
   animations.push([temp.length + start, A[j]])
   temp.push(A[j++])
  }
 }

 while (i <= mid) {
  animations.push([i, i])
  animations.push([i, i])
  animations.push([temp.length + start, A[i]])
  // temp[k] = A[i]
  temp.push(A[i++])
 }

 while (j <= end) {
  // temp[k] = A[j]
  animations.push([j, j])
  animations.push([j, j])
  animations.push([temp.length + start, A[j]])
  temp.push(A[j++])
 }

 for (let i = start; i <= end; i++) {
  A[i] = temp[i - start]
 }
}

let swap = (auxArray, index1, index2) => {
 // if(index1 === index2) return;
 // console.log('not swapped', index1, index2, auxArray[index1], auxArray[index2]);
 let temp = auxArray[index1]
 auxArray[index1] = auxArray[index2]
 auxArray[index2] = temp
 // console.log('swapped', auxArray[index1], auxArray[index2], 'in');
 return auxArray
}
