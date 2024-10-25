"use strict";

const TERM = document.querySelector("#search-input");
const ACTIVATOR = document.querySelector("#search-button");

const PKMN_NAME = document.querySelector("#pokemon-name");
const PKMN_NUM = document.querySelector("#pokemon-id");
const PKMN_IMAGE = document.querySelector("pokemon-img");
const PKMN_WEIGHT = document.querySelector("#weight");
const PKMN_HEIGHT = document.querySelector("#height");

const PKMN_ATK = document.querySelector("#attack");
const PKMN_DEF = document.querySelector("#defense");
const PKMN_SPATK = document.querySelector("#special-attack");
const PKMN_SPDEF = document.querySelector("#special-defense");
const PKMN_SPD = document.querySelector("#speed");

const SEARCH_FILTER = /[a-z0-9\-]/;

class PokeInfo {
	constructor(name, number, weight, height, {atk, def, spAtk, spDef, spd}) {
		this.name = name;
		this.number = number;
		this.weight = weight;
		this.height = height;
		this.atk = atk;
		this.def = def;
		this.spAtk = spAtk;
		this.spDef = spDef;
		this.spd = spd;

		return;
	}

	displayInfo() {
		//
	}
}

function processSearchTerm(term) {
	let unfiltered = term.toLowerCase().split("");
	let filtered = unfiltered.filter(char => char.match(SEARCH_FILTER));
	let final = [] + filtered;
	return final;
}

ACTIVATOR.addEventListener("clicked", () => {
	const searchTerm = TERM.value;
	const quest = new Request(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${processSearchTerm(searchTerm)}`);
	fetch(quest)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((errant) => {
			console.log(errant);
		});});