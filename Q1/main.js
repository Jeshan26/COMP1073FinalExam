// JavaScript Document
// 1-there is only one main so query selector only 
let main = document.querySelectorAll('main')[0];
let submitButton = document.querySelector('input[type="submit"]');
// 2- this variab
let input= document.querySelector('input');

// here the spelling of document was not correct so i did it right
let body = document.querySelector('body'); 
 
// Here event clicked was not right  as in  addevent listener its just 'click'
submitButton.addEventListener('click', function(e) { 
  // console.log("clicked");
  let personName = input.value; 
  // console.log(personName);
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 

  // below it was paragraph but the  variabe aboove was para
  main.appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^=');
  // this below  prevent page refresh on submit button
  e.preventDefault(); 
}); 