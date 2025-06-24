let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
let num = 5;
//element larger than the number num 
function getElement(arr,num){
    for(let i = 0;i<=arr.length;i++){
        if (arr[i]> num){
            console.log(arr[i]);
        }
    }
}
getElement(arr,num);