function type(target){
  //如果是对象
  if(typeof target==='object'){
    return Object.prototype.toString.call(target).slice(8,-1);
  }
  //如果是原始值
  if(target===null){
    return target;
  }
    return typeof target;//小写的字符串

}
console.log(type(111));
console.log(type(new Number()))