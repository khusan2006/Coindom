import { useEffect, useState } from 'react'

const useWikipedia = (word) => {

const [sentence, setSentence] = useState('');
const [isLoading, setIsloading] = useState(false);
useEffect(() => {
    const URL =
    `https://wikipedia-api1.p.rapidapi.com/get_summary?q=${word}&lang=en&sentences=10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c4ac9a250msha3d4e242fdff712p16a087jsn6ee0ef8e7669',
            'X-RapidAPI-Host': 'wikipedia-api1.p.rapidapi.com'
        }
    };
  const fetchWikipedia = async () => {
    setIsloading(true);
    try {
      const res = await fetch(URL, options);
      const { data } = await res.json();
      setSentence(data);
    } catch (err) {
      throw new Error(err);
    }finally{
      setIsloading(false)
    }
  };
  fetchWikipedia();
}, [word]);
  return {sentence, isLoading}
}

export default useWikipedia