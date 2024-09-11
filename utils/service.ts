import { fetchFromAPI } from "./fetchFromAPI";

// Get the list of contracts
export const getContracts = async () => {
  const res = await fetchFromAPI("vls/v3/contracts");
  return res;
}

// Get infos from a station
export const getStationsInfos = async (station_number: string, contract: string) => {
  const res = await fetchFromAPI("vls/v3/stations/" + station_number + "?contract=" + contract);
  return res;
}

// Get list of stations
export const getStations = async () => {
  const res = await fetchFromAPI("vls/v3/stations");
  return res;
}

// Get list of stations from a contract
export const getStationsFromContract = async (contract: string) => {
  const res = await fetchFromAPI("vls/v3/stations?contract=" + contract);
  return res;
}