

const actionTable1 = ["ATTAINMENT", "STARTING", "NEGLECT", "FIGHT", "RECRUIT", "TRIUMPH",
                      "VIOLATE", "OPPOSE", "MALICE", "COMMUNICATE", "PERSECUTE", "INCREASE",
                      "DECREASE", "ABANDON", "GRATIFY", "INQUIRE", "ANTAGONISE", "MOVE",
                      "WASTE", "TRUCE", "RELEASE", "BEFRIEND", "JUDGE", "DESERT", "DOMINATE",
                      "PROCRASTINATE", "PRAISE", "SEPARATE", "TAKE", "BREAK", "HEAL", "DELAY",
                      "STOP", "LIE", "RETURN", "IMMITATE", "STRUGGLE", "INFORM", "BESTOW",
                      "POSTPONE", "EXPOSE", "HAGGLE", "IMPRISON", "RELEASE", "CELEBRATE",
                      "DEVELOP", "TRAVEL", "BLOCK", "HARM", "DEBASE", "OVERINDULGE", "ADJOURN",
                      "ADVERSITY", "KILL", "DISRUPT", "USURP", "CREATE", "BETRAY", "AGREE",
                      "ABUSE", "OPPRESS", "INSPECT", "AMBUSH", "SPY", "ATTACH", "CARRY",
                      "OPEN", "CARELESSNESS", "RUIN", "EXTRAVAGANCE", "TRICK", "ARRIVE",
                      "PROPOSE", "DIVIDE", "REFUSE", "MISTRUST", "DECEIVE", "CRUELTY",
                      "INTOLERANCE", "TRUST", "EXCITEMENT", "ACTIVITY", "ASSIST", "CARE",
                      "NEGLIGENCE", "PASSION", "WORK HARD", "CONTROL", "ATTRACT", "FAILURE",
                      "PURSUE", "VENGEANCE", "PROCEEDINGS", "DISPUTE", "PUNISH", "GUIDE",
                      "TRANSFORM", "OVERTHROW", "OPPRESS", "CHANGE"];

const actionTable2 = ["GOALS", "DREAMS", "ENVIRONMENT", "OUTSIDE", "INSIDE", "REALITY",
                      "ALLIES", "ENEMIES", "EVIL", "GOOD", "EMOTIONS", "OPPOSITION", "WAR",
                      "PEACE", "THE INNOCENT", "LOVE", "THE SPIRITUAL", "THE INTELLECTUAL",
                      "NEW IDEAS", "JOY", "MESSAGES", "ENERGY", "BALANCE", "TENSION",
                      "FRIENDSHIP", "THE PHYSICAL", "A PROJECT", "PLEASURES", "PAIN",
                      "POSSESSIONS", "BENEFITS", "PLANS", "LIES", "EXPACTATIONS",
                      "LEGAL MATTERS", "BUREAUCRACY", "BUSINESS", "A PATH", "NEWS",
                      "EXTERIOR FACTORS", "ADVICE", "A PLOT", "COMPETITION", "PRISON",
                      "ILLNESS", "FOOD", "ATTENTION", "SUCCESS", "FAILURE", "TRAVEL",
                      "JEALOUSY", "DISPUTE", "HOME", "INVESTMENT", "SUFFERING", "WISHES",
                      "TACTICS", "STALEMATE", "RANDOMNESS", "MISFORTUNE", "DEATH",
                      "DISRUPTION", "POWER", "A BURDEN", "INTRIGUES", "FEARS", "AMBUSH",
                      "RUMOR", "WOUNDS", "EXTRAVAGANCE", "A REPRESENTATIVE", "ADVERSITIES",
                      "OPULENCE", "LIBERTY", "MILITARY", "THE MUNDANE", "TRIALS", "MASSES",
                      "VEHICLE", "ART", "VICTORY", "DISPUTE", "RICHES", "STATUS QUO",
                      "TECHNOLOGY", "HOPE", "MAGIC", "ILLUSIONS", "PORTALS", "DANGER",
                      "WEAPONS", "ANIMALS", "WEATHER", "ELEMENTS", "NATURE", "THE PUBLIC",
                      "LEADERSHIP", "FAME", "ANGER", "INFORMATION"];

