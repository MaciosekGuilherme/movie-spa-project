import { useState, useEffect } from 'react';
import axios from "axios";
import { options } from "../../Header/Header";
import { BASE_URL } from '../../constants/url';
import { MovieInterface } from '../../interface/moviesInterface'



function Home() {
  const [data, setData] = useState<MovieInterface[]>([]);


  const fetchData = async () => {
    try {
      const movieList = await axios.get(`${BASE_URL}`, options);
      setData(movieList.data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Home;
