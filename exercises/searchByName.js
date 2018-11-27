var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
];
name='Banana';
function searchFruitByName(obj,n){
return fruits.reduce(function(acc,val)
{
    if(val.name.indexOf(n)!=-1)
    {
      acc.push(val);
    }
    return acc;
},[])
}

console.log('outputs',searchFruitByName(fruits,name));
