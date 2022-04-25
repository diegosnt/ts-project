"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLocaleUpperCase();
    myDynamicVar = 123.995;
    const rta2 = myDynamicVar.toFixed();
    console.log('myDynamicVar', myDynamicVar);
    console.log('rta', rta);
    console.log('rta2', rta2);
})();
