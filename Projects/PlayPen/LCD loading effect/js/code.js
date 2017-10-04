var duration = 5;
var loaded = null;
var loadListener = function(){
	document.body.className += " loaded";
}
window.setTimeout(function(){
	if (loaded == true)loadListener(); 
},duration*1000);
window.addEventListener("load",function(){
	if (loaded == null)loaded = true;
	else loadListener();
});