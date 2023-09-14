const fs = require("fs")

let opr = process.argv[2];
let filename = process.argv[3];
let data = process.argv[4];
let newname = process.argv[5];
// let dirPath = process.argv[6];

// file create karva
const write = () => {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err
        console.log("file succesfully")
    })
}

// read
const read = () => {
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) throw err
        console.log(`file succesfully \n ${filename} \n ${data}`)
    })
}


// rename

const rename = () => {
    fs.rename(filename, newname, (err) => {
        if (err) throw err
        console.log(`file succesfully \n ${filename} `)
    })

}

// delete

const delet = () => {
    fs.unlink(filename, (err) => {
        if (err) throw err
        console.log(`file succesfully \n ${filename} `)
    })

}

// append
const append = () => {
    fs.appendFile(filename, data, (err) => {
        if (err) throw err
        console.log("file succesfully")
    })
}

// folder
// const mkdir = () => {
//   fs.mkdir(dirPath,(err)=>{
//     if (err) throw err
//            console.log("file succesfully")
// })
// }

// folder
fs.mkdir("poonam", (err) => {
    if (err) throw err
    console.log("file succesfully")
})

if (opr == "write") {
    write();
}
else if (opr == "read") {
    read();
}
else if (opr == "rename") {
    rename();
}
else if (opr == "delet") {
    delet();
}
else if (opr == "append") {
    append();
}
else if (opr == "mkdir") {
    mkdir();
}
else{
    console.log("invalid operation Use'write','read','delet','append','mkdir'");
}
