"use strict";

const PAYMENT_INPUT = document.getElementById("cash");
const SUBMIT_BUTTON = document.getElementById("purchase-btn");
const COST_DISPLAY = document.getElementById("change-due");
const SUMMARY_DISPLAY = document.getElementById("transaction");
const CONTENTS_DISPLAY = document.getElementById("contents");

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]];

class CurrencyUnit {
	constructor(value, nameSng, namePlr=null) {
		this.singular = nameSng;
		if (namePlr === null) {
			this.plural = this.singular + "s";}
		else {
			this.plural = namePlr;}

		this.value = value;
		this.currentBalance;}
}

class Register {
	constructor() {
		this.cost = price;
		this.status = "OPEN";

		this.pennies = new CurrencyUnit(0.01, 'penny', 'pennies');
		this.nickels = new CurrencyUnit(0.05, 'nickel');
		this.dimes = new CurrencyUnit(0.10, 'dime');
		this.quarters = new CurrencyUnit(0.25, 'quarter');
		this.ones = new CurrencyUnit(1.00, 'one-dollar-bill');
		this.fives = new CurrencyUnit(5.00, 'five-dollar-bill');
		this.tens = new CurrencyUnit(10.00, 'ten-dollar-bill');
		this.twenties = new CurrencyUnit(20.00, 'twenty-dollar-bill');
		this.hundreds = new CurrencyUnit(100.00, 'hundred-dollar-bill');
		this.importCID();

		this.contents = [this.pennies, this.nickels, this.dimes, this.quarters, this.ones, this.fives, this.tens, this.twenties, this.hundreds];
		return;}

	matchPayment(payment) {
		let canMatch = true;
		let remSum = payment;
		let requestedCurrency = [];

		//- Make key-value-pair-array to track what sum is needed
		//  from each type of currency.
		for (const i in this.contents) {
			let currUnit = this.contents[i];
			requestedCurrency.push({unit: currUnit, requested: 0});}

		//- Find sums needed for each currency-unit.
		for (const i in this.requestedCurrency) {
			const group = requestedCurrency[i];
			if (remSum >= group.unit.value) {
				group.requested = group.unit.value * (Math.floor(remSum/group.unit.value));
				remSum -= group.requested;}}

		//- Check whether any of the sums requested exceed the
		//  amounts currently available.
		for (const i in this.requestedCurrency) {
			const group = requestedCurrency[i];
			if (group.requested > group.unit.currentBalance) {
				canMatch = false;}}

		return [canMatch, requestedCurrency];}

	updateContents() {
		let contentDisplay = "Register Contents:\n";

		for (const i in this.contents) {
			const unit = this.contents[i];
			contentDisplay += `${unit.namePlr}: $${unit.currentBalance.toFixed(2)}\n`;}

		contentDisplay = contentDisplay.trimEnd();

		CONTENTS_DISPLAY.innerText = contentDisplay;
		return;}

	attemptChange() {
		const payment = PAYMENT_INPUT.value;
		if (payment < self.cost) {
			window.alert("Customer does not have enough money to purchase the item.");
			return;}

		else if (payment === self.cost) {
			window.alert("No change due - customer paid with exact cash.")
			return;}

		else {	//Customer has paid more than the amount due; is necessary to offer change.
			let paymentStats = this.matchPayment(payment);
			let canGiveChange	= paymentStats[0];
			let change = paymentStats[1];
			let transactSummary = "";

			if (!canGiveChange) {
				this.status = "INSUFFICIENT_FUNDS";}
			else {
				let timeForClose = true;

				//- Updating cash in register and constructing
				//  transaction-summary.
				for (const i in change) {
					const group = change[i];
					group.unit.currentBalance -= group.requested;
					transactSummary += `${group.unit.nameSng.toUpperCase()}: $${group.requested.toFixed(2)}\n`;}

				//- Checking whether there is no money left in the
				//  register.
				for (const i in this.contents) {
					const unit = this.contents[i];
					if (unit.currentBalance > 0) {
						timeForClose = false;}}
				this.status = timeForClose ? "CLOSED":"OPEN";}

			//- Finalizing and displaying transactSummary.
			transactSummary = (this.status+"\n"+transactSummary).trimEnd();
			SUMMARY_DISPLAY.innerText = transactSummary;

			//- Updating display of register-contents.
			this.updateContents();}
		return;}

	importCID() {
		for (const i in cid) {
			const pair = cid[i];
			const unit = pair[0];
			const value = pair[1];
			if (unit.toLowerCase() === "penny") {
				this.pennies.currentBalance = value;
			} else if (unit.toLowerCase() === "nickel") {
				this.nickels.currentBalance = value;
			} else if (unit.toLowerCase() === "dime") {
				this.dimes.currentBalance = value;
			} else if (unit.toLowerCase() === "quarter") {
				this.quarters.currentBalance = value;
			} else if (unit.toLowerCase() === "one") {
				this.ones.currentBalance = value;
			} else if (unit.toLowerCase() === "five") {
				this.fives.currentBalance = value;
			} else if (unit.toLowerCase() === "ten") {
				this.tens.currentBalance = value;
			}	else if (unit.toLowerCase() === "twenty") {
				this.twenties.currentBalance = value;
			} else {
				this.hundreds.currentBalance = value;
			}
		}
		return;}

	displayCost() {
		COST_DISPLAY.innerText = this.cost;
		return;}
}

const regi = new Register();
regi.displayCost();