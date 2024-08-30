"use strict";

const input_tag = '<div class="code-bg"><code class="input">';
const output_tag = '<div class="code-bg"><code class="output">';
const end_tag = "</code></div>";

function handle_anglemarks(codestring) {
	codestring = codestring.replaceAll("<", "&lt;");
	codestring = codestring.replaceAll(">", "&gt;");
	return codestring;
}
function handle_blanks(codestring) {
	codestring = codestring.replaceAll("\t", "&nbsp;&nbsp;");
	codestring = codestring.replaceAll("\n", "<br>");
	codestring = codestring.replaceAll("<br><br>", "<br>&nbsp;<br>");
	return codestring;
}
function handle_all(codestring) {
	codestring = handle_blanks(codestring);
	codestring = handle_anglemarks(codestring);
	return codestring;
}

function write_incode(codestring) {
	document.write(`${input_tag}${codestring}${end_tag}`);
}

function write_outcode(codestring) {
	document.write(`${output_tag}${codestring}${end_tag}`);
}

document.write("<p>Defining constants which make the construction of HTML-elements modular. (These are only visible in the sourcecode, but took enough figuring out that I think it's fair to count them among the statements which fulfill my minimum for this assigment.)</p>");
write_incode(handle_anglemarks(`const input_tag = '<div class="code-bg"><code class="input">';`));
write_outcode("undefined");
write_incode(handle_anglemarks(`const output_tag = '<div class="code-bg"><code class="output">';`));
write_outcode("undefined");
write_incode(handle_anglemarks(`const end_tag = "</code></div>";`));
write_outcode("undefined");

var material_list = [];

document.write("<p>Defining class which holds some of the properties of a specified material.</p>");
write_incode(handle_blanks(`class Material {
	constructor(name, density, melt_point) {
		this.name = name;
		this.density = density;
		this.melt_point = melt_point;
	}
}`));
class Material {
	constructor(name, density, melt_point) {
		this.name = name;
		this.density = density;
		this.melt_point = melt_point;
		material_list.push(this);
	}
}
document.write(`${output_tag}undefined${end_tag}`);

document.write("<p>First failed attempt to instance Material.</p>");
write_incode(`let Ca = Material("Calcium", 1.526, 1155);`);
try {
	let Ca = Material("Calcium", 1.526, 1155);
} catch (error) {
	write_outcode(`${error}`);
}

document.write("<p>Second failed attempt to instance Material.</p>");
write_incode(`new var Ca = Material("Calcium", 1.526, 1155);`);
write_outcode(handle_blanks(`new var Ca = Material("Calcium", 1.526, 1155);
			^^^

Uncaught SyntaxError: Unexpected token 'var'`));

document.write("<p>Successful creation of an instance of Material.</p>");
write_incode(`var Ca = new Material("Calcium", 1.526, 1115);`);
var Ca = new Material("Calcium", 1.526, 1115);
write_outcode(`undefined`);

document.write("<p>Returning properties of calcium.</p>");
write_incode("Ca.name;");
write_outcode(Ca.name);
write_incode("Ca.density;");
write_outcode(`${Ca.density}`);
write_incode("Ca.melt_point;");
write_outcode(`${Ca.melt_point}`);
write_incode("typeof(Ca);");
write_outcode(`${typeof(Ca)}`);

document.write("<p>Creating a second instance for iron.</p>");
write_incode(`var Fe = new Material("Iron", 7.874, 1811);`);
var Fe = new Material("Iron", 7.874, 1811);
write_outcode("undefined");

document.write("<p>Returning properties of iron.</p>");
write_incode("Fe.name;");
write_outcode(Fe.name);
write_incode("Fe.density;");
write_outcode(`${Fe.density}`);
write_incode("Fe.melt_point;");
write_outcode(`${Fe.melt_point}`);
write_incode("typeof(Fe);");
write_outcode(`${typeof(Fe)}`);

