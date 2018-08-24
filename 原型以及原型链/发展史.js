// 1.传统方式--原型链
//   过多的继承了没用的属性，而且你在构造子类实例我的时候无法向父类穿参
function Person(){
  this.age=15;
}
Student.prototype=new Person();
function Student(){
  this.name='yuqi';
}
var student1=new Student();
console.log(student1);
// 2.借用构造函数
//实际上不算是继承，没有继承的关系,继承不了父类的prototype上的属性
//但还是解决了实例化的时候不能向父类传参的问题
//每构造一个对象实际上你调用了两个函数，实际上浪费效率，看着简单
function Person(){
  this.age=15;
}
function Student(){
  Person.call(this);
  this.name='yuqi'
}
var student1=new Student();
console.log(student1);
//3.共用原型,但是这种子类一改，父类也改
Person.prototype.lastName='deng'
function Person(){

}
function Son(){

}
Son.prototype=Person.prototype;
var son=new Son();
console.log(son.lastName);
function extend(Target,Origin){
  Target.prototype=Origin.prototype;
}

//4.圣杯模式
function extend(target,origin){
  function f(){}
  f.prototype=origin.prototype;//1
  target.prototype=new f();//2    
  target.prototype.constructor=target;
  target.prototype.uber=origin.prototype;//让他知道真正继承自谁
}
//YUI--闭包，封装，属性私有化
var inherit=(function(){
  function f(){};//本身f么偶有什么作用，就是过度一下，所以放在闭包私有化变量即可
  return function(target,origin){
    f.prototype=origin.prototype;//1
    target.prototype=new f();//2    
    target.prototype.constructor=target;
    target.prototype.uber=origin.prototype;
  }
})()

















function aa(){

}
aa.prototype.bb='yuqi';
var x=new aa();
var y=new aa();
console.log(x.bb);
console.log(y.bb);
x.bb='dasd';
console.log(x.bb);
console.log(y.bb);
// yuqi
// yuqi
// dasd
// yuqi
//修改只能在自己的属性上修改 