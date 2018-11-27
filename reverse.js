function reverse(stringIn){
  let stringOut = "";
  for (var j = 0; j < stringIn.length; j++){
    stringOut = stringIn[j] + stringOut;
  }
  return stringOut;
}
var a;
for(var i = 2; i < process.argv.length; i++){
    a = process.argv[i];
    console.log(reverse(a));
}