const descriptionTable1 = ["ABNORMALLY", "ADVENTUROUSLY", "AGGRESSIVELY", "ANGRILY", "ANXIOUSLY",
                           "AWKWARDLY", "BEAUTIFULLY", "BLEAKLY", "BOLDLY", "BRAVELY", "BUSILY",
                           "CALMLY", "CAREFULLY", "CARELESSLY", "CAUTIOUSLY", "CEASELESSLY",
                           "CHEERFULLY", "COMBATIVELY",  "COOLLY", "CRAZILY", "CURIOUSLY",
                           "DAINTILY", "DANGEROUSLY", "DEFANTLY", "DELIBERATELY",
                           "DELIGHTFULLY", "DIMLY", "EFFCIENTLY", "ENERGETICALLY", "ENORMOUSLY",
                           "ENTHUSIASTICALLY", "EXCITEDLY", "FEARFULLY", "FEROCIOUSLY",
                           "FIERCELY", "FOOLISHLY", "FORTUNATELY", "FRANTICALLY", "FREELY",
                           "FRIGHTENINGLY", "FULLY", "GENEROUSLY", "GENTLY", "GLADLY",
                           "GRACEFULLY", "GRATEFULLY", "HAPPILY", "HASTILY", "HEALTHILY",
                           "HELPFULLY", "HELPLESSLY", "HOPELESSLY", "INNOCENTLY", "INTENSELY",
                           "INTERESTINGLY", "IRRITATINGLY", "JOVIALLY", "JOYFULLY",
                           "JUDGEMENTALLY", "KINDLY", "KOOKILY", "LAZILY", "LIGHTLY", "LOOSELY",
                           "LOUDLY", "LOVINGLY", "LOYALLY", "MAJESTICALLY", "MEANINGFULLY",
                           "MECHANICALLY", "MISERABLY", "MOCKINGLY", "MYSTERIOUSLY", "NATURALLY",
                           "NEATLY", "NICELY", "ODDLY", "OFFENSIVELY", "OFFCIALLY", "PARTIALLY",
                           "PEACEFULLY", "PERFECTLY", "PLAYFULLY", "POLITELY", "POSITIVELY",
                           "POWERFULLY", "QUAINTLY", "QUARRELSOMELY", "QUIETLY", "ROUGHLY",
                           "RUDELY", "RUTHLESSLY", "SLOWLY", "SOFTLY", "SWIFTLY", "THREATENINGLY",
                           "VERY", "VIOLENTLY", "WILDLY", "YIELDINGLY"];

