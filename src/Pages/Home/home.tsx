import { useState, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../constants/url';
import { MovieInterface } from '../../interface/moviesInterface';
import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { options } from '../../Header/Header';

function Home() {
  const [data, setData] = useState<MovieInterface[]>([]);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const getImageUrl = (path: string): string => {
    return `https://image.tmdb.org/t/p/w200${path}`;
  };

  const fetchData = async (): Promise<void> => {
    try {
      const movieList = await axios.get(BASE_URL, options);
      setData(movieList.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VStack spacing={4} align="center" bg="gray.800" p={4} borderRadius="md">
      <Heading as="h1" size="xl" mb={4} color="teal.400">
        Lista de Filmes
      </Heading>
      <HStack spacing={4} flexWrap="wrap" justifyContent="center">
        {data.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            position="relative"
            onMouseEnter={() => setHoveredMovie(item.id)}
            onMouseLeave={() => setHoveredMovie(null)}
            transition="background-color 0.3s, opacity 0.3s"
            bg={hoveredMovie === item.id ? "teal.400" : "gray.700"}
            opacity={hoveredMovie === item.id ? 1 : 0.9}
          >
            <Image src={getImageUrl(item.poster_path)} alt={item.title} maxW="200px" mb={2} />
            {hoveredMovie === item.id && (
              <Text fontSize="lg" fontWeight="bold" position="absolute" bottom={0} left={0} right={0} p={2} bg="rgba(0, 0, 0, 0.8)" color="white" textAlign="center">
                {item.title}
              </Text>
            )}
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}

export default Home;