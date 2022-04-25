(()=>{
  let userId: string | number;

  userId = 1212;
  userId = 'asdsad';

  function greeting(myText: string | number){
    if(typeof myText === 'string'){

      console.log(`string ${      myText.toLocaleUpperCase()}`);

    } else {
      console.log(`number ${      myText.toFixed(1)}`);
    }
  }

  greeting('diego');
  greeting(123.11111122);

})();
