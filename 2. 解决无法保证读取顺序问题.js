import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt','utf-8')
    .then(rs1 =>{
        console.log(rs1)
        return thenFs.readFile('./files/2.txt','utf-8')
    })
    .then(rs2 =>{
        console.log(rs2)
        return thenFs.readFile('./files/3.txt','utf-8')
    })
    .then(rs3 =>{
        console.log(rs3)
    })