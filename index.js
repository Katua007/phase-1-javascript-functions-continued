// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
        activity = "roller-skate";
    }
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity) {
    if (activity === undefined) {
        activity = "go to the office";
    }
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    if (typeof flair !== 'string') {
        throw new Error("Flair must be a string");
    }
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
function Calculator() {
  this.add = function(a, b) {
    return a + b;
  };
  this.subtract = function(a, b) {
    return a - b;
  };
  this.multiply = function(a, b) {
    return a * b;
  };
  this.divide = function(a, b) {
    return a / b;
  };
}
