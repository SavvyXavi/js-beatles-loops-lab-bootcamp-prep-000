// add solution here
function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var emptyArr = []
  while (i < facts.length) {
  facts.push (facts[i] + "!!!");
  i++;
  }
  return facts;
}
