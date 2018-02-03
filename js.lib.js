linebreak = document.createElement("br");
let HelloLib=function(params) {
    this.params=params;
    console.log("Hello World From The library!",this.params)
}
HelloLib.prototype.init=function () {
    Object.keys(this.params).map(function(inp){
    	//if(this.params[inp]==)
    	console.log(input(this.params[inp].type,this.params[inp].placeholder))
    }.bind(this))
}
function inputtext(type,placeholder){
	var element=document.createElement("input");
	document.getElementsByTagName("BODY")[0].append(element);
	document.getElementsByTagName("input")[0].append(linebreak);
	element.setAttribute("type",type);
	element.setAttribute("placeholder",placeholder);
	return element;
}
