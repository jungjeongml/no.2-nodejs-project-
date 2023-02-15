import request from '/js/lib/request.js'

console.log(request)

const idFrm = document.querySelector('#idbox')
const pwFrm = document.querySelector('#pwbox')
const nameFrm = document.querySelector('#nickbox')

idFrm.addEventListener('focusout', async (e)=>{
  const errorBox = e.target.parentNode.querySelector('.errorBox')
  const checkBox = e.target.parentNode.querySelector('.checkBox')

  const response = await request.post('/users/joinId/', 
    e.target.value
  )
  if(response.data === 'impossible') {
    checkBox.style.display = ''
  } else {
    checkBox.style.display = 'none'
  }
  // const response = await request.get('/users/join')
  // console.log(response)
  // const [{userid:userId}] = response.data.filter(v => v.userid === e.target.value)
  // console.log(userId)
  // const usersId = response.data.map(v => v.userid)

  if(e.target.value.length === 0) {
    errorBox.style.display = ''
  } else {
    errorBox.style.display = 'none'
  }

  // for(let i = 0; i<usersId.length; i++){
  //   if(e.target.value === usersId[i]){
  //     checkBox.style.display =''
  //   } else {
  //     checkBox.style.display = 'none'
  //   }
  // }

})

pwFrm.addEventListener('focusout', (e)=>{
  console.log(e.target)
  const errorBox = e.target.parentNode.querySelector('.errorBox')
  if(e.target.value.length === 0){
    errorBox.style.display = ''
  } else {
    errorBox.style.display = 'none'
  }
})

nameFrm.addEventListener('focusout', async (e)=>{
  const errorBox = e.target.parentNode.querySelector('.errorBox')
  const checkBox = e.target.parentNode.querySelector('.checkBox')
  const response = await request.post('/users/joinNk/', e.target.value)
  console.log(response)

  if(response.data === 'impossible'){
    checkBox.style.display = ''
  } else {
    checkBox.style.display = 'none'
  }

  if(e.target.value.length === 0){
    errorBox.style.display = ''
  } else {
    errorBox.style.display = 'none'
  }
})


