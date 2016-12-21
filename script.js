

$(function(){
  // Globals
  console.log(stages);

  var $button = $('#start'),
      $title = $('#title'),
      $scenarios = $('#scenarios'),
      $points = $('#points');

  var stage = 0,
      points = 0,
      $question = $('#question'),
      $answer1 = $('#a1'),
      $answer2 = $('#a2'),
      $answer3 = $('#a3');


  $button.click(function(){
    $title.hide();
    insertStageData();
  });

  // setTimeout(function(){
  //   $title.hide();
  // },0)
  // setTimeout(function(){
  //   $scenarios.hide();
  // },500)

  // click handlers

  $answer1.click(function(){
    points += stages[stage].answers[0].point
    console.log(points);
    checkStage();

  });

  $answer2.click(function(){
    points += stages[stage].answers[1].point
    console.log(points);
    checkStage();


  })

  $answer3.click(function(){
    points += stages[stage].answers[2].point
    console.log(points);
    checkStage();


  });

  function insertStageData(){

    $scenarios.css("background","url(" + stages[stage].image + ")");
      $scenarios.css("background-size","cover");

    $question.text(stages[stage].question)

    $answer1.text("A: " + stages[stage].answers[0].string);
    $answer2.text("B: " + stages[stage].answers[1].string);
    $answer3.text("C: " + stages[stage].answers[2].string);
  }

  function checkStage(){
    if(stage <= 2){
      stage += 1;
      insertStageData();
    }
    else{
      $scenarios.hide();
      $points.text(points);
      console.log("Total:" +points);
    }
  }

});
