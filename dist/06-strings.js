"use strict";
(() => {
    console.log('Test ok');
    let productTitle = 'My amazing product';
    //productTitle = null;
    //productTitle = () => {};
    //productTitle = 123;
    productTitle = 'My amazing product change';
    console.log('productTitle', productTitle);
    const productDescription = "Esta el descripción de mi producto";
    console.log(productDescription);
    let productPrice = 100;
    let isNew = false;
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log(summary);
})();
