import axios from "axios"

const elecPriceSingleUrl = "/api/porssisahko/v2/price.json"
const elecPriceLatestUrl = "/api/porssisahko/v2/latest-prices.json"

const getElecPriceNow = async () => {
  console.log("FETHING PRICE NOW");
  let date = new Date;
  const req = await axios.get(`${elecPriceSingleUrl}?date=${date.toISOString()}`);
  return req.data.price
}

const getElecPriceLatest = async () => {
  console.log("FETHING LATEST PRICES")
  const req = await axios.get(`${elecPriceLatestUrl}`);
  const prices = req.data.prices.reverse();
  return prices.map((p, i) => ({ 
    key: i, 
    startDate: p.startDate,
    endDate: p.endDate, 
    value: p.price }));
}

export default {
  getElecPriceNow, getElecPriceLatest
};