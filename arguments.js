//立即直线函数一般用来初始化数据
var num=(function(n){
  if(n==1){
    return 1;
  }
  return n*arguments.callee(n-1);
}(4))
console.log(num);

function test(){
  test.caller;//caller指代的被调用的环境
}