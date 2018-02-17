function hover(chromy, selector) {
    return chromy
        // .wait(selector, defaultWait)
        .rect(selector)
        .result(rect => {
            chromy.mouseMoved(rect.left + Math.round(rect.width / 2), rect.top + Math.round(rect.height / 2));
        });
}

function insert(chromy, selector, text) {
    return chromy.insert(selector, text);
}

function click(chromy, selector) {
    return chromy
        // .wait(selector)
        .click(selector);
}

function wait(chromy, time) {
    return chromy.wait(time);
}

function evaluate(chromy, callback) {
    return chromy.evaluate(callback);
}

function runAction(chromy, action) { // eslint-disable-line complexity
    if (action.hasOwnProperty('click')) {
        click(chromy, action.click);
    }

    if (action.hasOwnProperty('wait')) {
        wait(chromy, action.wait);
    }

    if (action.hasOwnProperty('hover')) {
        hover(chromy, action.hover);
    }

    if (action.hasOwnProperty('insert')) {
        insert(chromy, action.insert, action.text);
    }

    if (action.hasOwnProperty('evaluate')) {
        evaluate(chromy, action.evaluate);
    }
}

module.exports = (chromy, scenario) => {
    const {hoverSelector, clickSelector, actions, postInteractionWait} = scenario;

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
