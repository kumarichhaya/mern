const maxmin = (a,b,c)=>{
    var x=(a>b && a>c) ? a : (b>c) ? b: c;
    var n=(a<b && a<c) ? a : (b<c) ? b: c;
    // return {x,n};
    return [x,n];
}

a=9; b=4; c=8;
d=maxmin(a,b,c)

// console.log(`Max value  of ${a}, ${b} and ${c} is ${d.x}`);
// console.log(`Min value  of ${a}, ${b} and ${c} is ${d.n}`);

console.log(`Max value  of ${a}, ${b} and ${c} is ${d[0]}`);
console.log(`Min value  of ${a}, ${b} and ${c} is ${d[1]}`);
