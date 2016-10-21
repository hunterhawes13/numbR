function checkNums (num1,num2) {
  if (num1 > num2){
    return true; 
  } else if (num1 == num2) {
      return -1; 
  } else return false;
}


console.log(checkNums(7,7))