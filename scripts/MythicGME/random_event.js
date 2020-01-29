// CURRENTLY C++, CONVERT TO JS

RandomEvent::Event RandomEvent::getEvent() {

    Event event;

    const auto diceValue { s_d100.get() };

    event.focusTarget = "NO TARGET";

    if      (diceValue <= 7) {
        event.focusType = "REMOTE EVENT";
    }
    else if (diceValue <= 28) {
        event.focusType = "NPC ACTION";
        event.focusTarget = Utils::randomNPC();
    }
    else if (diceValue <= 35) {
        event.focusType = "INTRODUCE A NEW NPC";
    }
    else if (diceValue <= 45) {
        event.focusType = "MOVE TOWARD A THREAD";
        event.focusTarget = Utils::randomThread();
    }
    else if (diceValue <= 52) {
        event.focusType = "MOVE AWAY FROM A THREAD";
        event.focusTarget = Utils::randomThread();
    }
    else if (diceValue <= 55) {
        event.focusType = "CLOSE A THREAD";
        event.focusTarget = Utils::randomThread();
    }
    else if (diceValue <= 67) {
        event.focusType = "PC NEGATIVE";
        event.focusTarget = Utils::randomPlayerCharacter();
    }
    else if (diceValue <= 75) {
        event.focusType = "PC POSITIVE";
        event.focusTarget = Utils::randomPlayerCharacter();
    }
    else if (diceValue <= 83) {
        event.focusType = "AMBIGUOUS EVENT";
    }
    else if (diceValue <= 92) {
        event.focusType = "NPC NEGATIVE";
        event.focusTarget = Utils::randomNPC();
    }
    else {
        event.focusType = "NPC POSITIVE";
        event.focusTarget = Utils::randomNPC();
    }

    event.meaningAction  = MeaningTables::actionTable1.at(s_d100.get() - 1);
    event.meaningSubject = MeaningTables::actionTable2.at(s_d100.get() - 1);

    return event;
}