document.write("<p>Creating a function to compare instances of Material.</p>");
write_incode(handle_blanks(`function mater_compare(elem1, elem2) {
	let dense, sparse, heat_res, melty;
	if (elem1.density > elem2.density) {
		dense = elem1;
		sparse = elem2;
	}
	else {
		dense = elem2;
		sparse = elem1;
	}

	if (elem1.melt_point > elem2.melt_point) {
		heat_res = elem1;
		melty = elem2;
	}
	else {
		heat_res = elem2;
		melty = elem1;
	}

	let out_string = \`Comparison of \${elem1.name} and \${elem2.name}:
- \${dense.name} is the denser of the two materials; its density of \${dense.density}g/cm&#179; is \${dense.density - sparse.density}g/cm&#179; greater than that of \${sparse.name}.
- \${heat_res.name} is the more heat-resitant of the two materials; its melting-point of \${heat_res.melt_point}K is \${heat_res.melt_point - melty.melt_point}K higher than that of \${melty.name}.\`;

	return out_string;
}`));
function mater_compare(elem1, elem2) {
	let dense, sparse, heat_res, melty;
	if (elem1.density > elem2.density) {
		dense = elem1;
		sparse = elem2;
	} else {
		dense = elem2;
		sparse = elem1;
	}

	if (elem1.melt_point > elem2.melt_point) {
		heat_res = elem1;
		melty = elem2;
	} else {
		heat_res = elem2;
		melty = elem1;
	}

	let out_string = `Comparison of ${elem1.name} and ${elem2.name}:<br>
	- ${dense.name} is the denser of the two materials; its density of ${dense.density}g/cm&#179; is ${dense.density - sparse.density}g/cm&#179; greater than that of ${sparse.name}.<br>
	- ${heat_res.name} is the more heat-resitant of the two materials; its melting-point of ${heat_res.melt_point}K is ${heat_res.melt_point - melty.melt_point}K higher than that of ${melty.name}.`;

	return out_string;
}
write_outcode("undefined");

document.write("<p>Comparing iron and calcium.</p>");
write_incode("mater_compare(Ca, Fe);");
write_outcode(mater_compare(Ca, Fe));


document.write("<p>Defining some more materials.</p>");
write_incode("var W = new Material('Wolfram', 19.254, 3695);");
var W = new Material('Wolfram', 19.254, 3695);
write_outcode("undefined");

write_incode("var Os = new Material('Osmium', 22.587, 3306);");
var Os = new Material('Osmium', 22.587, 3306);
write_outcode("undefined");

write_incode("var Au = new Material('Gold', 19.283, 1337);");
var Au = new Material('Gold', 19.283, 1337);
write_outcode("undefined");

write_incode("var Cu = new Material('Copper', 8.935, 1358);");
var Cu = new Material('Copper', 8.935, 1358);
write_outcode("undefined");
// var H2O = new Material('Water', 0.9982, 373);
// var Cu22Sn3 = new Material('Bronze', 8.7, 1186);



function mater_extrema(mater_list) {
	let densities = [], melt_points = [];
	let maters_string = "";

	for (let m = 0; m < mater_list.length; m++) {
		const material = mater_list[m];
		densities.push(material.density);
		melt_points.push(material.melt_point);
		maters_string += material.name + ", ";
	}
	document.write("<p>(In <code>mater_extrema</code>) Showing before and after of a <q><code>.slice</code></q> operation on a part of the output.</p>");
	write_incode("maters_string;");
	write_outcode(maters_string);
	write_incode("maters_string = maters_string.slice(0, -2);");
	maters_string = maters_string.slice(0, -2);
	write_outcode(maters_string);

	let densest_val = Math.max(...densities);
	let sparsest_val = Math.min(...densities);
	let least_melty_val = Math.max(...melt_points);
	let meltiest_val = Math.min(...melt_points);
	let densest_mat, sparsest_mat, least_melty_mat, meltiest_mat;
	for (let m = 0; m < mater_list.length; m++) {
		if (material_list[m].density === densest_val) {
			densest_mat = material_list[m];
		} else if (material_list[m].density === sparsest_val) {
			sparsest_mat = material_list[m];
		}
		if (material_list[m].melt_point === least_melty_val) {
			least_melty_mat = material_list[m];
		} else if (material_list[m].melt_point === meltiest_val) {
			meltiest_mat = material_list[m];
		}
	}

	let out_string = `Extremes for the specified materials (${maters_string}):
- ${densest_mat.name} is the densest of the materials, with a density of ${densest_mat.density}g/cm&#179;.
- ${sparsest_mat.name} is the least dense of the materials, with a density of ${sparsest_mat.density}g/cm&#179;.
- ${least_melty_mat.name} is the most heat-resistant of the materials, with a melting-point of ${least_melty_mat.melt_point}K.
- ${meltiest_mat.name} is the least heat-resistant of the materials, with a melting-point of ${meltiest_mat.melt_point}K.`

	document.write("<p>Output from <code>mater_extrema</code>.</p>");
	return out_string;
}

document.write("<p>Running <code>mater_extrema</code> on an array of all instances of Material.</p>");
write_incode("<code>mater_extrema</code>(material_list);");
write_outcode(handle_blanks(mater_extrema(material_list)));

for (let m = material_list.length-1; m <= 0; m--) {
	delete material_list[m];
}