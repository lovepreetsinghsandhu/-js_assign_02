function add(array){
    for(let i = 0; i <array.length; i++){
       array[i]=array[i]+2
     
    }
    return array
}


let result_add = add([1,2,3])
console.log(result_add)