// add solution here

function theBeatlesPlay(musicians, instruments){
  var band = []
  for(let i = 0; i < musicians; i++){
    band.push(musicians[i] +' plays '+ instruments[i])
  }
  return [band]
}