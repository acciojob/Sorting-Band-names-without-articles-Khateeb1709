//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let regexp =  /\bthe\b|\ban\b|\ba\b/gi;

let articleLessArray = [];

let map = {};  //declaring an object 

for(let i=0; i<arr.length; i++){
	let articleLessItem = arr[i].replace(regexp, "").trim(); 
	articleLessArray.push(articleLessItem);
	mp[articleLessItem] = arr[i];
}

articleLessArray.sort();

let ans = [];

for(let i of articleLessArray){
	ans.push(map[i]);
}

console.log(ans);


