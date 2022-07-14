
// Criacao da promessa
const promessa = new Promise((resolve, reject) => {

    const nome = "Matheus"

    if (nome === "Matheus"){
        resolve("Usuario Matheus encontrado!")
    } else{
        reject("O usuario nao foi encontrado!")
    }
})

promessa.then((data) =>{
    console.log(data)
})



const promessa2 = new Promise((resolve, reject) => {

    const nome = "Matheus"

    if (nome === "Matheus"){
        resolve("Usuario Matheus encontrado!")
    } else{
        reject("O usuario nao foi encontrado!")
    }
})

promessa2.then((data) =>{
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Esse retornam primeiro !! Sao assincronas !

const promessa3 = new Promise((resolve, reject) => {

    const nome = "Joao"

    if (nome === "Matheus"){
        resolve("Usuario Matheus encontrado!")
    } else{
        reject("O usuario nao foi encontrado!")
    }
})

promessa3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log("Aconteceu um erro: " + err)
})


//Resolver varias promessas

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1, ok! Timeout')
    }, 2000)
})


const p2 = new Promise((resolve, reject) => {
    resolve('P2, ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3, ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})




// Metodo Race!

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1, ok! Timeout')
    }, 2000)
})


const p5 = new Promise((resolve, reject) => {
    resolve('P2, ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P3, ok!')
})

const resolveAllRace = Promise.race([p1,p2,p3]).then((data) => {
    console.log(data)
})
