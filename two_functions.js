function add(num1 ,num2){
   let sum = num1 + num2 ;
   return sum;
}
function subtract (num1,num2){
    let difference = num1 - num2;
     return difference;
}
function get_results(){
    let sum = add(10,20);
    console.log(sum);
    let difference = subtract(20,5);
    console.log(difference);
}

get_results;