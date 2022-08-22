// // Code your solutions in this file

// // for (let age=30; age<40; age++){
// //     console.log(`I'm ${age} years old. Happy birthday to me!!!`);
// //     // debugger;
// // }


// // const gifts = ["teddy bear", "drone", "doll"];

// // function wrapGifts(gifts){
// //     for (let i=0; i<gifts.length; i++){
// //         console.log(`Wrapped ${gifts[i]} and added a bow!`)
// //         // debugger;
// //     }
// //     return gifts;
// // }

// // wrapGifts(gifts);

// //  const cardNames=["Guadalupe", "Ollie", "Aki"];

// // function writeCards(cardNames,event){
// //     for(i=0; i<cardNames.length; i++){
// //         console.log(`Thank you, ${cardNames[i]}, for the wonderful ${event} gift!`);
// //     }
// // }
// // writeCards(["Guadalupe", "Ollie", "Aki"],"suprise");


function writeCards(arr, event){

    let arr1=[];
    for(let i=0; i<arr.length; i++){
        arr1.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return arr1;
}
 console.log(writeCards(["Guadalupe", "Ollie", "Aki"],"suprise"));


//  const gifts=["teddybear","drone","doll"];

//  function wrapGifts(gifts){
//     let i=0;
//     while (i<gifts.length){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
//  }

//  wrapGifts(gifts);


//  let countUp =0
//  while(countUp<10){
//     console.log(countUp++);
//  }

//  for (let countUp=0; countUp<10; countUp++){
//     console.log(countUp);
//  }

 function countDown(num1){

    while(num1 >= 0){
        console.log(num1);
        num1--;
    }
 
 }

 countDown(10)