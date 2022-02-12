//arrays sort

var numbers = [2,3,13,18,-5,38,-10,11,0,104];
  numbers.sort();
  // console.log(numbers);
  var odds=[];
  var evens = [];
  
  for(var i = 0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      odds.push(numbers[i]);
    }else{
      evens.push(numbers[i]);
    }
    console.log(numbers[i]);
  }
  console.log(odds);
  console.log(evens);



// piramid  
var piramid = "";
var size = 15;
for(var i = 0; i<size;i++){
  piramid = piramid + ("#");
  console.log(piramid)
}




