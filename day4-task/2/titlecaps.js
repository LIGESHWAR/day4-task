// ARROW FUNCTION

const cap=(str)=>str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());

console.log([cap("hello everyone")]);
console.log([cap("good evening!")]);