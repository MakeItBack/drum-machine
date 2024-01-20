export type Drum = {
  name: string;
  sound: string;
  controlKey: string;
};

export function getDrumFromName(drumName: string) {
  return drums.find((drum) => {
    return drum.name === drumName;
  });
}
export function getDrumFromControlKey(drumKey: string) {
  return drums.find((drum) => {
    return drum.controlKey === drumKey;
  });
}

export const drums: Drum[] = [
  {
    name: "Heater 1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    controlKey: "Q",
  },
  {
    name: "Heater 2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    controlKey: "W",
  },
  {
    name: "Heater 3",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    controlKey: "E",
  },
  {
    name: "Heater 4",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    controlKey: "A",
  },
  {
    name: "Clap",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    controlKey: "S",
  },
  {
    name: "Open-HH",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    controlKey: "D",
  },
  {
    name: "Kick-n'-Hat",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    controlKey: "Z",
  },
  {
    name: "Kick",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    controlKey: "X",
  },
  {
    name: "Closed-HH",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    controlKey: "C",
  },
];
