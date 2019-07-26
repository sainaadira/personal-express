var form = document.getElementById('form')
var trash = document.getElementById('trash')

// ***************************************
//       buttons for colours
// **************************************
const yellowElement = document.getElementById('yellow')
const greyElement=document.getElementById('grey')
const blueElement= document.getElementById('blue')
const redElement= document.getElementById('red')


let submit = document.querySelector('button')
submit.addEventListener('submit', function(e) {
  let post = document.getElementById('inputValue').value;
  // e stands for events// queryselector get first element on html with the parameter that's passed into
  e.preventDefault() // keeps you on the same page w/o refreshing
})


// **************************************************
//   functions to add listeners to the 4 mood buttons
// **************************************************

yellowElement.addEventListener('click', function() {
  const msg = yellowElement.parentNode.childNodes[7].childNodes[3].innerText
  // console.log('chain', yellowElement.parentNode.childNodes[5].elements.inputValue);
  // console.log('sending the mood',msg)
  fetch('yellow', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'mood':'f1c40f',
        'msg': msg

      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
});


greyElement.addEventListener('click', function() {

  const msg = greyElement.parentNode.childNodes[7].childNodes[3].innerText
  // console.log('chain', yellowElement.parentNode.childNodes[5].elements.inputValue);
  console.log('sending the mood',msg)
  fetch('grey', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'mood':'515A5A',
        'msg': msg

      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
});


blueElement.addEventListener('click', function() {

  const msg = blueElement.parentNode.childNodes[7].childNodes[3].innerText
  // console.log('chain', yellowElement.parentNode.childNodes[5].elements.inputValue);
  console.log('sending the mood',msg)
  fetch('blue', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'mood':'154360',
        'msg': msg

      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
});


redElement.addEventListener('click', function() {

  const msg = redElement.parentNode.childNodes[7].childNodes[3].innerText
  // console.log('chain', yellowElement.parentNode.childNodes[5].elements.inputValue);
  console.log('sending the mood',msg)
  fetch('red', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'mood':'A93226',
        'msg': msg

      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
});

// **************************************************
//   end of mood button events
// **************************************************

// this  event listener is to delete
document.getElementById('trash').addEventListener('click', function() {
  const msg = this.parentNode.childNodes[3].innerText
  // console.log(msg)
  fetch('messages', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'msg': msg
    })
  }).then(function(response) {
    window.location.reload()
  })
});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.querySelector('.today-date').innerHTML = today
// sets date to today's date
