import axios from "axios";

const BASE_URL = "https://api.jcdecaux.com";

const options = {
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    'apiKey': "e0a1bf2c844edb9084efc764c089dd748676cc14"
  }
};

export const fetchFromAPI = async (url : string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}