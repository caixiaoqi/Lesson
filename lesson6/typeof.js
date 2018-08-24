

var f=(
  function f(){
  return '1';
  },
  function g(){
    return 2;
  } 
)();

typeof f;//number


var x=1
if(function f(){}){
  x+=typeof f;
}
console.log(x);//1undefined