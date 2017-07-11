/* jshint esversion: 6*/
let tent = document.getElementById('content');

function getJSON(method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () =>  cb(JSON.parse(xhr.responseText));
  xhr.open(method, url);
  xhr.send();
}

getJSON('GET', 'https://www.reddit.com/r/leagueoflegends.json', function(data) {
  console.log(data.data.children[1].data);

  let art = document.createElement('div');
  art.className = "article";

  let thumbnail = document.createElement('IMG');
  thumbnail.src = data.data.children[1].data.thumbnail;
  thumbnail.className = 'image';
  art.appendChild(thumbnail);

  let head3 = document.createElement('span');
  head3.innerHTML = data.data.children[1].data.title;
  head3.className = "title";
  art.appendChild(head3);

  let ul = document.createElement('ul');
  ul.className = 'info';
  art.appendChild(ul);

  let author = document.createElement('li');
  author.innerHTML = "by " + data.data.children[1].data.author;
  ul.appendChild(author);

  let dot = document.createElement('li');
  dot.innerHTML = "&#8226";
  ul.appendChild(dot);

  let time = document.createElement('li');
  time.innerHTML = data.data.children[1].data.created_utc;
  ul.appendChild(time);

  let dot2 = document.createElement('li');
  dot2.innerHTML = "&#8226";
  ul.appendChild(dot2);

  let upcount = document.createElement('li');
  upcount.innerHTML = data.data.children[1].data.ups + " upcounts";
  ul.appendChild(upcount);

  let text = document.createElement('p');
  text.innerHTML = data.data.children[6].data.selftext;
  text.className = 'description';
  art.appendChild(text);

  tent.appendChild(art);



});