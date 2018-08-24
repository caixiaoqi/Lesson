//防止报错的
//try里面发生错误，不会执行try里面的后续的代码
try{
  console.log('a');
  console.log(b);//这里有错误，但是不会抛出错误，会继续执行
  console.log('c');//不会执行
}catch(e){
  console.log(e);
  console.log('error')
}

// a
// ReferenceError: b is not defined
//     at <anonymous>:5:15
// error

// 错误类型
// SyntaxError
// TypeError
// ReferenceError
// RangeError
// EvalError
// URIError 

