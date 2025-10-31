import axios from "axios"

const baseUrl = "/api/porssisahko"

const elecPriceSingleUrl = `/v2/price.json`
const elecPriceLatestUrl = `/v2/latest-prices.json`

const getElecPriceNow = async () => {
  console.log("FETHING PRICE NOW");
  let date = new Date;
  const req = await axios.get(baseUrl,
    { params: {url: `${elecPriceSingleUrl}?date=${date.toISOString()}`}});
  return req.data.price
}

const getElecPriceLatest = async () => {
  console.log("FETHING LATEST PRICES")
  const req = await axios.get(baseUrl, { params: {url: `${elecPriceLatestUrl}`} });
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