const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

 let rank = 1
 for(let pais of maioresPaises){
    console.log(`Rank ${rank}: ${pais}`)
     rank++
  }


//  //usando entries
// for(let [i,v] of maioresPaises.entries()){
//    console.log(`Rank ${(i)+1}: ${v}`)
//}