// "use strict";

// let price = 11.95;
// let cid = [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]];

// class CurrencyUnit {
// 	constructor(value, nameSng, namePlr=null) {
// 		this.singular = nameSng;
// 		if (namePlr === null) {
// 			this.plural = this.singular + "s";}
// 		else {
// 			this.plural = namePlr;}

// 		this.value = value;
// 		this.currentBalance;}
// }

// class Register {
// 	constructor() {
// 		this.cost = price;
// 		this.status = "OPEN";

// 		this.pennies = new CurrencyUnit(0.01, 'penny', 'pennies');
// 		this.nickels = new CurrencyUnit(0.05, 'nickel');
// 		this.dimes = new CurrencyUnit(0.10, 'dime');
// 		this.quarters = new CurrencyUnit(0.25, 'quarter');
// 		this.ones = new CurrencyUnit(1.00, 'one-dollar-bill');
// 		this.fives = new CurrencyUnit(5.00, 'five-dollar-bill');
// 		this.tens = new CurrencyUnit(10.00, 'ten-dollar-bill');
// 		this.twenties = new CurrencyUnit(20.00, 'twenty-dollar-bill');
// 		this.hundreds = new CurrencyUnit(100.00, 'hundred-dollar-bill');
// 		this.importCID();

// 		this.contents = [this.hundreds, this.twenties, this.tens, this.fives, this.ones, this.quarters, this.dimes, this.nickels, this.pennies];
// 		return;}

// 	matchPayment(payment) {
// 		let canMatch = true;
// 		let remSum = payment - this.cost;
// 		let requestedCurrency = [];

// 		//- Make key-value-pair-array to track what sum is needed
// 		//  from each type of currency.
// 		for (const i in this.contents) {
// 			let currUnit = this.contents[i];
// 			requestedCurrency.push({unit: currUnit, requested: 0});}

// 		//- Find sums needed for each currency-unit.
// 		for (const i in requestedCurrency) {
// 			const group = requestedCurrency[i];
// 			if (remSum >= group.unit.value) {
// 				group.requested = group.unit.value * (Math.floor(remSum/group.unit.value));
// 				remSum -= group.requested;}}

// 		//- Check whether any of the sums requested exceed the
// 		//  amounts currently available.
// 		for (const i in requestedCurrency) {
// 			const group = requestedCurrency[i];
// 			if (group.requested > group.unit.currentBalance) {
// 				canMatch = false;}}

// 		return [canMatch, requestedCurrency];}


// 	updateContents() {
// 		let contentDisplay = "Register Contents:\n";

// 		for (const i in this.contents) {
// 			const unit = this.contents[i];
// 			contentDisplay += `${unit.plural}: $${unit.currentBalance.toFixed(2)}\n`;}

// 		contentDisplay = contentDisplay.trimEnd();

// 		document.getElementById("contents").innerText = contentDisplay;
// 		return;}


// 	attemptChange() {
// 		const payment = Number(document.getElementById("cash").value);
// 		if (payment < this.cost) {
// 			window.alert("Customer does not have enough money to purchase the item");}

// 		else if (payment === this.cost) {
// 			document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";}

// 		else {	//Customer has paid more than the amount due; is necessary to offer change.
// 			let paymentStats = this.matchPayment(payment);
// 			let canGiveChange	= paymentStats[0];
// 			let change = paymentStats[1];
// 			let transactSummary = "";

// 			if (!canGiveChange) {
// 				this.status = "INSUFFICIENT_FUNDS";}
// 			else {
// 				let timeForClose = true;

// 				//- Updating cash in register and constructing
// 				//  transaction-summary.
// 				for (const i in change) {
// 					const group = change[i];
// 					group.unit.currentBalance -= group.requested;
// 					if (group.requested !== 0) {
// 						transactSummary += `${group.unit.singular.toUpperCase()}: $${group.requested.toFixed(2)}\n`;}}

// 				//- Checking whether there is no money left in the
// 				//  register.
// 				for (const i in this.contents) {
// 					const unit = this.contents[i];
// 					if (unit.currentBalance > 0) {
// 						timeForClose = false;}}
// 				this.status = timeForClose ? "CLOSED":"OPEN";}

// 			//- Finalizing and displaying transactSummary.
// 			transactSummary = (this.status+"\n"+transactSummary).trimEnd();
// 			document.getElementById("transaction").innerText = transactSummary;

// 			//- Updating display of register-contents.
// 			this.updateContents();}
// 		return;}


