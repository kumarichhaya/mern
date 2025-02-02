let nums=[55,89,45,45,90,34,56,67,78,23,12,45,56,78]
// forEach filter map reduce  ()=>
//  nums.forEach((n)=>console.log(n))

//  let nums1=nums.filter((n)=>n%2==0)
//  console.log(nums1)

//  let nums2=nums.filter((n)=>n>40 && n%2!=0)
//  console.log(nums2)

// let nums3=nums.map((n)=>n/2)
// console.log(nums3)
// let nums4=nums.map((n)=>n*n)
// console.log(nums4)

let y=nums.reduce((n,s)=>n+s)
console.log(y)
let x=nums.reduce((n,s)=>(n/2)*s)
console.log(x)