// if (false) {
// 	var aVar = 'var';
// 	let aLet = 'let';
// }

// console.log('nonDeclaredVar', nonDeclaredVar);
// console.log('aVar', aVar);
// console.log('aLet', aLet);

// --------------------------------------

var funcs = [];

 for (var i=0; i < 10; i++) {
     funcs.push(function() { console.log(i); });
 }

 funcs.forEach(function(func) {
     func();     // outputs the number "10" ten times
 });

// --------------------------------------

