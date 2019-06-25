'use strict';
function once(fn, context) {
    var result;
    return function () {
        if (fn) {
            this.result = fn.apply(context || this, arguments);
            fn = null;
            return this.result;
        }
        return undefined;

    };
}
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect


function spyOn(func) {
    var spy;
    var count = 0;
    var inputData = [];
    var result;
    var outputData = [];
    spy = function () {
        count++;
        inputData.push(arguments);
        result = func.apply(this, arguments);

        outputData.push(result);
        return result;
    }
    spy.callCount = function () {
        return count;
    }
    spy.wasCalledWith = function (value) {
        return inputData.indexOf(value) === -1 ? false : true;
    }
    spy.returned = function (value) {
        return outputData.indexOf(value) === -1 ? false : true;
    }