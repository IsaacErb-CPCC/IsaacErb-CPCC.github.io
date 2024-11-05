"use strict";

var inputTag = "<div class=\"code-bg\"><code class=\"input\">";
var outputTag = "<div class=\"code-bg\"><code class=\"output\">";
var endTag = "</code></div>";

function handleAnglemarks(codestring) {
	codestring = codestring.replaceAll("<", "&lt;");
	codestring = codestring.replaceAll(">", "&gt;");
	return codestring;
}
function handleBlanks(codestring) {
	codestring = codestring.replaceAll("\t", "&nbsp;&nbsp;");
	codestring = codestring.replaceAll("\n", "<br>");
	codestring = codestring.replaceAll("<br><br>", "<br>&nbsp;<br>");
	return codestring;
}
function handleAll(codestring) {
	codestring = handleAnglemarks(codestring);
	codestring = handleBlanks(codestring);
	return codestring;
}

function writeIncode(codestring) {
	OUTPUT_ZONE.innerHTML += (`${inputTag}${codestring}${endTag}`);
}
function writeOutcode(codestring) {
	OUTPUT_ZONE.innerHTML += (`${outputTag}${codestring}${endTag}`);
}

function mainScript() {
	const OUTPUT_ZONE = document.getElementById("code-out-area");
	OUTPUT_ZONE.innerHTML = ("<p>Defining constants which make the construction of HTML-elements modular. (These are only visible in the sourcecode, but took enough figuring out that I think it's fair to count them among the statements which fulfill my minimum for this assigment.)</p>");
	writeIncode(handleAnglemarks("const inputTag = \"<div class=\\\"code-bg\\\"><code class=\\\"input\\\">\";"));
	writeOutcode("undefined");
	writeIncode(handleAnglemarks("const outputTag = \"<div class=\\\"code-bg\\\"><code class=\\\"output\\\">\";"));
	writeOutcode("undefined");
	writeIncode(handleAnglemarks("const endTag = \"</code></div>\";"));
	writeOutcode("undefined");

	var materialList = [];

	OUTPUT_ZONE.innerHTML +=("<p>Defining class which holds some of the properties of a specified material.</p>");
	writeIncode(handleBlanks(`class Material {
		constructor(name, density, meltPoint) {
			this.name = name;
			this.density = density;
			this.meltPoint = meltPoint;
		}
	}`));
	class Material {
		constructor(name, density, meltPoint) {
			this.name = name;
			this.density = density;
			this.meltPoint = meltPoint;
			materialList.push(this);
		}
	}
	OUTPUT_ZONE.innerHTML +=(`${outputTag}undefined${endTag}`);

	OUTPUT_ZONE.innerHTML +=("<p>First failed attempt to instance Material.</p>");
	writeIncode("let Ca = Material(\"Calcium\", 1.526, 1155);");
	try {
		let Ca = Material("Calcium", 1.526, 1155);
	} catch (error) {
		writeOutcode(`${error}`);
	}

	OUTPUT_ZONE.innerHTML +=("<p>Second failed attempt to instance Material.</p>");
	writeIncode("new var Ca = Material(\"Calcium\", 1.526, 1155);");
	writeOutcode(handleBlanks(`new var Ca = Material("Calcium", 1.526, 1155);
				^^^

	Uncaught SyntaxError: Unexpected token 'var'`));

	OUTPUT_ZONE.innerHTML +=("<p>Successful creation of an instance of Material.</p>");
	writeIncode("var Ca = new Material(\"Calcium\", 1.526, 1115);");
	var Ca = new Material("Calcium", 1.526, 1115);
	writeOutcode("undefined");

	OUTPUT_ZONE.innerHTML +=("<p>Returning properties of calcium.</p>");
	writeIncode("Ca.name;");
	writeOutcode(Ca.name);
	writeIncode("Ca.density;");
	writeOutcode(`${Ca.density}`);
	writeIncode("Ca.meltPoint;");
	writeOutcode(`${Ca.meltPoint}`);
	writeIncode("typeof(Ca);");
	writeOutcode(`${typeof(Ca)}`);

	OUTPUT_ZONE.innerHTML +=("<p>Creating a second instance for iron.</p>");
	writeIncode("var Fe = new Material(\"Iron\", 7.874, 1811);");
	var Fe = new Material("Iron", 7.874, 1811);
	writeOutcode("undefined");

	OUTPUT_ZONE.innerHTML +=("<p>Returning properties of iron.</p>");
	writeIncode("Fe.name;");
	writeOutcode(Fe.name);
	writeIncode("Fe.density;");
	writeOutcode(`${Fe.density}`);
	writeIncode("Fe.meltPoint;");
	writeOutcode(`${Fe.meltPoint}`);
	writeIncode("typeof(Fe);");
	writeOutcode(`${typeof(Fe)}`);

	OUTPUT_ZONE.innerHTML +=("<p>Creating a function to compare instances of Material.</p>");
	writeIncode(handleBlanks(`function materCompare(elem1, elem2) {
		let dense, sparse, heatRes, melty;
		if (elem1.density > elem2.density) {
			dense = elem1;
			sparse = elem2;
		} else {
			dense = elem2;
			sparse = elem1;
		}

		if (elem1.meltPoint > elem2.meltPoint) {
			heatRes = elem1;
			melty = elem2;
		} else {
			heatRes = elem2;
			melty = elem1;
		}

		let outString = \`Comparison of \${elem1.name} and \${elem2.name}:
	- \${dense.name} is the denser of the two materials; its density of \${dense.density}g/cm&#179; is \${dense.density - sparse.density}g/cm&#179; greater than that of \${sparse.name}.
	- \${heatRes.name} is the more heat-resitant of the two materials; its melting-point of \${heatRes.meltPoint}K is \${heatRes.meltPoint - melty.meltPoint}K higher than that of \${melty.name}.\`;

		return outString;
	}`));
	function materCompare(elem1, elem2) {
		let dense, sparse, heatRes, melty;
		if (elem1.density > elem2.density) {
			dense = elem1;
			sparse = elem2;
		} else {
			dense = elem2;
			sparse = elem1;
		}

		if (elem1.meltPoint > elem2.meltPoint) {
			heatRes = elem1;
			melty = elem2;
		} else {
			heatRes = elem2;
			melty = elem1;
		}

		let outString = `Comparison of ${elem1.name} and ${elem2.name}:
	- ${dense.name} is the denser of the two materials; its density of ${dense.density}g/cm&#179; is ${dense.density - sparse.density}g/cm&#179; greater than that of ${sparse.name}.
	- ${heatRes.name} is the more heat-resitant of the two materials; its melting-point of ${heatRes.meltPoint}K is ${heatRes.meltPoint - melty.meltPoint}K higher than that of ${melty.name}.`;

		return outString;
	}
	writeOutcode("undefined");

	OUTPUT_ZONE.innerHTML +=("<p>Comparing iron and calcium.</p>");
	writeIncode("materCompare(Ca, Fe);");
	writeOutcode(handleBlanks(materCompare(Ca, Fe)));


	OUTPUT_ZONE.innerHTML +=("<p>Defining some more materials.</p>");
	writeIncode("var W = new Material(\"Wolfram\", 19.254, 3695);");
	var W = new Material("Wolfram", 19.254, 3695);
	writeOutcode("undefined");

	writeIncode("var Os = new Material(\"Osmium\", 22.587, 3306);");
	var Os = new Material("Osmium", 22.587, 3306);
	writeOutcode("undefined");

	writeIncode("var Au = new Material(\"Gold\", 19.283, 1337);");
	var Au = new Material("Gold", 19.283, 1337);
	writeOutcode("undefined");

	writeIncode("var Cu = new Material(\"Copper\", 8.935, 1358);");
	var Cu = new Material("Copper", 8.935, 1358);
	writeOutcode("undefined");
	// var H2O = new Material('Water', 0.9982, 373);
	// var Cu22Sn3 = new Material('Bronze', 8.7, 1186);

	OUTPUT_ZONE.innerHTML +=("<p>Creating function for comparing an array of instances of Material.</p>");
	writeIncode(handleAll(`function materExtrema(materList) {
		let densities = [], meltPoints = [];
		let matersString = "";

		for (let m = 0; m < materList.length; m++) {
			const material = materList[m];
			densities.push(material.density);
			meltPoints.push(material.meltPoint);
			matersString += material.name + ", ";
		}
		OUTPUT_ZONE.innerHTML +=("<p>(In <code>materExtrema</code>) Showing before and after of a <q><code>.slice</code></q> operation on a part of the output.</p>");
		writeIncode("matersString;");
		writeOutcode(matersString);
		writeIncode("matersString = matersString.slice(0, -2);");
		matersString = matersString.slice(0, -2);
		writeOutcode(matersString);

		let densestVal = Math.max(...densities);
		let sparsestVal = Math.min(...densities);
		let leastMeltyVal = Math.max(...meltPoints);
		let meltiestVal = Math.min(...meltPoints);
		let densestMat, sparsestMat, leastMeltyMat, meltiestMat;
		for (let m = 0; m < materList.length; m++) {
			if (materialList[m].density === densestVal) {
				densestMat = materialList[m];
			} else if (materialList[m].density === sparsestVal) {
				sparsestMat = materialList[m];
			}
			if (materialList[m].meltPoint === leastMeltyVal) {
				leastMeltyMat = materialList[m];
			} else if (materialList[m].meltPoint === meltiestVal) {
				meltiestMat = materialList[m];
			}
		}

		let outString = \`Extremes for the specified materials (\${matersString}):
	- \${densestMat.name} is the densest of the materials, with a density of \${densestMat.density}g/cm&#179;.
	- \${sparsestMat.name} is the least dense of the materials, with a density of \${sparsestMat.density}g/cm&#179;.
	- \${leastMeltyMat.name} is the most heat-resistant of the materials, with a melting-point of \${leastMeltyMat.meltPoint}K.
	- \${meltiestMat.name} is the least heat-resistant of the materials, with a melting-point of \${meltiestMat.meltPoint}K.\`;

		OUTPUT_ZONE.innerHTML +=("<p>Output from <code>materExtrema</code>.</p>");
		return outString;
	}`));	//${handleAnglemarks("<p>Output from <code>materExtrema</code>.</p>")}
	function materExtrema(materList) {
		let densities = [], meltPoints = [];
		let matersString = "";

		for (let m = 0; m < materList.length; m++) {
			const material = materList[m];
			densities.push(material.density);
			meltPoints.push(material.meltPoint);
			matersString += material.name + ", ";
		}
		OUTPUT_ZONE.innerHTML +=("<p>(In <code>materExtrema</code>) Showing before and after of a <q><code>.slice</code></q> operation on a part of the output.</p>");
		writeIncode("matersString;");
		writeOutcode(matersString);
		writeIncode("matersString = matersString.slice(0, -2);");
		matersString = matersString.slice(0, -2);
		writeOutcode(matersString);

		let densestVal = Math.max(...densities);
		let sparsestVal = Math.min(...densities);
		let leastMeltyVal = Math.max(...meltPoints);
		let meltiestVal = Math.min(...meltPoints);
		let densestMat, sparsestMat, leastMeltyMat, meltiestMat;
		for (let m = 0; m < materList.length; m++) {
			if (materialList[m].density === densestVal) {
				densestMat = materialList[m];
			} else if (materialList[m].density === sparsestVal) {
				sparsestMat = materialList[m];
			}
			if (materialList[m].meltPoint === leastMeltyVal) {
				leastMeltyMat = materialList[m];
			} else if (materialList[m].meltPoint === meltiestVal) {
				meltiestMat = materialList[m];
			}
		}

		let outString = `Extremes for the specified materials (${matersString}):
	- ${densestMat.name} is the densest of the materials, with a density of ${densestMat.density}g/cm&#179;.
	- ${sparsestMat.name} is the least dense of the materials, with a density of ${sparsestMat.density}g/cm&#179;.
	- ${leastMeltyMat.name} is the most heat-resistant of the materials, with a melting-point of ${leastMeltyMat.meltPoint}K.
	- ${meltiestMat.name} is the least heat-resistant of the materials, with a melting-point of ${meltiestMat.meltPoint}K.`;

		OUTPUT_ZONE.innerHTML +=("<p>Output from <code>materExtrema</code>.</p>");
		return outString;
	}
	writeOutcode("undefined");

	OUTPUT_ZONE.innerHTML +=("<p>Running <code>materExtrema</code> on an array of all instances of Material.</p>");
	writeIncode("<code>materExtrema</code>(materialList);");
	writeOutcode(handleBlanks(materExtrema(materialList)));

	for (let m = materialList.length-1; m <= 0; m--) {
		delete materialList[m];
	}
}

mainScript();