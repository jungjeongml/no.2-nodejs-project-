import request from '/js/lib/request.js'


const frm = document.querySelector('#profile')
const input = document.querySelector('#input')
const submitBtn = document.querySelector('#submit_btn')

frm.addEventListener('submit', async (e)=>{
  e.preventDefault()

  // const [header, payload, signture] = document.cookie.split(".")
  const body = new FormData(e.target)
  console.log(body)

  const response = await request.post('/users/profile', body, {
    headers: {
      ['Content-type']: 'multipart/form-data'
    }
  })
  console.log(response.data)
  const {filePath} = response.data
  console.log(filePath)
  location.href = "/myprofile?filepath=" + filePath

})