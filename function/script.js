// //document.write('hwllo world');


//     const printsum=()=>{
//          console.log(10+10);
//     }

//     printsum();

//     const printss=()=>{
//         let count=1;
//         let x='#';
//         for (let i = 1; i <5; i++) {
//             console.log(x.repeat(count));
//             count+=1;
            
//         }
//     }
//     printss();

//     // function generatePyramid() {
//     //  //   var totalNumberofRows = 5,
//     //       var  arr;
//     //     for (var i = 1; i <= 5; i++) {
//     //         arr = [];
//     //         for (var j = 1; j <= i; j++) {
//     //             arr.push(j);            
//     //         }
//     //         console.log(arr.join(" ") + "\n");
//     //     }
//     // }
//     // generatePyramid();


//     const generatstuff=()=>{
//         let arrr='#';
//         for (let i = 1; i <=5; i++) {
//             for (let j = 0; j <=i; j++) {
//                 arrr.push(j);
                
//             }
//             console.log(arrr)
            
//         }
//     }
//    generatstuff();


const checkinput=(input)=>{
    if(input.length>10){
        console.log("hello i think this is greater then 10");
    }else{
        console.log("you are certainly getting an error");
    }
}
   checkinput('helliidhsiddf')