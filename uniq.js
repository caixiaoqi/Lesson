Array.prototype.uniq=function(){
  var result=[];
  this.forEach(function(value){
    if(!result.includes(value)){
      result.push(value);
    }
  })
  return result;
}
var origin=[1,1,2,3,2,4,1,3,'a','a']
console.log(origin.uniq());


Array.prototype.uniq=function(){
  //利用对象的属性名
  var obj={};
  this.forEach(function(value){
    if(!obj[value]){  //如果有这个属性名
      obj[value]='sadsa';
    }
  })
  return Object.getOwnPropertyNames(obj);
}
var origin=[1,1,2,3,2,4,1,3,'a','a']
console.log(origin.uniq());