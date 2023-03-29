// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll(".like-glyph")
// console.log(heart)
for (const glyph of heart) {
  glyph.addEventListener("click", function(e) {
  mimicServerCall()
  .then(function(serverMessage){
    console.log(serverMessage)
    if(glyph.innerText === EMPTY_HEART){
      glyph.innerText = FULL_HEART
      glyph.className = "activated-heart"
    }
    else{
      glyph.innerText = EMPTY_HEART
      glyph.className = ""
    }
    
  })
  .catch(function(error){
    console.log(error)
    if(error === 'Random server error. Try again.'){
      const modal = document.getElementById("modal")
      modal.className.replace("hidden", "")
      setTimeout(function(){
        modal.className = "hidden"
      }, 5000)
    }
  })
  
  })
}

  
    






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
