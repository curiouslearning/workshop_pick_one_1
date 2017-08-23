# Curious Learning Workshop: Pick One of X

This game was started out of Curious Learning's *Creating Literacy Games with React Native* workshop.

### Goal/Objective

The purpose of this app is to test students' letter knowledge and word recognition skills. Through a series of tests, students will associate letter sounds and pronunciations with printed letters. Students will also associate spoken words and images with written words.

The [product specification brief](https://docs.google.com/document/d/18u6JisjhM-WaohM_qO01H7iVIb3aM0SY2PuAo4IXJyA/edit) contains additional information on objective and implementation details.

![Pick One Demo GIF](https://media.giphy.com/media/l0IyifAb4jysmzQ1G/giphy.gif)

## Getting Started

### Component structure

GameContainer is the overall parent component for this app. Within GameContainer, PickOneContainer controls the set of stimuli. GuidanceContainer controls the GuidanceStimulus, while TargetContainer controls the target and foils (TargetStimulus).

### Setting up data

The game is driven by data contained in a JSON file, which specifies the stimuli that display on the screen.

1. The data file should be saved in the directory /src/data/.
2. The data file should be listed in /src/gameUtil.js (see line 5).
3. The JSON that feeds into the game should have two main pieces:
    - a list of all required stimuli, including stimuli type, and file location (if audio/image), and
    - a list of all levels and trials a student should see, including specification on guidance stimuli, target stimuli, and list of all stimuli to display and position coordinates.
4. See /src/data/pick_one.json for example.

### Setting up image assets

1. Images should be saved in the directory /src/images/.
2. Images should also be listed in /src/gameUtil.js (see line 8).
3. File names should be listed in the game's JSON data file, under the object list, e.g.:
```
{
  "object_list": [
    {
      "object_id" : "cat_pic",
      "stimulus" : "PickOne/src/images/cat.jpg",
      "type" : "image"
    },
    ...
  ],
  ...
}
```

### Setting up audio assets

1. Audio files should be saved in /android/app/src/main/res/raw/.
2. File names should be listed in the game's JSON data file, under the object list, e.g.:
```
{
  "object_list": [
    {
      "object_id" : "c_sound",
      "stimulus" : "c.wav",
      "type" : "audio"
    },
    ...
  ],
  ...
}
```

### Data collection

User responses are tracked using the Curious Learning Data Collection API (see /src/CuriousLearningDataAPI.js). Upon each user response to a set of stimuli, the app calls the reportResponse function and logs data, including level, trial, time stamp, response time, foil list, and response value (see /src/GameContainer.js line 75).

## History

We followed an agile software methodology, in two-week sprints, building features based on user stories and acceptance criteria.

First, we started with defining the app's objectives and how we would implement the app to meet these goals, in addition to creating [wireframes](https://marvelapp.com/1hj36b4):

![Pick One Wireframe GIF](https://media.giphy.com/media/3oKIPpBiJoUXu63D0s/giphy.gif)

The following weeks were focused on an initial implementation of the app. With a first draft, the example JSON data file was incorporated into the app to drive app behavior.

The Curious Learning Data Collection API was integrated to log user responses. Finally, the app was refactored, along with the addition of a README file.

## Attributions and Acknowledgements

Thank you, Curious Learning team! It's been a great workshop - I've learned a ton over the last 11 weeks and your feedback along the way has been invaluable!
