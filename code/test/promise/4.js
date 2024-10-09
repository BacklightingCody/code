// promise
// async和await


async function foo () {
  console.log(await Promise.resolve('foo'))
}

async function bar () {
  console.log(await 'bar')
}

async function baz () {
  console.log('baz')
}

foo()
bar()
baz()