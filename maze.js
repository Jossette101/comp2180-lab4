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
	var bound = document.getElementById("boundary1");
	bound.addEventListener("mouseover", function(){
		bound.style.backgroundColor = "red";//
	});
}