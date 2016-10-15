/* window.onload = function(){
function getBoundary(){
    var bound = document.getElementById("boundary1");
    bound.setAttribute("class","youlose");
}

function MouseOver(){
    document.getElementById("boundary1").addEventListener("onmouseover",getBoundary());
}  
};
     */
    
window.onload = function(){
	/* var bound = document.getElementById("boundary1");
	bound.addEventListener("mouseover", function(){
		bound.style.backgroundColor = "red";//
	}); */
	
	/*var boundaries = document.querySelector("div");
	[].forEach.call(boundaries, function(div){
		div.style.color = "red";
	});
	
	
	document.getElementsByClassName(".boundary").addEventListener("hover",function(){
		boundaries.style.backgroundColor = "red";
		*/
	var boundaries = document.querySelectorAll(".boundary");
	
	var startB = false;
	var wallsTouched = false;
	
	for(var c = 0; c < boundaries.length; c++){
		boundaries[c].onmouseover = function(){
			for(var x = 0; x<boundaries.length; x++){
				boundaries[x].style.backgroundColor = "red";
				wallsTouched = true;
			}
			//break;
		} 
	}
	
	var start = document.getElementById("start");
		start.addEventListener("click",function(){
		startB = true; 
	alert("You started!");
	});
	
	var end = document.getElementById("end");
		end.addEventListener("click",function(){
		/*if((wallsTouched == false)&&(startB == true)){
			alert("You Win!");
		}*/ alert("hello");});
	/*if(wallsTouched == true){
		alert("You Lose!");
		}
	 
	*/
	
	/*var walls = for(var c = 0; c < boundaries.length; c++){
		boundaries[c].onmouseover = function(){
			for(var x = 0; x<boundaries.length; x++){
				boundaries[x].style.backgroundColor = "red";
			}
		}
	}
	
	//if()
	*/
}//$(".boundary").css("color":"red");