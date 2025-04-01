let randomNum; 

//main declaretion
const button = document.querySelector('#btn');
const nextBtn = document.querySelector('#next');
const endBtn = document.querySelector('#end');
const tagName = document.querySelector('#tagName');
//select declaretion
const select1  = document.querySelector('#select1');
const select2  = document.querySelector('#select2');
//main items declaretion
let mainSection = document.querySelector('#mainSection');
let secondSection = document.querySelector('#secondSection');
let finalScore = document.querySelector('#crntScore');
let crntScore = 0;
let Question = document.querySelector('#qst');
let qstNo = document.querySelector('#qstNo');
let crntQuestion = 10;
//List element decleration
    let lst1 =document.querySelector('#li1');
    let lst2 =document.querySelector('#li2');
    let lst3 =document.querySelector('#li3');
    let lst4 =document.querySelector('#li4');
//list message of 3, 4;
let lit1 = document.querySelector("#lit1");
let lit2 = document.querySelector("#lit2");
let lit3 = document.querySelector('#lit3');
let lit4 = document.querySelector('#lit4');
//list image declaretion
    let l1_img = document.querySelector("#l1_img")
    let l2_img = document.querySelector("#l2_img")
    let l3_img = document.querySelector("#l3_img")
    let l4_img = document.querySelector("#l4_img")
//Boolean of each list
let list1 =false;
let list2 =false;
let list3 =false;
let list4 =false;
// cheaked image update  
   l1_img.addEventListener('click',function(e){
    list1 = true;
      addImage(l1_img); 
      removeImg(l2_img);
      removeImg(l3_img);
      removeImg(l4_img);
      
   });
   l2_img.addEventListener('click',function(e){
    list2 =true; 
     addImage(l2_img); 
     removeImg(l1_img);   
     removeImg(l3_img);   
     removeImg(l4_img); 
      
   });
   l3_img.addEventListener('click',function(e){
    list3= true; 
     addImage(l3_img);  
     removeImg(l1_img);  
     removeImg(l2_img);  
     removeImg(l4_img); 
     
   });
   l4_img.addEventListener('click',function(e){
    list4 = true;
     addImage(l4_img); 
     removeImg(l1_img);   
     removeImg(l2_img);   
     removeImg(l3_img);   
   
   });

// https://opentdb.com/api.php?amount=10&category=18
// https://opentdb.com/api.php?amount=10

//main button
button.addEventListener('click',function(e){
    // mainSection.innerHTML= "";
     randomNum =  parseInt(Math.random()* 4 + 1) ;
     mainSection.style.display = "none";
     secondSection.style.display = "block"
     tagName.style.display = "none";
     // computer and hard
   displayMsg();
   qstNo.innerHTML ="";
    qstNo.innerHTML =`: ${crntQuestion}`;
  
})
//Next Button
nextBtn.addEventListener('click',function(){
  randomNum = parseInt(Math.random()* 4 + 1) ;
    displayMsg();
    removeImg(l1_img);
    removeImg(l2_img);
    removeImg(l3_img);
    removeImg(l4_img);
    // console.log(randomNum)
    lit1.style.backgroundColor = "";
    lit2.style.backgroundColor = "";
    lit3.style.backgroundColor = "";
    lit4.style.backgroundColor = "";
    crntQuestion--;
    qstNo.innerHTML ="";
    qstNo.innerHTML =`: ${crntQuestion}`;
   if(crntQuestion == 0){
    exitFcnt();
   }

   // false every to remove multiple clicks
   list1 = false;
   list2 = false;
   list3 = false;
   list4 = false;

})



//End button
endBtn.addEventListener('click' , function(){
    exitFcnt();
})

