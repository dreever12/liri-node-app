function Programmer(name, position, age, language){
	this.name = name;
	this.position = position 
	this.age = age
	this.language = language
};

Programmer.prototype.printName = function() {
	console.log("Name:" + this.name + "\nPosition:" + this.position + "\nAge:" + this.age + "\nLanguage:" + this.language);
};

var denny = new Programmer("Denny", "programmer", 29, "javascript");

denny.printName();