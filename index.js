#!/usr/bin/env node
 

const program = require('commander');
const fs = require('fs')

program
  .version('1.0.0')
  .usage('[options] <input file> [output file]')
  .parse(process.argv);
 

var file = program.args[0]
var outputFile = program.args[1]
var gcode = fs.readFileSync(file).toString();


// console.log('-- BEGIN ---')
var chunks = gcode.split("\n")

let newChunks = chunks.map(function(chunk, chunkIndex){
  let matches = chunk.match(/^(?:G1\ )?((?:[X|Y]\d+\.?\d+\ )+)(S\d+\.?\d+)/)
  if(matches){
    return [ `M106 ${matches[2].trim()}\n`, `G1 ${matches[1].trim()}\n` ]
  }else{
    return chunk + "\n"
  }
   
})

var finalOutputGCODE = [].concat.apply([], newChunks).join("")

if (outputFile) {
  fs.writeFileSync(outputFile, finalOutputGCODE)
} else {
  console.log(finalOutputGCODE)
}
