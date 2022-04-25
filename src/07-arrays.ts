(()=>{
  let prices = [1,2,3,4,5];

  //prices.push('hola');
  //prices.push(ture);
  //prices.push({});

  prices.push(123);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola',false];

  mixed.push(12);
  mixed.push('chau');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5];

  console.log(
  numbers.map(item => item * 2)
  );

})();
