const $ = document.querySelector.bind(document);

function add(a,b){
  let c = a + b;
  return c;
}

const output = add(2,3)

$("#output").innerHTML = output;
console.log(output);
