export function Toast(text) {
  const box = document.createElement('span')
  box.setAttribute('class','mu-toast')
  box.setAttribute('style','z-index: 20141223;')
  box.innerHTML = text
  document.body.appendChild(box)
  setTimeout(function(){
    document.body.removeChild(box)
  }, 1500)
}
