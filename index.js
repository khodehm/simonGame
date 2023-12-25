const Color = ["blue", "green", "yellow", "red"];
let gamePattern = [];
let userClickedPattern =[];
let started = false;
let level=0
$(document).keypress( function () {
  if (!started) {
    $('#level-title').text('Level  '+level);
    randomSeq();
    started=true;
  }
});
    $(document).click(function (){  if (!started) {
  $('#level-title').text('Level  '+level);
  randomSeq();
  started=true;}});
$('.btn').on('click',function (){
  let userChosenColor=$(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  buttonAnimate(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
})
function checkAnswer (current){
  if (gamePattern[current]===userClickedPattern[current]){
    if (userClickedPattern.length === gamePattern.length){
     setTimeout(function (){
       randomSeq();
     },1000)
    }
  }else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').text('GAME OVER  press any key to restart');
    setTimeout(function (){
      $('body').removeClass('game-over');
    },300)
    startOver();
  }
}
function randomSeq() {
  /*gnerating random sequence\*/
  userClickedPattern=[];
  level++;
  $('#level-title').text('Level   '+level);
  let randomNumber = Math.floor(Math.random() * 4);
  let chosenColor =Color[randomNumber];
  gamePattern.push(chosenColor);
  $('#'+chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
  console.log(gamePattern);
}
function  buttonAnimate (prop){
  $('#'+prop).addClass('pressed');
  setTimeout(function (){
    $('#'+prop).removeClass('pressed');
  },100);
}
function  playSound (name){
  let audio =new Audio('sounds/'+ name + '.mp3');
  audio.play();
}
function startOver (){
  gamePattern=[];
  level =0;
  started=false;
}