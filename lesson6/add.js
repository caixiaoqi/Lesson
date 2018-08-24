var count=0;
function add(){
  count++;
  console.log(count);
}
add();
add();
add();

//闭包方法
function add(){
  var num=0;
  function a(){
    console.log(++num);
  }
  return a;
}
var add1=add();
add1();
add1();
add1();
var add2=add();
add2();
add2();
add1();