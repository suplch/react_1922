
const modules = {
    './utils/util': function (module, exports, require) {
        module.exports = {
            add(a, b) {
                return a + b;
            }
        }
    },
    './main': function (module, exports, require) {
        const util = require('./utils/util');
        const result = util.add(2, 3);
        console.log('util.add(2, 3) 的结果为', result);

        module.exports = {
            msg: 'welcome'
        }
    }
};

(function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    const outputExports = __webpack_require__('./main');
    console.log(outputExports);

})(modules);


