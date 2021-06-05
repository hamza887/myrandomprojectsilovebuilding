//document.write('hwllo world');


    const printsum=()=>{
         console.log(10+10);
    }

    printsum();

    const printss=()=>{
        let count=1;
        let x='#';
        for (let i = 1; i <5; i++) {
            console.log(x.repeat(count));
            count+=1;
            
        }
    }
    printss();

    function generatePyramid() {
     //   var totalNumberofRows = 5,
            arr;
        for (var i = 1; i <= 5; i++) {
            arr = [];
            for (var j = 1; j <= i; j++) {
                arr.push(j);            
            }
            console.log(arr.join(" ") + "\n");
        }
    }
    generatePyramid();