let qtype = select2;
//display function
let responseOne;
function displayMsg(){
    if(select1.value === 'computer'){
      responseOne =`https://opentdb.com/api.php?amount=10&category=18&difficulty=${qtype.value}`;
      // console.log(responseOne)
    }else if(select1.value === 'Maths'){
       responseOne = `https://opentdb.com/api.php?amount=10&category=19&difficulty=${qtype.value}`;
    }else if(select1.value === 'Books'){
      responseOne = `https://opentdb.com/api.php?amount=10&category=10&difficulty=${qtype.value}`;
    }else if(select1.value === 'Sports'){
      responseOne = `https://opentdb.com/api.php?amount=10&category=21&difficulty=${qtype.value}`;
    }
    let responseCS = fetch(responseOne)
    .then((data) => {
          return data.json();
    })
    .then((info) =>{
      console.log(info)
      let qstn;
      for(let i = 0; i<10; i++){
       //value hard and boolean
       if(info.results[i].type == 'boolean'){
        randomNum =  parseInt(Math.random()* 2 + 1) ;
           qstn = info.results[i].question; 
           Question.innerHTML = '';
           Question.innerHTML = qstn;
           lit3.style.display = "none";
           lit4.style.display = "none";
           if(randomNum == 1){
           lst1.innerHTML = '';
           lst1.innerHTML = info.results[i].correct_answer;
           lst2.innerHTML = '';
           lst2.innerHTML = info.results[i].incorrect_answers;
           break;
           }else{
           lst2.innerHTML = '';
           lst2.innerHTML = info.results[i].correct_answer;
           lst1.innerHTML = '';
           lst1.innerHTML = info.results[i].incorrect_answers;
           break;
           }
       }
       //value hard and multiple
       else if( info.results[i].type == 'multiple'){
           qstn = info.results[i].question; 
           Question.innerHTML = '';
           Question.innerHTML = qstn;
           if(randomNum == 1){
               lit3.style.display = "flex";
               lit4.style.display = "flex";

               lst1.innerHTML ='';
               lst1.innerHTML =info.results[i].correct_answer;
               lst2.innerHTML = '';
               lst2.innerHTML =info.results[i].incorrect_answers[0] ;
               lst3.innerHTML = '';
               lst3.innerHTML = info.results[i].incorrect_answers[1];
               lst4.innerHTML = '';
               lst4.innerHTML = info.results[i].incorrect_answers[2];
               
           }
           else if(randomNum == 2){
               lit3.style.display = "flex";
               lit4.style.display = "flex";

               lst2.innerHTML ='';
               lst2.innerHTML =info.results[i].correct_answer;
               lst1.innerHTML = '';
               lst1.innerHTML =info.results[i].incorrect_answers[0] ;
               lst3.innerHTML = '';
               lst3.innerHTML = info.results[i].incorrect_answers[1];
               lst4.innerHTML = '';
               lst4.innerHTML = info.results[i].incorrect_answers[2];
           }
           else if(randomNum == 3){
               lit3.style.display = "flex";
               lit4.style.display = "flex";

               lst3.innerHTML ='';
               lst3.innerHTML =info.results[i].correct_answer;
               lst1.innerHTML = '';
               lst1.innerHTML =info.results[i].incorrect_answers[0] ;
               lst2.innerHTML = '';
               lst2.innerHTML = info.results[i].incorrect_answers[1];
               lst4.innerHTML = '';
               lst4.innerHTML = info.results[i].incorrect_answers[2];
           }
           if(randomNum == 4){
            lit3.style.display = "flex";
            lit4.style.display = "flex";
               lst4.innerHTML ='';
               lst4.innerHTML =info.results[i].correct_answer;
               lst1.innerHTML = '';
               lst1.innerHTML =info.results[i].incorrect_answers[0] ;
               lst2.innerHTML = '';
               lst2.innerHTML = info.results[i].incorrect_answers[1];
               lst3.innerHTML = '';
               lst3.innerHTML = info.results[i].incorrect_answers[2];
           }
       }
   
      }
    }).catch((error)=>{
       alert(error);
    })
   
  }

  // exit function
  function exitFcnt(){
    mainSection.style.display = "block";
     secondSection.style.display = "none";
     tagName.style.display = "block";
     crntScore = 0;
     finalScore.innerHTML = "";
     finalScore.innerHTML = `: ${crntScore}`;

     crntQuestion = 10;
    qstNo.innerHTML ="";
    qstNo.innerHTML =`: ${crntQuestion}`;

     lit1.style.backgroundColor = ""; 
     lit2.style.backgroundColor = ""; 
     lit3.style.backgroundColor = ""; 
     lit4.style.backgroundColor = ""; 
     l1_img.src="hgh.png";
     l2_img.src="hgh.png";
     l3_img.src="hgh.png";
     l4_img.src="hgh.png";

  }
  //display image
   function addImage(image ){
     image.src="un.png";
     if(randomNum == 1 && list1 == true){
      lit1.style.backgroundColor = "#00FF00"; 
      lit2.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      crntScore++;
      finalScore.innerHTML= " ";
      finalScore.innerHTML = `: ${crntScore}`;
      // list1 =false;
     }else if(randomNum != 1 && list1 == true){
      lit1.style.backgroundColor = "#FF0000";
      lit2.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      // list1 =false;
     }
     //list 2
     else if(randomNum == 2 && list2 == true){
      lit2.style.backgroundColor = "#00FF00"; 
      lit1.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      crntScore++;
      finalScore.innerHTML= " ";
      finalScore.innerHTML = `: ${crntScore}`;
      // list2 = false;
     }else if(randomNum != 2 && list2 == true){
      lit2.style.backgroundColor = "#FF0000";
      lit1.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      // list2 = false;
     }
     //list3
     else if(randomNum == 3 && list3 == true){
      lit3.style.backgroundColor = "#00FF00"; 
      lit1.style.backgroundColor = ""; 
      lit2.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      crntScore++;
      finalScore.innerHTML= " ";
      finalScore.innerHTML = `: ${crntScore}`;
      // list3 = false;
     }else if(randomNum != 3 && list3 == true){
      lit3.style.backgroundColor = "#FF0000";
      lit1.style.backgroundColor = ""; 
      lit2.style.backgroundColor = ""; 
      lit4.style.backgroundColor = ""; 
      // list3 = false;
     }
     //list4
    else if(randomNum == 4 && list4 == true){
      lit4.style.backgroundColor = "#00FF00"; 
      lit1.style.backgroundColor = ""; 
      lit2.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      crntScore++;
      finalScore.innerHTML= " ";
      finalScore.innerHTML = `: ${crntScore}`;
      // list4 = false;
     }else if(randomNum != 4 && list4 == true){
      lit4.style.backgroundColor = "#FF0000";
      lit1.style.backgroundColor = ""; 
      lit2.style.backgroundColor = ""; 
      lit3.style.backgroundColor = ""; 
      // list4 = false;
     }
    
     
   }
   //remove image
   function removeImg(image){
    image.src="hgh.png";
   }
  
   