//
// if(window.location.href !== "dillonwilson27.github.io") {
//     window.location = "http://www.youtube.com/watch_popup?v=oHg5SJYRHA0";
// }

console.log("task 1");
for(var i=0;i<=10;i++){
    console.log(i*i);
}
console.log("task 2");
for(var i=5;i>=1;i--){
    console.log(i);
}
console.log("blast off");

console.log("task 3");
for(var i=0;i<=50;i+=2){
    console.log(i);
}
console.log("task 4");
let sum=  0;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
console.log("task 5");
let arr = [3,1,4,1,5];
for(let i=1;i<=10;i++){
    let total = 1;
    for(let j=1;j<=i;j++) {
        total*=j;
    }
    console.log(total);
}
console.log("task 6");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("task 7");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-i));
}
console.log("task 8");
let cubes = [];
for (let i = 0; i < arr.length; i++) {
    cubes.push(i*i*i);
}
console.log(cubes);
console.log("task 9");
let fibs = [1,1];
for (let i = 1; i < arr.length; i++) {
    fibs.push(fibs[i-1]+fibs[i]);
}
console.log(fibs);
console.log("task 10");
let back = [1];
for (let i = 1; i < arr.length; i++) {
    back.push(arr.at(-i));
}
console.log(back);