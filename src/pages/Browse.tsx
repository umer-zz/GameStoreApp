import { useQuery } from "react-query";
import { API_KEY, AxiosInstance } from "../api/AxiosInstance";
import { useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import GameCardGrid from "../components/gameCardGrid";
const Browse = () => {
    let [selected, setSelected] = useState<any[]>([])
    const { isLoading, isError, data, isFetching } = useQuery(['games', selected.length], () => AxiosInstance.get(`/games?key=${API_KEY}${selected.length ? '&genres=' + selected.map(ele => ele.id).join() : ''}`))
    const { data: genre } = useQuery('genres', () => AxiosInstance.get(`/genres?key=${API_KEY}`))
    function removeItem(id: number) {
        setSelected(prev => prev.filter(ele => ele.id != id))
    }
    return (
        <div className="browseWrapper">
            <div style={{ flexGrow: 1 }}>
                <div className="dflex" style={{ gap: '1rem', marginBlock: '1rem' }}>
                    {selected.map(ele => <div key={ele.id} className="filterPill" onClick={() => removeItem(ele.id)}>{ele.name}</div>)}
                </div>
                {isLoading || isFetching ? <Loader></Loader>
                    :
                    <GameCardGrid data={data?.data} gridClass="bgrid"></GameCardGrid>
                }

            </div>
            <div className="filterWrap">
                <p className="title">Genre</p>
                <div className="filterCardWrap">
                    {genre?.data && genre.data.results.map((ele: any) => <div onClick={() => {
                        if (selected.length) {
                            if (selected.map(elee => elee.id).includes(ele.id)) return
                            else {
                                setSelected(prev => [...prev, { id: ele.id, name: ele.name }])
                            }
                        }
                        else {
                            setSelected(prev => [...prev, { id: ele.id, name: ele.name }])
                        }
                    }} key={ele.id} style={{ backgroundImage: `url(${ele.image_background})` }} className={`filterCard ${selected.map(elee => elee.id).includes(ele.id) ? 'active' : ''}`}>
                        <p className="genreText">{ele.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Browse;