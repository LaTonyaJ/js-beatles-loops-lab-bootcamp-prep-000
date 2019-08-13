// add solution here
//var mus = []
//var inst = []
//var band = []
function theBeatlesPlay(musicians, instruments){
  for(let i = 0; i < musicians; i++){
    const band = []
    band.push(musicians[i] +' plays '+ instruments[i])
  }
  return [band]
}