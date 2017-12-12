var fixed = false;
var shouldUnfixed = false;
function fixPage5() {
  var footer = document.getElementsByTagName('footer')[0];
  var page = document.getElementsByClassName('content-page')[0];
  
  if ((page.getBoundingClientRect().top < $(window).height()-page.offsetHeight) && !fixed) {
    page.classList.add('fixed');
    console.log("fixed");
    footer.style.marginTop = $(window).height()+'px';
    fixed = true;
  }
  
  console.log((footer.getBoundingClientRect().top < $(window).height()) && fixed);
  
  if(!fixed){
    shouldUnfixed = false;
  }
  if((footer.getBoundingClientRect().top < $(window).height()) && fixed){
    shouldUnfixed = true;
  }
  
  
  if ((footer.getBoundingClientRect().top > $(window).height()) && fixed && shouldUnfixed) {
    footer.style.marginTop = $(window).height()+'px';
    page.classList.remove('fixed');
    console.log("unfixed");
    fixed = false;
  }
}

window.addEventListener('scroll',fixPage5,false);