arr = [1,2,3,4,5,6,7,8,9,10];

function printEvenNumbers(){
    
    console.log("Printing even numbers from array");
    for(let x = 0; x < arr.length; x++){
        if((arr[x]%2)==0){
            console.log(arr[x]);
        }
    }
}

printEvenNumbers();