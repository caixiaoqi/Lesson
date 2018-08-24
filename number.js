for(var i=0;i<100;i++){
  console.log(Math.random().toFixed(2)*100);
}
//上面有精度问题

for(var i=0;i<100;i++){
  console.log( Math.floor( Math.random()*100))
}