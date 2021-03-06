var metronome = (function(){
  var sig = 0;

var animation = function(speed, direction){
  $('.needle-con').css({ 'transform':'rotate('+direction+'20deg)', 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-left").css({"margin-left": direction+"=27%", 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-big").css({"margin-left": direction+"=65%", 'transition':'all ' +(speed)+'ms ease-in-out'});

  signature();
};

var time = function(bpm){
  return (60/bpm)*1000;
};

var signature = function(){
  var bass = new Audio("images/kick_01.mp3");
  var pipe = new Audio("images/metal_pipe.mp3");
  var sigVal = $('.sig-btn option:selected').text();

  var fourFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 3){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var threeFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 2){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var twoFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 1){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var fiveFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 4){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var sixFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 5){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var sevenFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 6){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var fiveEight = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 4){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var sixEight = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 5){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var sevenEight = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 6){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

    if (sigVal == "4/4"){
      return fourFour();
    }else if (sigVal == "3/4"){
      return threeFour();
    }else if (sigVal == "2/4"){
      return twoFour();
    } else if (sigVal == "5/4"){
      return fiveFour();
    } else if(sigVal == '7/4'){
      return sevenFour();
    } else if (sigVal == '5/8'){
      return fiveEight();
    } else if (sigVal == '6/8'){
      return sixEight();
    } else {
      return sevenEight();
    }

};

var slider = function(){
  $( "#slider-range-min" ).slider({
    range: "min",
    value: 1,
    min: 1,
    max: 225,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
      $('input').trigger('change');
    }
  });
  $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
};

var bpmDelay = function(){
  var turnedOn = null;
  var direction = "+";

  $( "input[type='text']" ).change(function() {
    bpm = 0;
    var inputValue = $(this).val();
    bpm = parseInt(inputValue);
    var speed = time(bpm);
    var sigVal = $('.sig-btn option:selected').text();
    if (sigVal == '5/8' || sigVal == '6/8'|| sigVal == '7/8'){
      speed = speed/2;
    }
    window.clearInterval(turnedOn);
    turnedOn = window.setInterval(function(){
      animation(speed, direction);
      if (direction == "+"){
        direction = "-";
      }else{
        direction = "+";
      }
    },speed);
  });
};

var init = function(){
  slider();
  bpmDelay();
};

  return{
    init: init,
  };

})();
