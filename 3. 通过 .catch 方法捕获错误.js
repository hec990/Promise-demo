import thenFs from 'then-fs'

thenFs.readFile('./files/11.txt','utf-8')
    .catch(err =>{
        console.log(err.message)
    })
    .then(rs1 =>{
        console.log(rs1) // 输出undefined
        return thenFs.readFile('./files/2.txt','utf-8') // 故意将 2.txt 改为 22.txt（一个不存在的文件）
    })
    .then(rs2 =>{
        console.log(rs2) // 222
        return thenFs.readFile('./files/32.txt','utf-8')
    })
    .catch(err =>{
        console.log(err.message)
    })
    .then(rs3 =>{
        console.log(rs3) // 333
    })
    .catch(err =>{
        console.log(err.message)
    })
    // .catch 放最后，在检测代码报错后，不会继续执行后面的代码，而是直接跳到 catch
    // .catch(err =>{
    //     console.log(err.message)
    // })