import GameCard from "../components/GameCard";
import BuyButton from "../components/buyButtons";
import { useQuery } from "react-query";
import { API_KEY, AxiosInstance } from "../api/AxiosInstance";
import { Game } from '../api/models/Game';
import { useMemo } from 'react';
import Loader from "../components/loader/loader";
const Store = () => {
    const { isLoading, isError, data } = useQuery('games', () => AxiosInstance.get(`/games?key=${API_KEY}`))
    let sortedGames: Game[] = useMemo(() => {
        if (data?.data) {
            let temp = data.data.results.slice()
            return temp.sort((a: Game, b: Game) => {
                return b.metacritic - a.metacritic;
            });
        }
        else {
            return null
        }
    }, [data])
    return (
        <>
            {isLoading ? <Loader></Loader> :
                <div className="store">
                    {sortedGames && <div className="parent">
                        <div className="div1">
                            <div className="titleCard w100 h100 cardbase">
                                <p className="title">{sortedGames[0].name}</p>
                                <div className="pills">
                                    {sortedGames[0].tags.slice(0, 6).map(ele => <div className="pill">
                                        <p>{ele.name}</p>
                                    </div>)}
                                </div>
                                <BuyButton rating={sortedGames[0].metacritic}></BuyButton>
                            </div>
                        </div>
                        <div className="div2">
                            <div className="showCaseCard w100 h100">
                                <div className="dflex wrapper h100 w100">
                                    {sortedGames[0].short_screenshots.slice(0, 2).map(ele => <div>
                                        <img src={ele.image} alt="" srcSet="" />
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="div3">
                            <div className="popularCard w100 h100 cardbase" style={{ padding: 0, overflow: 'clip' }}>
                                <img src={sortedGames[0].short_screenshots[0].image} alt="" />
                            </div>
                        </div>
                    </div>}
                    <div className="popularGrid">
                        <p className="title">Popular Games</p>
                        <div className="dflex ppw">
                            {data?.data && data.data.results.map((ele: Game) => <GameCard key={ele.id} data={ele}></GameCard>)}
                        </div>
                    </div>
                </div >}
        </>
    );
}

export default Store;