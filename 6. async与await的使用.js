import thenFs from 'then-fs'

// 按照顺序读取文件 1，2，3的内容
async function getAllFile(){
    const r1 = await thenFs.readFile('./files/1.txt','utf8')
    console.log(r1)
    const r2 = await thenFs.readFile('./files/2.txt','utf8')
    console.log(r2)
    const r3 = await thenFs.readFile('./files/3.txt','utf8')
    console.log(r3)
}

getAllFile()