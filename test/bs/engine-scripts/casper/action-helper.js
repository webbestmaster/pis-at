function hover(casper, selector) {
    return casper.mouse.move(selector);
}

function click(casper, selector) {
    return casper.mouse.click(selector);
}

function wait(casper, time) {
    return casper.wait(time);
}

// function evaluate(casper, callback) {
//     return casper.evaluate(callback);
// }

function runAction(casper, action) {
    if (action.hasOwnProperty('click')) {
        click(casper, action.click);
    }

    if (action.hasOwnProperty('wait')) {
        wait(casper, action.wait);
    }

    if (action.hasOwnProperty('hover')) {
        hover(casper, action.hover);
    }

    // if (action.hasOwnProperty('evaluate')) {
    //     evaluate(casper, action.evaluate);
    // }
}

module.exports = function actionHelper(casper, scenario) {
    const actions = scenario.actions || [];
    // [{hover: '.button'}, {click: '.button'}, {wait: 5e3}, {evaluate: () => {document.activeElement.value = '11';}}]

    actions.forEach(function forEachActionCallback(action) {
        runAction(casper, action);
    });
}
;
