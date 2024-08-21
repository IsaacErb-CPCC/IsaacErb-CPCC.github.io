'use strict';

const FOOTER = document.getElementsByTagName('footer')[0];

const LOGO = 'Images/logo.png';
const EMAIL = 'ierb0000@email.cpcc.edu';

FOOTER.innerHTML = `
	<p>&copy;22087 by Lilith RoboticsCorp.</p>
	<img src="${LOGO}" alt="Logo for Lilith RoboticsCorp">
	<p>Web-Support: <a href="mailto:${EMAIL}">${EMAIL}</a></p>`;
