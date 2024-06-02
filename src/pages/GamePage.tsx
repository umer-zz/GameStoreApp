import { useParams } from "react-router-dom";
import { API_KEY, AxiosInstance } from "../api/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../api/models/Game";

const GamePage = () => {
    const params = useParams();
    let { data } = useQuery<Game>({ queryKey: ['game', params.gameId], queryFn: () => AxiosInstance.get(`/games/${params.gameId}?key=${API_KEY}`).then((res) => res.data) })
    // console.log(data?.background_image, isError, error)
    return (
        <div className="GamePage" style={{ backgroundImage: `url(${data?.background_image})` }}>
            <div className="banner">
            </div>
        </div>
    );
}

export default GamePage;