

  var stage1 = {

    question:"You walk up to a trash can.",

    answers:[
      {
        string:"Put it in the recycling bin.",
        point:10,
      },
      {
        string:"Drop it on the floor.",
        point:0,
      },
      {
        string:"Put it in the garbage.",
        point:8,
      },
    ],
    image:"Images/Trash.jpg",
  },

  stage2 = {

    question:"You are about to leave and the lights are on.",

    answers:[
      {
        string:"Leave the lights on.",
        point:4,
      },
      {
        string:"Turn the lights off.",
        point:10,
      },
      {
        string:"Pretend they arent on.",
        point:0,
      },
    ],
    image:"Images/light.jpg",
  },

  stage3 = {

    question:"You're washing the dishes and you hear a knock on the door.",

    answers:[
      {
        string:"Leave the water on.",
        point:0
      },
      {
        string:"Turn the water off. ",
        point:10,
      },
      {
        string:"Wash the dishes.",
        point:5,
      },
    ],
    image:"Images/dishes.jpg",
  },

  stage4 = {

    question:"You are eating a sandwich in front of a homeless man",

    answers:[
      {
        string:"Walk past the homeless man",
        point:2,
      },
      {
        string:"Give the man a sandwich",
        point:10,
      },
      {
        string:"Throw your sandwich away",
        point:5,
      },
    ],
    image:"Images/sandwich.jpg",
  },

stages = [stage1,stage2,stage3,stage4];
