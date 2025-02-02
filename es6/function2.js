
const maxmin = (a,b,c)=>{
    var x=(a>b && a>c) ? a : (b>c) ? b: c;
    var n=(a<b && a<c) ? a : (b<c) ? b: c;
    // return {x,n};
    return [x,n];
}


let nums=[7,2,5]
d=maxmin(...nums) //spread opr
console.log(d)

let nums1=[4,6,7,8]
let nums2=[];
nums2.push(...nums1)
nums2.push(nums)
console.log(nums2)