function Villager()
{
	
	//Static Variables
	Villager.SEX = { M:0,F:1};
	
	Villager.numberVillagers;
	if(typeof Villager.numberVillagers == "undefined")
		{ Villager.numberVillagers = 0; } //A Static variable which counts every villagers alive
	if(typeof Villager.countIdVillagers == "undefined")
	
	Villager.countIdVillagers;
		{ Villager.countIdVillagers = 0;} //A Static variable which counts every villagers to give everyone an unique ID
	
	//Static Functions
	
	Villager.getNumberVillagers = function() { return Villagers;};
	
	this.id = Villager.countIdVillagers;
	Villager.countIdVillagers++;
	Villager.numberVillagers++;
	
	this._firstName;
	this._lastName;
	this._gender
	this._age; //From 0 to ??? 
	this._marriedTo; //IdToAnotherVillager
	this._isEducated; //Boolean
	this._health; //From 0 to 100
	this._happiness; //From 0 to 100
	this._job //Id to his job
	this._house //Id to house
	
}

Villager.prototype.newBabyVillager = function() //Make a "Brand new" Villagers
{

	
	//TO DO : Make a more complex naming system
	this._firstname = "Jean";
	this._lastname = "Peplu";
	
	//To DO : Randomize Gender
	this._gender = Villager.M;
	
	this._age = 0;
	
	this._marriedTo = -1;
	this._isEducated = false;
	this._healh = 100;
	this._happiness = 100;
	this._job = -1
	this.house = -1;
	
	return this;
}