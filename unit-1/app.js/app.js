const plusBtn = document.getElementById('plus')
const input1 =document.getElementById('math-input1')
const input2 = document.getElementById('math-input2')
const mathResult = document.getElementById('math-result')
const minusBtn = document.getElementById('minus')
const timesBtn = document.getElementById('times')
const dividedBtn = document.getElementById('divided')

plusBtn.addEventListener('click', () => {
  const sum =  parseInt(input1.value) + parseInt(input2.value)
  mathResult.textContent = sum
})

minusBtn.addEventListener('click', () => {
  const sum = parseInt(input1.value) - parseInt(input2.value)
  mathResult.textContent = sum
})

timesBtn.addEventListener('click', () => {
  const sum = parseInt(input1.value) * parseInt(input2.value)
  mathResult.textContent = sum
})

dividedBtn.addEventListener('click', () => {
  const sum = parseInt(input1.value) / parseInt(input2.value)
  mathResult.textContent = sum
})