// 	importCID() {
// 		for (const i in cid) {
// 			const pair = cid[i];
// 			const unit = pair[0];
// 			const value = pair[1];
// 			if (unit.toLowerCase() === "penny") {
// 				this.pennies.currentBalance = value;
// 			} else if (unit.toLowerCase() === "nickel") {
// 				this.nickels.currentBalance = value;
// 			} else if (unit.toLowerCase() === "dime") {
// 				this.dimes.currentBalance = value;
// 			} else if (unit.toLowerCase() === "quarter") {
// 				this.quarters.currentBalance = value;
// 			} else if (unit.toLowerCase() === "one") {
// 				this.ones.currentBalance = value;
// 			} else if (unit.toLowerCase() === "five") {
// 				this.fives.currentBalance = value;
// 			} else if (unit.toLowerCase() === "ten") {
// 				this.tens.currentBalance = value;
// 			}	else if (unit.toLowerCase() === "twenty") {
// 				this.twenties.currentBalance = value;
// 			} else {
// 				this.hundreds.currentBalance = value;
// 			}
// 		}
// 		return;}

// 	displayCost() {
// 		document.getElementById("change-due").innerText = `Total Cost: $${this.cost}`;
// 		return;}
// }

// const regi = new Register();
// regi.displayCost();

let price = 11.95;
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
let cash = document.getElementById("cash");

const currency = [
  {single: 'ONE HUNDRED', plural: 'Hundreds', value: 100.00, requested: 0.00},
  {single: 'TWENTY',  plural: 'Twenties', value: 20.00, requested: 0.00},
  {single: 'TEN',     plural: 'Tens',     value: 10.00, requested: 0.00},
  {single: 'FIVE',    plural: 'Fives',    value:  5.00, requested: 0.00},
  {single: 'ONE',     plural: 'Ones',     value:  1.00, requested: 0.00},
  {single: 'QUARTER', plural: 'Quarters', value:  0.25, requested: 0.00},
  {single: 'DIME',    plural: 'Dimes',    value:  0.10, requested: 0.00},
	{single: 'NICKEL',  plural: 'Nickels',  value:  0.05, requested: 0.00},
  {single: 'PENNY',   plural: 'Pennies',  value:  0.01, requested: 0.00}];


class Register {
  constructor() {
    this.status = "OPEN";
  }


  matchPayment(payment) {
    let canMatch = true;
    let remSum = payment - price;

    for (const i in currency) {
      const group = currency[i];
      if (remSum >= group.value) {
        group.requested = Number((group.value * (Math.floor(remSum/group.value))).toFixed(2));
        remSum -= group.requested;
      }
    }

		for (const i in currency) {
			const group = currency[i];
      let inDrawer;

      for (const i in cid) {
        const pair = cid[i];
        if (pair[0] === group.single) {
          inDrawer = pair[1];
        }
      }

			if (group.requested > inDrawer) {
				canMatch = false;
      }
    }

    return canMatch;
  }


  attemptChange() {
    let payment = Number(cash.value);
    if (payment < price) {
      window.alert("Customer does not have enough money to purchase the item");
    }
    else if (payment === price) {
      document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
    }
    else {  //Customer has paid more than the amount due; is necessary to offer change.
      const canGiveChange = this.matchPayment(payment);
      let transactSummary = "";

      if (!canGiveChange) {
        this.status = "INSUFFICIENT_FUNDS";
      }
      else {
        let timeForClose = true;

 				//- Updating cash in register and constructing
				//  transaction-summary.
        for (const i in currency) {
          const group = currency[i];

          for (const i in cid) {
            const pair = cid[i];
            if (pair[0] === group.single) {
              console.log(`${pair[0]}: ${pair[1]}`);
              pair[1] -= group.requested;
              console.log(`${pair[0]}: ${pair[1]}`);
            }
          }
          if (group.requested > 0) {
            transactSummary += `${group.single}: \$${group.requested}\n`;
          }
        }

        //- Checking whether there is no money left in the
				//  register.
        for (const i in cid) {
          const pair = cid[i];
          if (pair[1] > 0) {
            timeForClose = false;
          }
        }

        this.status = timeForClose ? "CLOSED":"OPEN";
      }

      transactSummary = ("Status: "+this.status+"\n"+transactSummary).trimEnd();
      document.getElementById("transaction").innerText = transactSummary;
    }
  }

}

document.getElementById("change-due").innerText = `Total Cost: \$${price}`;
const regi = new Register();