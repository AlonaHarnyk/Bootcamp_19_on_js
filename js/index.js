// const firstDiv = document.querySelector('div')
// console.log(firstDiv)
// const secondDiv = document.querySelector('.root')
// console.log(secondDiv)
// const thirdDiv = document.querySelector('#root')
// console.log(thirdDiv)
// const thirdDiv2 = document.getElementById('root')
// console.log(thirdDiv2)

// const divs = document.querySelectorAll('div')
// console.log(divs)

// // divs.forEach(elem => elem.textContent = 'superdiv')

// const a = document.querySelector('.root')
// const res = a.classList.contains('root')
// console.log(res)
// if (res) {
//     a.classList.remove('root')
// }

// a.classList.add('qwerty')

// firstDiv.style.width = '400px'
// firstDiv.style.height = '400px'
// firstDiv.style.backgroundColor = 'red'

// const img = document.querySelector('img')

// const paragraph = document.querySelector('.text')
// console.log(paragraph)

// const item1 = document.querySelector('.item1')
// console.log(item1)

// const paragraph = item1.querySelector('.text')
// console.log(paragraph)

// const title = document.createElement('h1')
// const title2 = document.createElement('h1')
// const span = document.createElement('span')
// title.textContent = 'Hello!'
// span.textContent = 'span'
// title.classList.add('title')
// console.log(title)

// firstDiv.append(title, span)
// secondDiv.append(title2)
// title2.remove()

// console.log(firstDiv.innerHTML)
// firstDiv.innerHTML = '<h2 class="second">Test!</h2>'
// // const secondTitle = firstDiv.querySelector('h2').classList.add('second')
// firstDiv.innerHTML = '<p>Text</p>'

// const list = document.querySelector('ul')
// list.innerHTML = ''

// const section = document.querySelector('section')
// section.insertAdjacentHTML('beforeend', '<p>Text</p>')

// const btn = document.querySelector('button')
// btn.addEventListener('click', a)

// function a(a, b = 1) {
//     console.log(a)
//     console.log(b)
// }

// const div = document.querySelector('div')
// div.addEventListener('click', logger)

// function logger() {
//     console.log('Interactive div')
// }

// const btn = document.querySelector('button')

// btn.addEventListener('click', a)

// function a() {
//     console.log(this)
// }

// const form = document.querySelector('form')
// form.addEventListener('submit', handler)

// function handler(e) {
//     e.preventDefault()
//     console.log(123)
// }

// const link = document.querySelector('a')
// link.addEventListener('click', block)

// function block(event) {
//     event.preventDefault()

// }

// window.addEventListener('keydown', (event) => {
//     console.log(event)
//     if (event.key === 'o') {
//         console.log('o')
//     }
// })

// const a = document.querySelector('.test')
// input.addEventListener('change', (event) => {
//     console.log(event)
//     // console.log(event.target)
//     console.log(event.target.value)
// })
// input.addEventListener('blur', (event) => {
//     // console.log(event)
//     // console.log(event.target)
//     console.log('qwerty')
// })

// a.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })

// const form = document.querySelector('form')
// form.addEventListener('submit', handler)

// function handler(e) {
//     e.preventDefault()
//     console.log(e)
// }

const list = document.querySelector(".js-gallery");
const modalImg = document.querySelector(".lightbox__image");
const modal = document.querySelector(".lightbox");
const button = document.querySelector(".lightbox__button");

list.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const bigImg = event.target.dataset.source;
  const alt = event.target.alt;
  modalImg.src = bigImg;
  modalImg.alt = alt;
  modal.classList.add("is-open");
  window.addEventListener("keydown", closeModalEsc);
}

button.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (!event.target.classList.contains("lightbox__image")) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("is-open");
  modalImg.src = "";
  modalImg.alt = "";
  window.removeEventListener("keydown", closeModalEsc);
}

function closeModalEsc(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
