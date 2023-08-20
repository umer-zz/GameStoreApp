import { Game } from "../api/models/Game";
import BuyButton from "./buyButtons";

const GameCard = ({ data }: { data: Game }) => {
    return (
        <div className="GameCard" style={{ width: 'auto' }}>
            <div className="thumbImgCont">
                <img src={data.short_screenshots[0].image} alt="" srcSet="" />
            </div>
            <p className="title">{data.name}</p>
            <div className="dflex ALC" style={{ justifyContent: 'space-between', gap: '.5rem' }}>
                <div className="pills">
                    {data.genres.map(ele => <div className="pill">
                        <p>{ele.name}</p>
                    </div>)}
                </div>
                {/* <div className="smallimageWrap">
                    <img src={data.short_screenshots[1].image} alt="" srcSet="" />
                </div> */}

            </div>
            <BuyButton rating={data.metacritic} small></BuyButton>
        </div>
    );
}

export default GameCard;