console.log("Netflix : Cloned by Harshit Lakshakar");

let faq = Array.from(document.querySelectorAll('.faq_box .btn'));
let content = Array.from(document.querySelectorAll('.faq_box .content'));
let i,j;

for(i=0; i<faq.length; i++){
  let x=i;
  faq[x].addEventListener('click', () => {
  if(content[x].classList.contains('active')){
    content[x].classList.remove("active");
  }
  else {
    for(j=0; j<faq.length; j++){
      let y=j;
      content[y].classList.remove('active');
    }
    content[x].classList.add('active');
   }
  });
}