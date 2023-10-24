//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let regexp =  /\bthe\b|\ban\b|\ba\b/gi;

let articleLessArray = [];

let mp = {};  //declaring an object 

for(let i=0; i<arr.length; i++){
	let str = arr[i];
	str = str.replace(regexp, "");
	str = str.replace(/ +/gi);
	str = str.trim();
	articleLessArray.push(str);
	mp[str] = arr[i];
}

articleLessArray.sort();

let ans = [];

for(let i of articleLessArray){
	ans.push(mp[i]);
}

console.log(ans);


