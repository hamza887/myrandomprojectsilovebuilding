
  const hi=(hi)=>{
      return hi
  }


   const hello= document.getElementById('hello');

      hello.innerHTML='hellow how are you';
      hello.style.backgroundColor='red';
      hello.style.color='green';

      const para= document.getElementById('paragrapgh')
      para.innerHTML= `${hi('hello  this is new paragrapgh')}`;
      para.style.color='red';

      const titleid= para.setAttribute('id','hellooo');
      console.log(titleid)

       const aaa=document.getElementById('aa')
         aaa.setAttribute('href','google.com');
         aaa.setAttribute('target','_blank')

        let div=document.getElementById('great');
        console.log(div.dataset)
      
     const mylistitems=document.getElementById('li');

       

   