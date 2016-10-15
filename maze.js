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
				document.getElementById("status").innerHTML = "You Lose!";
				wallsTouched = true;
			}
			//break;
		} 
	}
	
	var start = document.getElementById("start");
		start.addEventListener("click",function(){
			for(var x = 0; x<boundaries.length; x++){
				boundaries[x].style.backgroundColor = "white";
				document.getElementById("status").innerHTML = "Start Here!";
				startB = true;
			}			
	});
	
	
	/*var walls = for(var x = 0; x<boundaries.length; x++){
				boundaries[x].style.backgroundColor = "black";
				}
		walls.addEventListener("mouseover",function(){
			wallsTouched = true;
			alert("You Lose!");
		});*/
	
	var end = document.getElementById("end");
		end.addEventListener("click",function(){
			if((document.getElementById("status") === "You Lose!")&& (document.getElementById("status") === "Start Here!")){
				document.getElementById("status").innerHTML = "You Lose!";
			}
			else {
				document.getElementById("status").innerHTML = "You Win!";
			}
		});
	
	 
	
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