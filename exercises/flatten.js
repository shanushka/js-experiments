
var myArray=[[1,2,3],[2,4,5],6]

var output=myArray.reduce(function(acc,val){
  if(Array.isArray(val)){
    for(i=0;i<val.length;i++)
    {
        if(acc.indexOf(val[i])==-1)
        {
          acc.push(val[i]);
          }
      }
    }
    
   else{
    if(acc.indexOf(val)==-1)
      {
       acc.push(val);
      }
  }
 return acc
  
},[])
console.log('output',output)