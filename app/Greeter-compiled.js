'use strict';

var _Greeter = require('./Greeter.css');

var _Greeter2 = _interopRequireDefault(_Greeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('./config.json');


module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};

//# sourceMappingURL=Greeter-compiled.js.map