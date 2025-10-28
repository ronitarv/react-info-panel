import axios from "axios"

const elecPriceSingleUrl = "/api/porssisahko/v2/price.json"

const getElecPriceNow = async () => {
  let date = new Date;
  const req = await axios.get(`${elecPriceSingleUrl}?date=${date.toISOString()}`);
  return req.data.price
}

export default {
  getElecPriceNow
};