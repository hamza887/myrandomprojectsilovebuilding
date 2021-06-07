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



//     const user={
//        fullname:"jjames shdfd",
//        favfood: 'rice pudding',
//        sayname: function(){
//            console.log(`my name is ${this.fullname}`)
//        },
//        sayhello: function(){
//            console.log(
//                `hi my name is ${this.fullname} and my ${this.favfood}`
//            )
//        }
//     }
//     user.sayname();
//     user.sayhello();

//       const test={
//           prop:42,
//           fun : function(){
//               return this.prop;
//           }
//       }

//       console.log(test.fun());

//       const user={
//           userName: 'hamza ',
//           passWord: 'hamza123',
//           isSignedIn: false,
//           signIn: function(pwd){
//               if(pwd===this.passWord){
//                   this.isSignedIn=true;
//                   this.greetUser();
//               }
//           },
//           SignOut: function(){
//               this.isSignedIn=false
//           },
//           greetUser: function(){
//               console.log(
//               `Welcome back ${this.userName}`
//               )
//           }

//       }

//       user.signIn('hamza123');
//       user.SignOut();

//       const newuser={
//           username: "hamza",
//           password: "hamza123",
         
//           login: function(pwd){
//              if(typeof(this.pwd)!=="string"){
//                 return console.log(`hi welcome back ${pwd}`);
//              }else {
//                   return console.log('this is not string')
//              }
//           }
//       }
//       newuser.login('helefjl');

//       const sum=(a,b)=>{
//              return a+b;
//       }

//       sum(2,4);

//       const add=(sum,c,d)=>{
//           console.log(sum+c+d);
//       }

//       add(sum+2+2);


//     const words=[
//         'challendges',
//         'make',
//         'yesr',
//         'about ',
//         'hello'
//     ]
//     const print=(elements)=>{
//         console.log(elements);
//     }
   
//     words.forEach(print);


     const items=[
         {name : 'bike', price :100 },
         {name : 'tv  ', price :200 },
         {name : 'album', price :10 },
         {name : 'phone', price :500 },
         {name : 'keyboard', price :25 },
         

     ]

     const filteritems= items.filter((item)=>{
         return item.price<=50;
     })

     console.log(filteritems);

     const mapitems=items.map((item)=>{
         return item.price;
     })
    console.log(mapitems);

    const books=items.find((item)=>{
        return item.name==='album'
    })
    console.log(books)

    items.forEach((items)=>{
        console.log(items.name)
    })
       