import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt','utf-8').then(rs =>{console.log(rs)})
thenFs.readFile('./files/2.txt','utf-8').then(rs =>{console.log(rs)})
thenFs.readFile('./files/3.txt','utf-8').then(rs =>{console.log(rs)})

