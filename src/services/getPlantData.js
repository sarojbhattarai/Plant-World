import http from "./httpService";
import { PLANT_LISTS, baseURL } from "./../constants/endpoints";

export function getPlants() {
  return http.get(
    "https://23862365-4d04-4616-b6d6-6a312f0b252b.mock.pstmn.io/plants"
  );
}
