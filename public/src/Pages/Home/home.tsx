import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { MovieInterface } from '../../interface/moviesInterface';
import { options } from '../../Header/Header';
import { Widget } from '../../components/Widget';

function Home() {
  const [data, setData] = useState<MovieInterface[]>([]);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getImageUrl = (path: string): string => {
    return `https://image.tmdb.org/t/p/w200${path}`;
  };

  const fetchData = async (): Promise<void> => {
    try {
      const movieList = await axios.get(BASE_URL, options);
      setData(movieList.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col items-center min-h-screen bg-gray-800 p-4 rounded-md">
        <h1 className="text-teal-400 text-2xl mb-4">Lista de Filmes</h1>
        {isLoading ? (
          <p className="text-white">Carregando...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className={`border-2 rounded-lg p-4 relative transition-all duration-300 ${hoveredMovie === item.id ? 'bg-teal-400 opacity-100' : 'bg-gray-700 opacity-90'
                  }`}
                onMouseEnter={() => setHoveredMovie(item.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img src={getImageUrl(item.poster_path)} alt={item.title} className="max-w-200px mb-2" />
                {hoveredMovie === item.id && (
                  <p className="text-lg font-bold absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-80 text-white text-center">
                    {item.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Widget />
    </div>
  );
}

export default Home;
