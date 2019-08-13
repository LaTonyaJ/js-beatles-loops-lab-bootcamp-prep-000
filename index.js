// add solution here
var mus = []
var inst = []

function theBeatlesPlay(mus, inst){
  var band = []
  for(let i = 0; i < mus; i++){
    band.push(mus[i] +'plays'+ inst[i])
  }
  return band
}