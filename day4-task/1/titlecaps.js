// ANONYMOUS FUNCTION

const cap=function(str)
{
    return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
console.log([cap("hello world!")]);
console.log([cap("guvi zen class")]);


// IIFE

const caps=(function(str)
{
    return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
})("hello world!");
console.log(caps);