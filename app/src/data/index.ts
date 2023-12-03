import { MapScheme } from "../components/composables/types";
import { ancientMapScheme } from "./ancient";
import { anubisMapScheme } from "./anubis";
import { dust2MapScheme } from "./dust2";
import { infernoMapScheme } from "./inferno";
import { nukeLineups } from "./nuke";
import { mirageMapScheme } from "./mirage";
import { overpassMapScheme } from "./overpass";
import { vertigoMapScheme } from "./vertigo";

export const allMapSchemes: MapScheme[] = [
  ancientMapScheme,
  anubisMapScheme,
  dust2MapScheme,
  infernoMapScheme,
  nukeLineups,
  mirageMapScheme,
  overpassMapScheme,
  vertigoMapScheme,
];
