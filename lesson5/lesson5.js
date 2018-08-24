function test(){
  var arr=[];
  for(var i=0;i<10;i++){
    arr[i]=function(){
      console.log(i)
    }
  }
  return arr;
}
var result=test();
result[4]();    //10

//闭包



function test(){
  var arr=[];
  for(var i=0;i<10;i++){
    (function(value){
      arr[i]=function(){
        console.log(value)
      }
    })(i)
  }
  return arr;
}
var result=test();
result[4]();    //10
