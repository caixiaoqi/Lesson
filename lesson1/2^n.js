function re(n){
  var mul=1;
  for(var i=0;i<n;i++){
    mul=mul*2;
  }
  console.log(mul);
}
re(0);
re(2);
re(4);

//递归
function mi(n){
  if(n==1){
    return 2;
  }
  return 2*mi(n-1);
}
mi(4);