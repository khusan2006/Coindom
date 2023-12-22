import { useEffect, useState } from 'react'

const useCurrency = (limit) => {

const [currencies, setCurrencies] = useState([]);
const [isLoading, setIsloading] = useState(false);
useEffect(() => {
    const URL =
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=0`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6c4ac9a250msha3d4e242fdff712p16a087jsn6ee0ef8e7669",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const fetchCurrencies = async () => {
    setIsloading(true);
    try {
      const res = await fetch(URL, options);
      const { data } = await res.json();
      setCurrencies(data.coins);
    } catch (err) {
      throw new Error(err);
    }finally{
      setIsloading(false)
    }
  };
  fetchCurrencies();
}, [limit]);
  return {currencies, isLoading}
}

export default useCurrency


