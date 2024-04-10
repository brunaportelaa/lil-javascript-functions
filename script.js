(function add(a, b) {
  const $ = document.querySelector.bind(document);
  const c = a + b;
  $("#output").innerHTML = c;
  console.log(c);
})(5, 2);


