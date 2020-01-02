
const modules = {
    "./calculator.js" : function(module, exports, require) {
        let a = 'hello';

        module.exports = {
            add: function(a, b) {
                return a + b;
            },
            sum: function(m, n) {
                let total = 0;
                for (let i = m; i <= n; i++) {
                    total += i;
                }
                return total;
            }
        }
    },
    "./index.js": function(module, exports, require) {
        require('./style.css')
        const { add, sum } = require('./calculator.js');
        console.log(add(5, 4))
        console.log(sum(1, 100))

        let div = document.createElement('div');
        div.innerHTML = "hello"
        div.className = "box";
        document.body.appendChild(div);

    },
    "./style.css": function(module, exports, require) {

        const style = document.createElement('style');
        style.innerHTML = `
            .box {
                border: solid 5px red;
            }
        `;

        document.head.appendChild(style);


    }
}


var installedModules = {};

/******/ 	function __webpack_require__(moduleId) {

/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
                let fn = modules[moduleId]
                console.log(moduleId);
/******/ 		fn.call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}



// modules['./calculator.js']()

__webpack_require__('./index.js');
