// == JA === ERINEVUS

const a = 100
const b = '100'

console.log(a == b) //siin ta kontrollib lihtsalt väärtuseid, olenemata andmetüübist,
//muudab enne arvutuse tegemist samaks andmetüübiks ise vms

console.log(a === b) //siin on nagu raudne võrdlus, et kui andmetüübid juba erinevad, siis ta ütleb kohe et väär

//ASYNC JA AWAIT JA PROMISE

//async func on eritüüpi func mis on loodud asünkroonis tegevuste jaoks
//laseb kirjutada koodi mis tundub nagu ta oleks sünkroonis, mis teeb
//asünkroonis ülesannete täitmise lihtsamaks
//await funcis on paneb funci executioni pausile kuniks mingi promise täidetud
//promise on js objekt mis näitab mingi async tegevuse lõppu või ebaõnnestumist
//promise on kas pending, fulfilled või rejected
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber); // Resolve with a value
      } else {
        reject(new Error('Failed to generate a random number')); // Reject with an error
      }
    }, 1000);
  });
  
  // Using the promise
  myPromise
    .then(result => {
      console.log('Fulfilled with result:', result);
    })
    .catch(error => {
      console.error('Rejected with error:', error);
    });
  