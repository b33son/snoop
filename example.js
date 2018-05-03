const keylogger = require("./osx-keylogger");
var fs = require("fs");

var wstream = fs.createWriteStream("myOutput.txt");
// shows only the stuff from the keylogger(not stdin) but breaks ctrl+c
// process.stdin.setRawMode(true);

let currentModifiers = "";

keylogger.listen((modifiers, key) => {
  if (modifiers !== currentModifiers) {
    currentModifiers = modifiers;
    //process.stdout.write(`[${modifiers}]`);
  }
  //sdfprocess.stdout.write(key);
  wstream.write(key);
  console.log(key);
}, "swedish.json");

wstream.end();
