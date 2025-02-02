nums=[55,89,45,45,90]
console.log(nums)
console.log(nums.length)

console.log("For Loop")
for (let x=0; x<nums.length; x++) {
	console.log(nums[x])
}
console.log("While Loop")

let i=0;
while(i<nums.length){
		console.log(nums[i])
		i++; }

console.log("for in Loop")
for(let y in nums )
	console.log(nums[y])

console.log("for of Loop")
for(let n of nums )
	console.log(n)