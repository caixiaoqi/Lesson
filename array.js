Function.prototype.push=function(){
  for(var i=0;i<arguments.length;i++){
    this[this.length]=this.arguments[i];
  }
  return this.length;
}

Function.prototype.pop=function(){
  var result=this[this.length-1];
  this.length=this.length-1;
  return result;
}

Function.prototype.splice=function(pos){
  pos+=pos>0 ? 0 : this.length;
}

Function.prototype.sort=function(){

}

//类数组
//属性的索引最好全是数字，但不必全是数字，必须有length属性，最好有push方法
var obj={
  '2':'a',
  '3':'b',
  length:2,
  push:Array.prototype.push
}
obj.push('c');
obj.push('d');
console.log(obj)
//{2: "c", 3: "d", length: 4, push: ƒ}
// push=funtion(num){
//   this[length]=num;
//   num++;
// }