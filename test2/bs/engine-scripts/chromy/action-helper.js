//


function hover(chromy, selector) {
    return chromy
        .wait(selector)
        .rect(selector)
        .result(rect => {
            chromy.mouseMoved(rect.left + Math.round(rect.width / 2), rect.top + Math.round(rect.height / 2));
        });
}

function click(chromy, selector) {
    return chromy
        .wait(selector)
        .click(selector);
}

function wait(chromy, time) {
    chromy.wait(time);
}

function evaluate(chromy, callback) {
    chromy.evaluate(callback);
}

function runAction(chromy, action) {
    if (action.hasOwnProperty('click')) {
        click(chromy, action.click);
    }

    if (action.hasOwnProperty('wait')) {
        wait(chromy, action.wait);
    }

    if (action.hasOwnProperty('hover')) {
        hover(chromy, action.hover);
    }

    if (action.hasOwnProperty('evaluate')) {
        evaluate(chromy, action.evaluate);
    }
}

module.exports = (chromy, scenario) => {
    const hoverSelector = scenario.hoverSelector;
    const clickSelector = scenario.clickSelector;
    const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]
    const actions = scenario.actions; // [{hover: '.button'}, {click: '.button'}, {wait: 5e3}, {evaluate: () => {document.activeElement.value = '11';}}]

    if (hoverSelector) {
        hover(chromy, hoverSelector);
    }

    if (clickSelector) {
        click(chromy, clickSelector);
    }

    if (actions) {
        actions.forEach(action => runAction(chromy, action));
    }

    if (postInteractionWait) {
        wait(chromy, postInteractionWait);
    }
};
