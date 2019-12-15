let dodger = document.getElementById('dodger')

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })

  function moveDodgerRight(){
    //   Why are we still dealing with the left side on this function
      let leftNumbers = dodger.style.left.replace("px", "")
      let left = parseInt(leftNumbers, 10)

      if (left > 0) {
          dodger.style.left = `${left + 1}px`
      }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })

// Why does this not work?:

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft()
//     } else if ( e.key === "ArrowRight") {
//         moveDodgerRight()
//     }
//   })
  















