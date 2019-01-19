window.$ = window.jQuery = require("jquery");

require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./scripts/navbar.js');
require('./scripts/aboutme.js');
require('./scripts/certificates.js');
new WOW().init();
import PopperJs from 'popper.js';
import 'bootstrap';

import jquery from 'jquery';


// jquery(() => {
//     console.log('Hello jQuery + bootstrap 4!');
// });


document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});
