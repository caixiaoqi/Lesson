function zhishu(n){
  var count=0;
  for(i=1;i<n;i++){
    //看看每一个i是不是质数
    for(j=1;j<=i;j++){
      if(i%j==0){
        count++;
      }
    }
    if(count==2){
      console.log(i);
    }
    count=0;
  }
}
zhishu(100);

function zhishu(n){
  var count=0;
  for(i=2;i<n;i++){
    //看看每一个i是不是质数
    for(j=1;j<Math.sqrt(i);j++){
      if(i%j==0){
        count++;
      }
    }
    if(count==1){
      console.log(i);
    }
    count=0;
  }
}
zhishu(100);