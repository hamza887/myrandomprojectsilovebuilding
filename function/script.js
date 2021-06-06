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



    // const user={
    //    fullname:"jjames shdfd",
    //    favfood: 'rice pudding',
    //    sayname: function(){
    //        console.log(`my name is ${this.fullname}`)
    //    },
    //    sayhello: function(){
    //        console.log(
    //            `hi my name is ${this.fullname} and my ${this.favfood}`
    //        )
    //    }
    // }
    // user.sayname();
    // user.sayhello();

    //   const test={
    //       prop:42,
    //       fun : function(){
    //           return this.prop;
    //       }
    //   }

    //   console.log(test.fun());

    //   const user={
    //       userName: 'hamza ',
    //       passWord: 'hamza123',
    //       isSignedIn: false,
    //       signIn: function(pwd){
    //           if(pwd===this.passWord){
    //               this.isSignedIn=true;
    //               this.greetUser();
    //           }
    //       },
    //       SignOut: function(){
    //           this.isSignedIn=false
    //       },
    //       greetUser: function(){
    //           console.log(
    //           `Welcome back ${this.userName}`
    //           )
    //       }

    //   }

    //   user.signIn('hamza123');
    //   user.SignOut();

      const newuser={
          username: "hamza",
          password: "hamza123",
         
          login: function(pwd){
             if(typeof(this.pwd)!=="string"){
                return console.log(`hi welcome back ${pwd}`);
             }else {
                  return console.log('this is not string')
             }
          }
      }
      newuser.login('helefjl');

