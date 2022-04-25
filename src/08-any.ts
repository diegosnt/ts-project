(()=>{
  let myDynamicVar: any;
myDynamicVar = 100;
myDynamicVar = null;
myDynamicVar = {};
myDynamicVar = '';

myDynamicVar = 'Hola';
const rta = (myDynamicVar as string).toLocaleUpperCase();

myDynamicVar = 123.995;
const rta2 = (<number>myDynamicVar).toFixed();

console.log('myDynamicVar', myDynamicVar);

console.log('rta', rta);
console.log('rta2', rta2);

})();
