"use strict";

const TERM = document.querySelector("#search-input");
const ACTIVATOR = document.querySelector("#search-button");

const PKMN_NAME = document.querySelector("#pokemon-name");
const PKMN_NUM = document.querySelector("#pokemon-id");
const PKMN_IMAGE = document.querySelector("pokemon-img");
const PKMN_WEIGHT = document.querySelector("#weight");
const PKMN_HEIGHT = document.querySelector("#height");

const PKMN_HP = document.querySelector("#hp");
const PKMN_ATK = document.querySelector("#attack");
const PKMN_DEF = document.querySelector("#defense");
const PKMN_SPATK = document.querySelector("#special-attack");
const PKMN_SPDEF = document.querySelector("#special-defense");
const PKMN_SPD = document.querySelector("#speed");

const SEARCH_FILTER = /[a-z0-9\-]/;

class PokeInfo {
	constructor(name, number, weight, height, types, [hp, atk, def, spAtk, spDef, spd], sprite) {
		this.name = name;
		this.number = number;
		this.weight = weight;
		this.height = height;
		this.types = types;
		this.hp = hp.base_stat;
		this.atk = atk.base_stat;
		this.def = def.base_stat;
		this.spAtk = spAtk.base_stat;
		this.spDef = spDef.base_stat;
		this.spd = spd.base_stat;
		this.sprite = sprite;

		return;
	}

	displayInfo() {
		PKMN_NAME.innerText = this.name;
		PKMN_NUM.innerText = `#${this.number}`;
		PKMN_IMAGE.setAttribute("src", this.sprite);
		PKMN_HEIGHT.innerText = `Height: ${this.height}`;
		PKMN_WEIGHT.innerText = `Weight: ${this.weight}`;
		PKMN_HP.innerText = this.hp;
		PKMN_ATK.innerText = this.atk;
		PKMN_DEF.innerText = this.def;
		PKMN_SPATK.innerText = this.spAtk;
		PKMN_SPDEF.innerText = this.spDef;
		PKMN_SPD.innerText = this.spd;
	}
}

function processSearchTerm(term) {
	let unfiltered = term.toLowerCase().split("");
	let filtered = unfiltered.filter(char => char.match(SEARCH_FILTER));
	let final = [] + filtered;
	return final;
}

function pokeSearch() {
	const searchTerm = TERM.value.toString();
	const quest = new Request(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${processSearchTerm(searchTerm)}`);
	fetch(quest)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const entry = new PokeInfo(data.name, data.id, data.weight, data.height, data.types, data.stats, data.sprites.front_default);
			entry.displayInfo();
		})
		.catch(() => {
			window.alert("Pokémon not found");
		});
}

ACTIVATOR.addEventListener("click", pokeSearch);