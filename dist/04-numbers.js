"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);
    let customerAge = 28;
    //customerAge = customerAge + '1' ;
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);
    let producInStock;
    //console.log('producInStock', producInStock);
    //if (producInStock > 10) {
    //  console.log('is greater');
    // }
    let discont = parseInt('100');
    console.log('discont', discont);
    if (discont <= 200) {
        console.log('apply');
    }
    else {
        console.log('not apply');
    }
    let hex = 0xfff;
    console.log('hex:', hex);
    let bin = 0b01010;
    console.log('bin:', bin);
    const myNumber = 10;
})();
