// const promise = new Promise(((resolve, reject) => {
//   let condition 
//   condition = false;
//   if (condition) {
//     setTimeout(() => {
//       resolve({name: 'Miguel', age: 19});
//     }, 3000)
//   } else {
//     reject(Error('Um erro ocorreu filhão'))
//   }
// }));

// const promiseReturn = promise.then((resolution) => {
//   resolution.profission = 'Designer';
//   return resolution;
// })
// .then((resolution) => {
//   console.log(resolution)
// }, reject => { // catch
//   console.log(reject);
// })
// .finally(() => {
//   console.log('acabou')
// })

// console.log(promiseReturn);


const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado');
  }, 1000)
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500)
});

const carregouTudo = Promise.all([login, dados]);


carregouTudo.then((resolution) => {
  console.log(resolution);
})