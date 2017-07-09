/* jshint esversion: 6*/
function getJSON(method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () =>  cb(JSON.parse(xhr.responseText));
  xhr.open(method, url);
  xhr.send();
}

getJSON('GET', 'https://www.reddit.com/r/leagueoflegends.json', function(data) {
  console.log(data.data.children[3].data.author);
});