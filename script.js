let arrays =['26', '81', '36', '25', '39', '45', '62', '24', '97', '72'];
let sum = 0;
for (let i = 0; i < arrays.length; i++) {
    let myArr = Array.from(arrays[i]) ;
    let x = Math.max(myArr[0],myArr[1]);
    sum += x;
    console.log(sum);
} 