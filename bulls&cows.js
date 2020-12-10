function getRondom (min,max){ 
		return Math.floor(Math.random()*(max-min))+min; 
} 
	num=getRondom(1000,9999)+'' 
let array= String(num).split("")
 console.log(array)
let arr = [];
function button(){ 
	function getNum() { 
		for (let i=0; i<document.getElementsByTagName('input').length; i++){
			arr[i]=document.getElementsByTagName('input')[i].value;
		}
			//console.log(arr)
	 }
	 getNum()
	 function color (){
		for (let k=0; k<array.length; k++){
			if ( array[k]==arr[k]) {
				document.getElementsByTagName('input')[k].style.backgroundColor="green";
	        }
		    else if ( array.indexOf(arr[k])>=0){
				document.getElementsByTagName('input')[k].style.backgroundColor="yellow";
		   }
		    else if  ( array[k]!=arr[k]) {
		        document.getElementsByTagName('input')[k].style.backgroundColor="red"
		   }
		}
	 }
	color()
}	



