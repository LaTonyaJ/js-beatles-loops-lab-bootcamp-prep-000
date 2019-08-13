// add solution here
//var mus = []
//var inst = []
//var band = []
function theBeatlesPlay(musicians, instruments){
  const band = []
  for(let i = 0; i < musicians; i++){
    band.push(musicians[i] +' plays '+ instruments[i])
  }
  return [band]
}