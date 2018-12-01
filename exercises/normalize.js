var people = [{
  id: 1,
  name: "Aegon Targaryen",
  children: [{
    id: 2,
    name: "Jaehaerys Targaryen",
    children: [{
      id: 4,
      name: "Daenerys Targaryen"
    }, {
      id: 5,
      name: "Rhaegar Targaryen",
      children: [{
        id: 6,
        name: "Aegon Targaryen"
      }]
    }]
  }, {
    id: 3,
    name: "Rhaelle Targaryen"
  }],
}];

function normalization(array, initial) {
  return array.reduce(function (acc, value) {
    obj = {};
    obj.id = value.id;
    obj.name = value.name;
    if (Array.isArray(value.children)) {
      obj.children=value.children.reduce(function(aChild,vChild){
      aChild.push(vChild.id);
      return aChild;
      },[]);
      acc[obj.id] = obj;
      normalization(value.children, acc);
    } 
	else {
      obj.children = [];
      acc[obj.id] = obj;
    }

    return acc;
  }, initial);
  
}

var output = normalization(people, {});
console.log("After Normalization",output);