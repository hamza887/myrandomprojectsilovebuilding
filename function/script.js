

  class rectangle{
      constructor(height, width,newvalue){
          this.height=height;
          this.width=width;
          this.newvalue=newvalue;
      }
      get area(){
          return this.calcArea();
      }
      calcArea(){
          return this.height*this.width; 
      }
      output(){
          console.log(`the new rectangle value is `+this.calcArea())
      }
  }
  const rec= new rectangle(10,10,10);

   rec.output();

   