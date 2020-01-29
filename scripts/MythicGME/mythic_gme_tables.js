import { actionTable1, actionTable2, descriptionTable1, descriptionTable2 } from './event_meaning_tables.js'

const doubles = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const odds_all = [
  [  // index 0 = impossible
    [0, -20, 77], // chaos 1
    [0, 0, 81],   // chaos 2
    [0, 0, 81],   // chaos 3
    [1, 5, 82],   // chaos 4
    [1, 5, 82],   // chaos 5
    [2, 10, 83],  // chaos 6
    [3, 15, 84],  // chaos 7
    [5, 25, 86],  // chaos 8
    [10, 50, 91]  // chaos 9
  ],
  [ // index 1 = no way
    [0, 0, 81],   // chaos 1
    [1, 5, 82],   // chaos 2
    [1, 5, 82],   // chaos 3
    [2, 10, 83],  // chaos 4
    [3, 15, 84],  // chaos 5
    [5, 25, 86],  // chaos 6
    [7, 35, 88],  // chaos 7
    [10, 50, 91], // chaos 8
    [15, 75, 96]  // chaos 9
  ],
  [ // index 2 = very unlikely
    [1, 5, 82],   // chaos 1
    [1, 5, 82],   // chaos 2
    [2, 10, 83],  // chaos 3
    [3, 15, 84],  // chaos 4
    [5, 25, 86],  // chaos 5
    [9, 45, 90],  // chaos 6
    [10, 50, 91], // chaos 7
    [13, 65, 94], // chaos 8
    [16, 85, 97]  // chaos 9
  ],
  [ // index 3 = unlikely
    [1, 5, 82],   // chaos 1
    [2, 10, 83],  // chaos 2
    [3, 15, 84],  // chaos 3
    [4, 20, 85],  // chaos 4
    [7, 35, 88],  // chaos 5
    [10, 50, 91], // chaos 6
    [11, 55, 92], // chaos 7
    [15, 75, 96], // chaos 8
    [18, 90, 99]  // chaos 9
  ],
  [ // index 4 = 50 / 50
    [2, 10, 83],  // chaos 1
    [3, 15, 84],  // chaos 2
    [5, 25, 86],  // chaos 3
    [7, 35, 88],  // chaos 4
    [10, 50, 91], // chaos 5
    [13, 65, 94], // chaos 6
    [15, 75, 96], // chaos 7
    [16, 85, 97], // chaos 8
    [19, 95, 100] // chaos 9
  ],
  [ // index 5 = somewhat likely
    [4, 20, 85],  // chaos 1
    [5, 25, 86],  // chaos 2
    [9, 45, 90],  // chaos 3
    [10, 50, 91], // chaos 4
    [13, 65, 94], // chaos 5
    [16, 80, 97], // chaos 6
    [16, 85, 97], // chaos 7
    [18, 90, 99], // chaos 8
    [19, 95, 100] // chaos 9
  ],
  [ // index 6 = likely
    [5, 25, 86],  // chaos 1
    [7, 35, 88],  // chaos 2
    [10, 50, 91], // chaos 3
    [11, 55, 92], // chaos 4
    [15, 75, 96], // chaos 5
    [16, 85, 97], // chaos 6
    [18, 90, 99], // chaos 7
    [19, 95, 100],// chaos 8
    [20, 100, 0]  // chaos 9
  ],
  [ // index 7 = very likely
    [9, 45, 90],  // chaos 1
    [10, 50, 91], // chaos 2
    [13, 65, 94], // chaos 3
    [15, 75, 96], // chaos 4
    [16, 85, 97], // chaos 5
    [18, 90, 99], // chaos 6
    [19, 95, 100],// chaos 7
    [19, 95, 100],// chaos 8
    [21, 105, 0]  // chaos 9
  ],
  [ // index 8 = near sure thing
    [10, 50, 91], // chaos 1
    [11, 55, 92], // chaos 2
    [15, 75, 96], // chaos 3
    [16, 85, 97], // chaos 4
    [18, 90, 99], // chaos 5
    [19, 95, 100],// chaos 6
    [19, 95, 100],// chaos 7
    [20, 100, 0], // chaos 8
    [23, 115, 0]  // chaos 9
  ],
  [ // index 9 = a sure thing
    [11, 55, 92], // chaos 1
    [13, 65, 94], // chaos 2
    [16, 80, 97], // chaos 3
    [16, 85, 97], // chaos 4
    [18, 90, 99], // chaos 5
    [19, 95, 100],// chaos 6
    [19, 95, 100],// chaos 7
    [22, 110, 0], // chaos 8
    [25, 125, 0]  // chaos 9
  ],
  [ // index 10 = has to be
    [16, 80, 97], // chaos 1
    [16, 85, 97], // chaos 2
    [19, 90, 99], // chaos 3
    [19, 95, 100],// chaos 4
    [19, 95, 100],// chaos 5
    [20, 100, 0], // chaos 6
    [20, 100, 0], // chaos 7
    [26, 130, 0], // chaos 8
    [26, 145, 0]  // chaos 9
  ]
];

function fateCheck() {
  let chaos = document.getElementById('chaos_value').value;
  let odds = document.getElementById('fate_odds').value;
  let roll = Math.floor(Math.random() * 100) + 1;
  // DETERMINE IF RANDOM EVENT OCCURS
  if(roll in doubles && chaos >= doubles.indexOf(roll) + 1) { // index + 1 --> single digit for comparison to chaos
    let focus = getRandomEventFocus();
    let event_meaning = getEventMeaning();
  }
    // OUTPUT RESULTS AT THE END ??
  // return getFateResult(roll, odds, chaos);
  console.log(getFateResult(roll, odds, chaos));
  // INSTEAD OF RETURNING, DO WE SET THE InnerHTML VALUE OF AN ELEMENT?
};

function getFateResult(roll, odds_selection, chaos_value) {
  if(roll <= odds_all[odds_selection][chaos_value-1][1]) // to get correct index, chaos - 1
    if(roll <= odds_all[odds_selection][chaos_value-1][0])
      return "Exceptional Yes";
    else {
      return "Yes";
    }
  else if(roll > odds_all[odds_selection][chaos_value-1][1])
    if(roll > odds_all[odds_selection][chaos_value-1][2])
      return "Exceptional No";
    else {
      return "No";
    }
};

function getRandomEventFocus() {
    let roll = Math.floor(Math.random() * 100) + 1;
    if (roll <= 7) {
        return "REMOTE EVENT";
    }
    else if (roll <= 28) {
        return "NPC ACTION";
    }
    else if (roll <= 35) {
        return "INTRODUCE A NEW NPC";
    }
    else if (roll <= 45) {
        return "MOVE TOWARD A THREAD";
    }
    else if (roll <= 52) {
        return "MOVE AWAY FROM A THREAD";
    }
    else if (roll <= 55) {
        return "CLOSE A THREAD";
    }
    else if (roll <= 67) {
        return "PC NEGATIVE";
    }
    else if (roll <= 75) {
        return "PC POSITIVE";
    }
    else if (roll <= 83) {
        return "AMBIGUOUS EVENT";
    }
    else if (roll <= 92) {
        return "NPC NEGATIVE";
    }
    else {
        return "NPC POSITIVE";
    }
};

function getEventMeaning() {
  let action = actionTable1[Math.floor(Math.random() * 100) + 1];
  let subject = actionTable2[Math.floor(Math.random() * 100) + 1];
  return `Event Meaning: ${action} + ${subject}`;
};
