var args = process.argv.slice(2);
var num = args[0];
array = [];
var string = "";

function obfuscate(){
  for (var i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      array.push(4);
    } else if(num[i] === 'e'){
      array.push(3);
    } else if(num[i] === 'o'){
      array.push(0);
    } else if (num[i] === "l"){
      array.push(1);
    } else{
      array.push(num[i]);
    }
  }

  for (var j = 0; j < array.length; j++){

    string += array[j];
  }
}
console.log(obfuscate);
