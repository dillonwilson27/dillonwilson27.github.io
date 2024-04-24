
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
for(var i=1;i<=10;i++){
    let total = 1;
    for(var j=1;j<=i;j++) {
        total*=j;
    }
    console.log(total);
}