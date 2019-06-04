// 'hello world'
// shout: 'HELLO WORLD'
// exclamation: 'HELLO WORLD!'
// html: '<h1>HELLO WORLD!</h1>'

const shout = str => str.toUpperCase()
const exclamation = excl => str => str + excl
const html = tag => str => `<${tag}>${str}</${tag}>`

// (f o g)(x) = f(g(x))
// (f o g o h)(x) = f(g(h(x)))
// compose(f, g)(x)

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

function composition(str) {
  // return html('h1')(exclamation('!')(shout(str)))

  // let result = str
  // result = shout(result)
  // result = exclamation('!')(result)
  // result = html('h1')(result)
  // return result

  const enhance = compose(
    html('h1'),
    exclamation('!'),
    shout,
  )
  return enhance(str)
}

module.exports = { composition }
