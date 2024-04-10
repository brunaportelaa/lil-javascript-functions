info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  }
}
const $ = document.querySelector.bind(document);

function listObject(data) {
  const $ = document.querySelector.bind(document)
  let output = '<ul>'
  for (const key in data){
    output += `<li><a href="${data[key]}">${key}</a></li>`;
  }
  output += '</ul>'
  $('#output').innerHTML = output
}

listObject(info.social)