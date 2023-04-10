import { MapScheme } from "../components/composables/types";

export const ancientMapScheme: MapScheme = {
  map: "Ancient",
  lineUps: [
    {
      name: "Long B smoke from ruins",
      id: "long-b-from-ruins",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 826,
        y: 369,
      },
    },
    {
      name: "Short B smoke from ruins",
      id: "short-b-from-ruins",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 726,
        y: 354,
      },
    },
    {
      name: "Cave smoke from ruins",
      id: "cave-from-ruins",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 708,
        y: 395,
      },
    },
    {
      name: "Ancient mid smoke from t spawn",
      id: "mid-from-t-spawn",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 486,
        y: 386,
      },
    },
    {
      name: "Inside donut smoke from stairs",
      id: "inside-donut-from-stairs",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 315,
        y: 329,
      },
    },
    {
      name: "CT smoke from stairs",
      id: "ct-from-stairs",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 367,
        y: 221,
      },
    },
    {
      name: "Ancient wood molo from ruins",
      id: "wood-from-ramp",
      nadeType: "molo",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 726,
        y: 489,
      },
    },
  ],
  strats: [
    {
      name: "First pistol round",
      description:
        "All push B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "pistols",
    },
    {
      name: "Second round",
      description:
        "Use when first round was won or bomb was planted. Oush B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "smg",
    },
    {
      name: "Split mid",
      description:
        "First 3 players via mid to donut to a. Last 2 players via A main to a, try to come to A site at the same time",
      side: "t",
      buyType: "normal",
    },
    {
      name: "Nade mid house",
      description:
        "One player smokes mid house from spawn. All players rushes mid and throws grenades behind smoke in mid house",
      side: "t",
      buyType: "full-eco",
    },
  ],
};
