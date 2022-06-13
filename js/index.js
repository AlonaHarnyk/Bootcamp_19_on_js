const firstDiv = document.querySelector('div')
console.log(firstDiv)
const secondDiv = document.querySelector('.root')
console.log(secondDiv)
const thirdDiv = document.querySelector('#root')
console.log(thirdDiv)
const thirdDiv2 = document.getElementById('root')
console.log(thirdDiv2)

const divs = document.querySelectorAll('div')
console.log(divs)

// divs.forEach(elem => elem.textContent = 'superdiv')

const a = document.querySelector('.root')
const res = a.classList.contains('root')
console.log(res)
if (res) {
    a.classList.remove('root')
}

a.classList.add('qwerty')

firstDiv.style.width = '400px'
firstDiv.style.height = '400px'
firstDiv.style.backgroundColor = 'red'

const img = document.querySelector('img')

// const paragraph = document.querySelector('.text')
// console.log(paragraph)

// const item1 = document.querySelector('.item1')
// console.log(item1)

// const paragraph = item1.querySelector('.text')
// console.log(paragraph)

const title = document.createElement('h1')
const title2 = document.createElement('h1')
const span = document.createElement('span')
title.textContent = 'Hello!'
span.textContent = 'span'
title.classList.add('title')
console.log(title)

firstDiv.append(title, span)
secondDiv.append(title2)
title2.remove()

console.log(firstDiv.innerHTML)
firstDiv.innerHTML = '<h2 class="second">Test!</h2>'
// const secondTitle = firstDiv.querySelector('h2').classList.add('second')
firstDiv.innerHTML = '<p>Text</p>'

const list = document.querySelector('ul')
list.innerHTML = ''

const section = document.querySelector('section')
section.insertAdjacentHTML('beforeend', '<p>Text</p>')