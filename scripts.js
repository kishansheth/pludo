$( "#player1" ).click(function() {
    audioElement = document.getElementById("audio1");
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play();
        $( ".creator_image" ).css("border-color", "white");
        $( "#player1" ).css("border-color", "#0094FF");
    }
    else {
        audioElement.pause();
        $( "#player1" ).css("border-color", "white");
    }
    document.getElementById("audio2").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio4").pause();
    document.getElementById("audio5").pause();
  });
  
  $( "#player2" ).click(function() {
    audioElement = document.getElementById("audio2");
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play();
        $( ".creator_image" ).css("border-color", "white");
        $( "#player2" ).css("border-color", "#0094FF");
    }
    else {
        audioElement.pause();
        $( "#player2" ).css("border-color", "white");
    }
    document.getElementById("audio1").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio4").pause();
    document.getElementById("audio5").pause();
  });
  
  $( "#player3" ).click(function() {
    audioElement = document.getElementById("audio3");
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play();
        $( ".creator_image" ).css("border-color", "white");
        $( "#player3" ).css("border-color", "#0094FF");
    }
    else {
        audioElement.pause();
        $( "#player3" ).css("border-color", "white");
    }
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
    document.getElementById("audio4").pause();
    document.getElementById("audio5").pause();
  });
  
  $( "#player4" ).click(function() {
    audioElement = document.getElementById("audio4");
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play();
        $( ".creator_image" ).css("border-color", "white");
        $( "#player4" ).css("border-color", "#0094FF");
    }
    else {
        audioElement.pause();
        $( "#player4" ).css("border-color", "white");
    }
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio5").pause();
  });
  
  $( "#player5" ).click(function() {
    audioElement = document.getElementById("audio5");
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play();
        $( ".creator_image" ).css("border-color", "white");
        $( "#player5" ).css("border-color", "#0094FF");
    }
    else {
        audioElement.pause();
        $( "#player5" ).css("border-color", "white");
    }
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio4").pause();
  });
  