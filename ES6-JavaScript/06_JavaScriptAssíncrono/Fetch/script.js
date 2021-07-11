const doc = fetch('http://viacep.com.br/ws/01001000/json/');

doc.then((resolution) => resolution.json()
.then((resolution) => console.log(resolution))
);