import { useQuery } from "react-query";
import { API_KEY, AxiosInstance } from "../api/AxiosInstance";
import Loader from "../components/loader/loader";

const Genre = () => {
    const { data, isLoading } = useQuery('genres', () => AxiosInstance.get(`/genres?key=${API_KEY}`))
    return (
        <div className="genreWrapper">
            {isLoading && <Loader></Loader>}
            {data?.data && data.data.results.map((ele: any) =>
                <div key={ele.id} className="GameCard" style={{ padding: 0, width: 'auto', justifyContent: 'flex-end', aspectRatio: '4 / 3', backgroundImage: `url(${ele.image_background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="blackMask"></div>
                    <div className="frontCard">
                        <p className="title">Popular entries</p>
                        <ul>
                            {ele.games.map((game: any) => <li>{game.name}</li>)}
                        </ul>
                    </div>
                    <div className="content">
                        <p className="title">{ele.name}</p>
                        <p className="sub">
                            Total games: {ele.games_count}
                        </p>
                    </div>
                </div>)}
        </div>
    );
}

export default Genre;