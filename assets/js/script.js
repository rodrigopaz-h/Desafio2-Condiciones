////////////////////////Ejerciocio 1////////////////////////

const imageToggle = document.getElementById('changeborder')

changeborder.addEventListener('click', () => {
  if (changeborder.style.border) {
    changeborder.style.border = ''
  } else {
    changeborder.style.border = '2px solid red'
  }
})

////////////////////////Ejerciocio 2////////////////////////

const stickerInputs = document.querySelectorAll('input')
const calculateButton = document.getElementById('count')
const amount_info = document.getElementById('amount_info')

calculateButton.addEventListener('click', () => {
  let totalStickers = 0
  stickerInputs.forEach(input => {
    const value = parseInt(input.value, 10) || 0
    totalStickers += value
  })

  if (totalStickers <= 10) {
    amount_info.textContent = `Llevas ${totalStickers} stickers`
  } else {
    amount_info.textContent = "Llevas demasiados stickers"
  }
})

////////////////////////Ejerciocio 3////////////////////////



const key1 = document.getElementById('key1')
const key2 = document.getElementById('key2')
const key3 = document.getElementById('key3')
const validation = document.getElementById('validation')
const checker = document.getElementById('checker')

validation.addEventListener('click', () => {
  const password = `${key1.value}${key2.value}${key3.value}`
  if (password === '911') {
    checker.textContent = "Password 1 correcto"
  } else if (password === '714') {
    checker.textContent = "Password 2 correcto"
  } else {
    checker.textContent = "Password incorrecto"
  }
})