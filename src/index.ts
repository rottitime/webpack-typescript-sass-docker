import '@fortawesome/fontawesome-free/js/all.js'
import './scss/main.scss'

document.addEventListener('DOMContentLoaded', function () {
  console.log('this is a sample page')
  document.body.appendChild(component())
})

const component = () => {
  const element = document.createElement('div')
  const header = document.createElement('h1')
  const paragraph = document.createElement('p')
  element.classList.add('welcome-block')

  header.innerHTML = 'Hello Webpack'
  paragraph.innerHTML =
    'Everything has worked fine. Please visit other pages too such as <a href="/example1.html">example1<a> and <a href="/example2.html">example2</a>'

  const icon = document.createElement('i')
  icon.classList.add('fa-solid', 'fa-face-grin-wink')

  element.appendChild(header)
  element.appendChild(paragraph)
  element.appendChild(icon)

  return element
}
