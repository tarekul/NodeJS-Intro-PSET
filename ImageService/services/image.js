const fs = require('fs')
const copyJPGTo = (logo, newFolder, newName) => {
    fs.readFile(`./${logo}`, (err, data) => {
        if (fs.exists(`./${newFolder}`)) {
            fs.writeFile(`./${newFolder}/${newName}.jpg`, data, (err) => {
                if (err) throw err;
            })
        } else {
            fs.mkdir(newFolder, (err) => {
                fs.writeFile(`./${newFolder}/${newName}.jpg`, data, (err) => {
                    if (err) throw err;
                })
            })
        }

    })
}

module.exports = {
    copyJPGTo
}