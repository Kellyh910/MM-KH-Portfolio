function start() {
    
    console.log("Hello World!!!");
    window.alert("Hey World!");
}


let gallery= ['images/image1.png','images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png', 'images/image8.png', 'images/image9.png', 'images/image10.png', 'images/image11.png', 'images/image13.png'];

let i =0;


function previous(){
  i--;
  if (i < 0) {
    i = 13; // change array of image
  }
  document.getElementById('magazine').src = gallery[i];
}

function next(){
  i++;
  if (i == gallery.lenght) {
    i =0; // change array of image
  
  }
  document.getElementById('magazine').src = gallery[i];
  //get document by id
}




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 2400
});

bar.set(0);
bar.animate(1.5);  // Number from 0.0 to 1.0






//
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


