#!/usr/bin/env node
var words = process.argv.slice(2);
var checker = "halfnorsemix";
var help = require('./lib/help');

if (words[0] === "help") {
  help();
}

words.forEach(function(word) {
  word.split("").forEach(function(letter) {
    printline(letter);
  })
})

function printline(char) {
  var article = checker.indexOf(char.toLowerCase()) !== -1 ? "an" : "a";
  process.stdout.write("Give me " + article + " " + char.toUpperCase() + "!\n");
}
