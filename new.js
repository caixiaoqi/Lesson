function New(f){
  var obj={};
  Object.setPrototypeOf(obj,f.prototype);
  f.call(obj);
  return obj;
}

function food(){
  this.food="baobao"
}
food.prototype.aaa='bbb';

var obj=New(food)

obj.aaa;
console.log(obj.food);
console.log(obj.aaa);


var str='abc';
str+=1;
typeof str;