function re(n){
  var result=1;
  for(var i=n;i>0;i--){
    result=result*i;
  }
  console.log(result);
}
re(4)

function jc(n){
  if(n==1){
    return 1;
  }
  return n*jc(n-1);
}
jc(4);