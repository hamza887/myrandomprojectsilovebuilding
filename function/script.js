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


    const person={
        firstname: '',
        lastname: "",
    }
    person.firstname='hamza'
    person.lastname='zaka'
    person['pets']='zozo'
    
    console.log(person.pets)

    const pethave=(petname)=>{
        if(petname.length===true){
            console.log(petname.split(' '))
        }else{
            console.log('i dont')
        }
    }
    pethave(34)

    const car={
        make:"honda",
        year: 1997,
        color: 'red',
        drive: ()=>{
            console.log('vroom vroom')
        },

        gears: ['reverse', 'netrual','1','2'],
        engine:{
            horsepower: 12,
            fast: true
        },
        gps: (location)=>{
           console.log(`Beep Beep , driving to ${location}`)
        }
    }


    car.drive();
    console.log(car.color);
    car.gps('north')
