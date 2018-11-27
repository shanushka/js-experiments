var array=['John','Mary','John','John','Sherlock','Sherlock']
var result=array.reduce(function(acc,value){
  console.log('acc',acc[value])

    acc[value]=(acc[value]||0) + 1;

    return acc;
 }
,{})