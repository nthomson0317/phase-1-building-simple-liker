// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!


//EVENT LISTENER ON LIKE GLYPHS
// window.addEventListener('DOMContentLoaded', (event) => {

  const errorModal = document.querySelector("div#modal")
  errorModal.hidden = true;
  errorModal.className = "hidden"
  
  
  const likeGlyphs = document.querySelectorAll("span.like-glyph")
  for (const likeGlyph of likeGlyphs) {
    likeGlyph.addEventListener ("click", (e) => {
      clickLike(e)
    })
  }
// })

function clickLike(e) {
      mimicServerCall()
        .then ((response) => {
            if (e.target.textContent === '♡'){
              e.target.textContent = '♥';
              e.target.style.color = "red"; }
                else {e.target.textContent ='♡'
              } 
               
        })  
        .catch(() => {})
}



//   console.log('DOM fully loaded and parsed');
// });




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
