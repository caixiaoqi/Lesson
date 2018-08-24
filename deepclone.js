function classOf(obj){
  return Object.prototype.toString.call(obj).slice(8,-1);
}

function deepClone(obj){
  var result;
  if(classOf(obj)==='Array'){
    result=[];
  }
  else if(classOf(obj)==='Object'){
    result={};
  }
  else{
    return result=obj;
  }
  for(var i in obj){
    if(obj.hasOwnProperty(i)){
      if(classOf(obj[i])==='Array'||classOf(obj[i])==='Object'){
        result[i]=deepClone(obj[i])
      }else{
        result[i]=obj[i];
      }
    }  
  }
  return result;
}

var obj={
  a:1,
  b:'2',
  c:[1,'2'],
  d:{'a':1}
}
var result=deepClone(obj);
console.log(result);
result.c[0]=66;
console.log(result);
console.log(obj);