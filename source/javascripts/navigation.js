// debounce function that will wrap our event
function debounce(fn, delay = 15) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

function scrolled() {
  var topNav = document.querySelector('#top-nav');
  if(window.scrollY !== 0) {
    topNav.classList.remove("top-nav-home");
  } else {
    topNav.classList.add("top-nav-home");
  }
}

window.addEventListener('scroll', debounce(scrolled));
