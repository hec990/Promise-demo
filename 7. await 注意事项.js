import thenFs from 'then-fs'

console.log('A')
async function getAllFile(){
    console.log('B')
    // 第一个 await 之前的代码会同步执行，await 之后的代码会异步执行。
    const r1 = await thenFs.readFile('./files/1.txt','utf8')
    const r2 = await thenFs.readFile('./files/2.txt','utf8')
    const r3 = await thenFs.readFile('./files/3.txt','utf8')
    console.log(r1,r2,r3)
    console.log('D')
}

getAllFile()
console.log('C')
