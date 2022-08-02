//this is where you put the code that reaches out to the server to send information back and forth
//info can travel back and forth using fetches.

const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

//fetch


update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
    
    
      })
    })
    .then(res=> {
        if(res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
  }) 

  deleteButton.addEventListener('click', _ =>{
    fetch('/quotes', {
        method:'delete',
        headers: { 'Content-Type': 'aplication/json' },
        body:JSON.stringify({
            name: 'Darth Vadar'
        })
    })
    .then(res =>{
        if(res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
          messageDiv.textContent = 'No Darth Vadar quote to delete'
        } else {
          window.location.reload(true)
        }
      })
        
    })