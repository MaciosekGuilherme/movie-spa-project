import axios from "axios";
import { GENRE_URL } from "../../constants/url";
import { options } from "../../Header/Header";
import { useState, useEffect } from "react";
import { GenreInterface } from "../../interface/GenreInterface";
import ReactGA from 'react-ga4';

interface SidebarProps {
    onButtonClick: () => void;
}

export function Sidebar({ onButtonClick }: SidebarProps) {
    const [data, setData] = useState<GenreInterface[]>([]);

    const trackFeedbackButtonClick = () => {
        ReactGA.event({
            category: 'Genêro de Filme',
            action: 'Clicar no botão de gênero de filme',
            label: 'Botão gênero de filme',
            value: undefined
        });
        onButtonClick();
    };

    const fetchData = async (): Promise<void> => {
        try {
            const sidebarMovieGenre = await axios.get(GENRE_URL, options);
            setData(sidebarMovieGenre.data.genres);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=" gap-4 flex flex-col min-h-full h-full w-1/4 bg-gray-800 p-4 rounded-md">
            <h1 className="text-teal-400 text-2xl mb-4">Gêneros</h1>
            {data.map((item) => (
                <button onClick={trackFeedbackButtonClick}
                    key={item.id}
                    className={`bg-gray-700 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mb-2 transition-all duration-300`}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
