//const app = "I don't do much."
function destructivelyAppendKitten(name)
{
  kitten.push(name)
  return kitten
}

function destructivelyPrependKitten(name)
{
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten()
{
  kitten.shift()
  return kitten
}

function destructivelyRemoveFirstKitten()
{
  kitten.pop()
  return kitten
}

function appendKitten(name)
{
  var kittens = [...kittens, name]
  return kittens
}

function prependKitten(name)()
{
  var kittens = [name, ...kittens]
  return kittens
}

function removeLastKitten()
{
  var kittens = kitten.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten()
{
  var kittens = kitten.slice(0, 0)
  return kittens
}
