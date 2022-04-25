"use strict";
(() => {
    let userId;
    userId = 1212;
    userId = 'asdsad';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLocaleUpperCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('diego');
    greeting(123.11111122);
})();
