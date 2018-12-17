const fs = require('fs')

const save = (arr,filename,cb) =>{
    const userData = arr.map(obj => `${obj.name},${obj.age}`) 

    const dataStr = userData.reduce((acc,str) =>{
        const name = str.split(',')[0]
        const age = str.split(',')[1]
        acc +=  `${name},${age}\n`
        return acc
    },'') 

    fs.writeFile(`./${filename}`,dataStr,(err,res) =>{
        cb(err,res)
    })

}

const load = (textfile,cb) =>{
    fs.readFile(textfile,'utf-8',(err,data)=>{
        if(err) throw err
        const userArr = data.split('\n').reduce((acc, element) =>{
            const obj = {}
            obj.name = element.split(',')[0]
            obj.age = element.split(',')[1]
            acc.push(obj)
            return acc
        },[])
        userArr.pop()
        cb(userArr)
    })
}

const add = (name,age,textfile,cb)=>{
    load(textfile,(userArr)=>{
        const obj = []
        obj.name = name;
        obj.age = age
        userArr.push(obj)

        save(userArr,textfile,(err,res) =>{
            cb(err,res);
            
        })
    })
}

module.exports = {
    save,
    load,
    add
}