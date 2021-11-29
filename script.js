/*
	roles: 
		Knight - atk 10 def 10 skill 10 Karma 10
		Gatherer - skill 10 resource 20 Karma 10
		Crafter - skill 20 resource 10 Karma 10
		Liar - atk 10 def 10 resource 10 skill 10 Karma -20
	StoryLine
		1 - Choose role
		16 - EXP gathering (based on atk, def, skill, and resource)
			4 - resource gathering
			4 - atk def training
			4 - resource Skill exchange
			4 - Info gathering (Knowing the existence of Karma)
		6 - Random event (highly based on Karma)
			2 - mob event (atk def karma)
			2 - treaure event (resource karma)
			2 - table turn event (karma info)
		2 - Final event
			1 - Boss fight event
			1 - Return of Hero event
*/

var stat = {attack: 0, defence: 0, resource: 0, Skill: 0, Karma: 0};

function character(name, attack, defence, resource, skill, karma) {
	this.name = name;
	this.attack = attack;
	this.defence = defence;
	this.resource = resource;
	this.skill = skill;
	this.karma = karma;
}

var question = {
	role: {
		questions: "What is your role?",
		option: [
			new character("Knight", 20, 10, 0, 10, 0),
			new character("Gatherer", 0, 0, 20, 10, 10),
			new character("Crafter", 0, 0, 10, 20, 10),
			new character("Liar", 10, 10, 10, 10, -20)
		]
	},
	action: {
	},
	final: {
	}	
};

function character_clicked () {
	var stat = document.createElement("div");
	stat.id = "status";
	for (let i = 0; i < 4; i++) {
	}
}

function create_questions() {
	var container = document.createElement("div");
	container.id = "container";
	var h1 = document.createElement("h1");
	h1.id = "question";
	h1.innerHTML = question.role.questions;
	container.appendChild(h1);
	var grid = document.createElement("div");
	grid.id = "grid";
	for (let i = 0; i < 4; i++) {
		var button = document.createElement("button");
		let character = question.role.option[i];
		button.innerHTML = character.name;
		button.id = character.name;
		button.onclick = character_clicked;
		grid.appendChild(button);
	}
	container.appendChild(grid);
	document.getElementsByTagName("body")[0].appendChild(container);
}