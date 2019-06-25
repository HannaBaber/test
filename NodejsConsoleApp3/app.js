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