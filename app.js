/* jshint esversion: 6*/
let tent = document.getElementById('content');

function getJSON(method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () =>  cb(JSON.parse(xhr.responseText));
  xhr.open(method, url);
  xhr.send();
}

getJSON('GET', 'https://www.reddit.com/r/leagueoflegends.json', function(data) {
  console.log(data.data.children[6].data.author);
  console.log(data.data.children[6].data.title);
  console.log(data.data.children[6].data.thumbnail);
  console.log(data.data.children[6].data.ups);
  console.log(data.data.children[6].data.selftext);
  console.log(data.data.children[6].data.url);
  console.log(data.data.children[6].data.created_utc);
  let art = document.createElement('div');
  art.className = "article";
  tent.appendChild(art);

  let thumbnail = document.createElement('IMG');
  thumbnail.src = data.data.children[1].data.thumbnail;
  thumbnail.className = 'image';
  art.appendChild(thumbnail);

  let head3 = document.createElement('h3');
  head3.innerHTML = data.data.children[6].data.title;
  head3.className = "title";
  art.appendChild(head3);

  let ul = document.createElement('ul');
  art.appendChild(ul);

  let author = document.createElement('li');
  author.innerHTML = data.data.children[6].data.author;
  author.className = 'author';
  ul.appendChild(author);




});