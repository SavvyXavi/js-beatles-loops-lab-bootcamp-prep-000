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
  var emptyArr = [];
  while (i < facts.length) {
  emptyArr.push (facts[i] + "!!!");
  i++;
  }
  return emptyArr;
}

function iLoveTheBeatles(17){
  var emptyArr2 = [];
  var i = 0;
  do {
    emptyArr2.push("I love the Beatles!");
    i++;
  } while(i < 17);

  return emptyArr2;
}
