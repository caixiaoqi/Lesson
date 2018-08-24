function fib(n){
  var first=1,
      second=1,
      third;
  for(i=0;i<n-2;i++){
    third=first+second;
    first=second;
    second=third;
  }
  if(n==1||n==2) console.log(1);
  else console.log(third);
}

fib(4);

function fib(n){
  if(n<=2){
    return 1;
  }
  return fib(n-2)+fib(n-1);
}
fib(4);