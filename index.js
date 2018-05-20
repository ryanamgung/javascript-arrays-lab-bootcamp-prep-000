//const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kitten
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten()
{
  kittens.shift()
  return kitten
}

function destructivelyRemoveFirstKitten()
{
  kittens.pop()
  return kitten
}

function appendKitten(name)
{
  var kitten = [...kittens, name]
  return kitten
}

function prependKitten(name)
{
  var kitten = [name, ...kittens]
  return kitten
}

function removeLastKitten()
{
  var kitten = kittens.slice(0, kittens.length - 1)
  return kitten
}

function removeFirstKitten()
{
  var kitten = kittens.slice(0, 0)
  return kitten
}
