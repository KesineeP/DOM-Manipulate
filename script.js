const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const para = document.createElement('p');
para.style.cssText = 'color: red';
para.textContent = 'Hey I\'m red!';
content.appendChild(para);

const head3 = document.createElement('h3');
head3.style.cssText = 'color: blue';
head3.textContent = 'I\'m a blue h3!';
content.appendChild(head3);

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: black');

const head1 = document.createElement('h1');
head1.textContent = 'I\'m in a div';
div.appendChild(head1);

const newPara = document.createElement('p');
newPara.textContent = 'ME TOO!';
div.appendChild(newPara);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});