const descriptionTable2 = ["ABANDONED", "ABNORMAL", "AMUSING", "ANCIENT", "AROMATIC", "AVERAGE",
                           "BEAUTIFUL", "BIZARRE", "CLASSY", "CLEAN", "COLD", "COLORFUL",
                           "CREEPY", "CUTE", "DAMAGED", "DARK", "DEFEATED", "DELICATE",
                           "DELIGHTFUL", "DIRTY", "DISAGREEABLE", "DISGUSTING", "DRAB", "DRY",
                           "DULL", "EMPTY", "ENORMOUS", "EXOTIC", "FADED", "FAMILIAR", "FANCY",
                           "FAT", "FEEBLE", "FEMININE", "FESTIVE", "FLAWLESS", "FRESH", "FULL",
                           "GLORIOUS", "GOOD", "GRACEFUL", "HARD", "HARSH", "HEALTHY", "HEAVY",
                           "HISTORICAL", "HORRIBLE", "IMPORTANT", "INTERESTING", "JUVENILE",
                           "LACKING", "LAME", "LARGE", "LAVISH", "LEAN", "LESS", "LETHAL",
                           "LONELY", "LOVELY", "MACABRE", "MAGNIFCENT", "MASCULINE", "MATURE",
                           "MESSY", "MIGHTY", "MILITARY", "MODERN", "EXTRAVAGANT", "MUNDANE",
                           "MYSTERIOUS", "NATURAL", "NONDESCRIPT", "ODD", "PALE", "PETITE",
                           "POOR", "POWERFUL", "QUAINT", "RARE", "REASSURING", "REMARKABLE",
                           "ROTTEN", "ROUGH", "RUINED", "RUSTIC", "SCARY", "SIMPLE", "SMALL",
                           "SMELLY", "SMOOTH", "SOFT", "STRONG", "TRANQUIL", "UGLY", "VALUABLE",
                           "WARLIKE", "WARM", "WATERY", "WEAK", "YOUNG"];


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
   let result = getFateResult(roll, odds, chaos);
   document.getElementById("output-text-1").innerHTML=result;
   if(roll in doubles && chaos >= doubles.indexOf(roll) + 1) { // index + 1 --> single digit for comparison to chaos
     document.getElementById("output-text-2").innerHTML=getRandomEventFocus();
     document.getElementById("output-text-3").innerHTML=getEventMeaning();
   }
 };


function setRandomMeaning() {
  document.getElementById("output-text-1").innerHTML=getEventMeaning();
  document.getElementById("output-text-2").innerHTML="";
  document.getElementById("output-text-3").innerHTML="";
};

function sceneSetup() {
  let chaos = document.getElementById('chaos_value').value;
  document.getElementById("output-text-1").innerHTML=getScene(chaos);
  document.getElementById("output-text-2").innerHTML="";
  document.getElementById("output-text-3").innerHTML="";
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
       return "Random Event: REMOTE EVENT";
   }
   else if (roll <= 28) {
       return "Random Event: NPC ACTION";
   }
   else if (roll <= 35) {
       return "Random Event: INTRODUCE A NEW NPC";
   }
   else if (roll <= 45) {
       return "Random Event: MOVE TOWARD A THREAD";
   }
   else if (roll <= 52) {
       return "Random Event: MOVE AWAY FROM A THREAD";
   }
   else if (roll <= 55) {
       return "Random Event: CLOSE A THREAD";
   }
   else if (roll <= 67) {
       return "Random Event: PC NEGATIVE";
   }
   else if (roll <= 75) {
       return "Random Event: PC POSITIVE";
   }
   else if (roll <= 83) {
       return "Random Event: AMBIGUOUS EVENT";
   }
   else if (roll <= 92) {
       return "Random Event: NPC NEGATIVE";
   }
   else {
       return "Random Event: NPC POSITIVE";
   }
};

function getEventMeaning() {
  let action = actionTable1[Math.floor(Math.random() * 100)];
  let subject = actionTable2[Math.floor(Math.random() * 100)];
  return `${action} + ${'<br/>' + subject}`;
};

function getScene(chaos) {
  let roll = Math.floor(Math.random() * 10) + 1
  if (roll > chaos)
    return "Unchanged Scene";
  else {
    if (roll % 2 == 0)
      return `Interrupt Scene: ${'<br/>' + getEventMeaning()}`;
    else {
      return "Altered Scene";
    }
  }
};


//////////////////////////////////
// ANIMATIONS + EVENT LISTENERS //
//////////////////////////////////

const button_scene = document.getElementById('scene_button');
const button_meaning = document.getElementById('meaning_button');
const button_fate = document.getElementById('fate_button');
let output = document.getElementById('div-output');
let blinkClass = 'blink';

button_scene.addEventListener('click',function() {
  output.classList.add(blinkClass);
});

button_meaning.addEventListener('click',function() {
  output.classList.add(blinkClass);
});

button_fate.addEventListener('click',function() {
  output.classList.add(blinkClass);
});

output.addEventListener('animationend',function() {
  this.classList.remove(blinkClass);
});
