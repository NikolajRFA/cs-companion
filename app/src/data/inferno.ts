import { MapLineups } from "../components/composables/types";

export const infernoLineups: MapLineups = {
  map: "Inferno",
  smokes: [
    {
      name: "CT smoke from banana",
      resultImage: "inferno/t/smokes/inferno-result-ct-smoke-from-banana.png",
      aimImage: "inferno/t/smokes/inferno-aim-ct-smoke-from-banana.png",
      posImage: "inferno/t/smokes/inferno-pos-ct-smoke-from-banana.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Coffin smoke from banana",
      resultImage:
        "inferno/t/smokes/inferno-result-coffin-smoke-from-banana.png",
      aimImage: "inferno/t/smokes/inferno-aim-coffin-smoke-from-banana.png",
      posImage: "inferno/t/smokes/inferno-pos-coffin-smoke-from-banana.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Short smoke from second mid",
      resultImage: "inferno/t/smokes/inferno-result-2mid-short-smoke.png",
      aimImage: "inferno/t/smokes/inferno-aim-2mid-short-smoke.png",
      posImage: "inferno/t/smokes/inferno-pos-2mid-short-smoke.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Short smoke from t-ramp",
      resultImage: "inferno/t/smokes/inferno-result-mid-short-smoke.png",
      aimImage: "inferno/t/smokes/inferno-aim-mid-short-smoke.png",
      posImage: "inferno/t/smokes/inferno-pos-mid-short-smoke.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Deep long smoke from second mid",
      resultImage: "inferno/t/smokes/inferno-result-deep-long-smoke.png",
      aimImage: "inferno/t/smokes/inferno-aim-deep-long-smoke.png",
      posImage: "inferno/t/smokes/inferno-pos-deep-long-smoke.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Cross pit smoke from second mid",
      resultImage:
        "inferno/t/smokes/inferno-result-cross-pit-smoke-from-second.png",
      aimImage: "inferno/t/smokes/inferno-aim-cross-pit-smoke-from-second.png",
      posImage: "inferno/t/smokes/inferno-pos-cross-pit-smoke-from-second.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Molo B dark from car",
      folder: "inferno/t/molos/b-dark-from-car",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Molo short A from mid",
      folder: "inferno/t/molos/short-a-from-mid",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
  ],
  flashBangs: [
    {
      name: "B site flash from car",
      folder: "inferno/t/flash/b-site-flash-from-car",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Pop flash out of boiler",
      folder: "inferno/t/flash/pop-flash-boiler-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Pit(A) flash from apps",
      description: "Must be crouched",
      folder: "inferno/t/flash/a-site-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
  ],
};
