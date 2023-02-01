import { getIndex, getData, subscribe } from "../../../core/tools/indexation/indexation.js";

function waitInput(input, f = () => {}, t = 1000) {
    var data = getData(input);
    data.index = data.index + 1;
    var index = data.index;
    setTimeout(() => {
        if (data.index == index) {
            f(input);
        }
    }, t);
}
function handleInput(params = {}) {
    var { delay = 100, then = () => {}, preThen = () =>{}, input = {}, event = null } = params;
    preThen({ input, event });
    waitInput(
        input,
        () => {
            var { value } = input;
            then({ value, input, event });
        },
        delay
    );
}

export {
    waitInput,
    handleInput
};
