const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let i in array){
    // console.log(i)
    jogador = `Jogador ${Number(i)+1}: `
    total = Number(array[i][0]+array[i][1]+array[i][2]+array[i][3]+array[i][4])
    console.log(`${jogador}${array[i]}. Total: ${total} gols.`)
}


// for(let i in array){
//     let jogador = `Jogador ${Number(i)+1}: `
//     for (let j of array[i]){
//         jogador += j + ", "
//     }
//     console.log(jogador)
// }