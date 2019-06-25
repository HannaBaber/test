












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