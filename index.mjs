import fs from "fs";
import JsZip from 'jszip'
import AdmZip from 'adm-zip'
import path from 'path'

const isFilesCreated = !!fs.readFileSync('./fileFolder/1.txt')

if (!isFilesCreated) {
  console.log('Generating test files')
  for (let i = 0; i < 65530; i++) {
      fs.writeFileSync(`./fileFolder/${i}.txt`, `${i}`);
  }
}

const files = fs.readdirSync('./fileFolder')

console.log('Time cost to compress 65530 files')

console.time('adm-zip')
const admZip = new AdmZip();

for (const file of files) {
  admZip.addFile(file, fs.readFileSync(path.join('./fileFolder', file)))
}
admZip.toBuffer();
console.timeEnd('adm-zip')


console.time('jszip')
const jsZip = new JsZip();

for (const file of files) {
  jsZip.file(file, fs.readFileSync(path.join('./fileFolder', file)))
}
await jsZip.generateAsync({type:"nodebuffer"})
console.timeEnd('jszip')