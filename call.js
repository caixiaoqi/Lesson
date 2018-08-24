if (!Function.prototype.call){
  Function.prototype.call=function(target){
    target.fn=this;
    var args=[];
    for(let i=1;i<arguments.length;i++){
      args.push(arguments[i]);
    }
    let result=eval('target.fn('+args+')');
    delete target.fn;
    return result;
  }
}

function foo(){
  this.name='yuqi';
}
var obj={};
foo.call(obj);
obj.name;


Function.prototype.mycall=function(target){
  target.fn=this;
  var args=[];
  for(let i=1;i<arguments.length;i++){
    args.push(arguments[i]);
  }
  let result=eval('target.fn('+args+')');
  delete target.fn;
  return result;
}
function foo(){
  this.name='yuqi';
}
var obj={};
foo.mycall(obj);
obj.name;
