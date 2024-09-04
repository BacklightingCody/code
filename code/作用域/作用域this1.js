var bar = "window";
function say() {
  var bar = "111";
  console.log(this)
  console.log(bar);
  console.log(this.bar);
}
const obj = {
  bar: "222",
  say() {
    console.log(bar);
    console.log(this.bar);
  },
};
say()  //111,undefined
obj.say()   //window,222
obj.say = say;
obj.say();   //111,222
