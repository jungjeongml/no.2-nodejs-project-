import request from '/js/lib/request.js'



const idFrm = document.querySelector('#idbox')
const pwFrm = document.querySelector('#pwbox')
const nameFrm = document.querySelector('#nickbox')
const joinFrm = document.querySelector('#joinBtn')
const inputFrm = document.querySelector('#inputFrm')

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

// inputFrm.addEventListener('submit', async (e)=>{
//   try{
//     e.preventDefault
//     const {userid, userpw} = e.target
//     console.log(userid, userpw)
//     console.log(userid.value, userpw.value)
//   } catch (e){
//     throw new Error(e)
//   }
// })


joinFrm.addEventListener('click', async (e)=>{
  e.preventDefault
  const responseId = await request.post('/users/joinId', idFrm.value)
  const responseNk = await request.post('/users/joinNk', nameFrm.value)
  console.log(responseId)
  console.log(responseNk)

  if(responseId.data === 'impossible'){
    alert('id is already exist')
    idFrm.focus()
  } else if (responseNk.data === 'impossible'){
    alert('nick is already exist')
    nameFrm.focus()
  }
})

