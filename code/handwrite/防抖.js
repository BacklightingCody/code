function debounce (fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay)
  }
}

function con (s) {
  console.log(s)
}

let cons = debounce(con, 3000)
console.log(cons(1))
console.log(cons(2))