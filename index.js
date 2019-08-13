// add solution here

function theBeatlesPlay(musicians, instruments){
  var band = []
  for(let i = 0; i < musicians.length; i++){
    band.push(musicians[i] +' plays '+ instruments[i])
  }
  return band
}

var i = 0

function johnLennonFacts(facts){
  while(i < facts.length){
    facts.push(facts[i] + '!!!')
  }
  return facts
}