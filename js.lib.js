let HelloLib=function(params) {
    this.params=params;
    console.log("Hello World From The library!",this.params)
}
HelloLib.prototype.init=function () {
	params=this.params;
    Object.keys(this.params).map(function(inp){
    	console.log(input(params[inp].type,params[inp].placeholder))
    })
}
function input(type,placeholder){
	var element=document.createElement("input")
	element.setAttribute("type",type);
	element.setAttribute("placeholder",placeholder);
	return element;
}