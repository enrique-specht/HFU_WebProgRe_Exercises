const haus = {
  geschosse: ["E1", "E2"],
  fenster: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
  türen: ["T1", "T2"],
  garage: ["G1"],
  raeume: ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"],
};

const { geschosse, raeume, ...restHaus } = haus;
console.log("Geschosse: " + geschosse + "\nAnzahl Räume: " + raeume.length);
