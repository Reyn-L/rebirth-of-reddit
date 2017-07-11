/* jshint esversion: 6*/
let tent = document.getElementById('content');

function getJSON(method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () =>  cb(JSON.parse(xhr.responseText));
  xhr.open(method, url);
  xhr.send();
}

function Article(thumbnail, title, author, date, upcount, desc) {
  this.thumbnail = thumbnail;
  this.title = title;
  this.author = 'by ' + author;
  this.date = date;
  this.upcount = upcount + ' upcounts';
  this.desc = desc;
}

function createEl(type, className, innerText) {
  const node = document.createElement(type);
  node.className = className || '';
  node.innerText = innerText || '';

  return node;
}

function appendAll(parentNode, nodes) {
  nodes.forEach(node => {
    parentNode.appendChild(node);
  });
}

Article.prototype.createNodes = function() {
  const article = createEl('div', 'article');

  const thumbnail = createEl('img', 'image');
  thumbnail.src = this.thumbnail;
  const title = createEl('span', 'title', this.title);

  const info = createEl('ul', 'info');
  const author = createEl('li', null, this.author);
  const date = createEl('li', null, this.date);
  const upcount = createEl('li', null, this.upcount);

  const dot = createEl('li');
  dot.innerHTML = "&#8226";
  const dot2 = createEl('li');
  dot.innerHTML = "&#8226";

  const desc = createEl('p', 'description', this.desc);

  appendAll(info, [author, dot, date, dot, upcount]);

  appendAll(article, [thumbnail, title, info, desc]);

  return article;
}

getJSON('GET', 'https://www.reddit.com/r/leagueoflegends.json', function(data) {
  data = data.data.children[5].data;
  console.log(data)
  const article = new Article(data.thumbnail, data.title, data.author, data.created_utc, data.ups, data.selftext);

  tent.appendChild(article.createNodes());
});