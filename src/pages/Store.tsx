import { ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";
import popularImg from '../assets/images/god-of-war-ragnarok-2.jpg'
const Store = () => {
    return (
        <>
            <div className="store">
                <div className="parent">
                    <div className="div1">
                        <div className="titleCard w100 h100 cardbase">
                            <p className="title">God Of War:Rangnarok</p>
                            <div className="pills">
                                <div className="pill">
                                    <p>Action-adventure</p>
                                </div>
                                <div className="pill">
                                    <p>Hack and slash</p>
                                </div>
                                <div className="pill">
                                    <p>Playstation</p>
                                </div>
                                <div className="pill">
                                    <p>Windows</p>
                                </div>
                                <div className="pill">
                                    <p>MacOS</p>
                                </div>
                            </div>
                            <div className="dflex w100" style={{ gap: '1rem' }}>
                                <div className="dflex pillcard" style={{ flex: '1 1' }}>
                                    <div className="rIconw"><SmileOutlined className="rIcon" /></div>
                                    <div>
                                        <p style={{ color: 'var(--grey)' }}>Rating</p>
                                        <p style={{ fontWeight: 700 }}>98%</p>
                                    </div>
                                </div>
                                <div className="dflex pricecard" style={{ alignItems: 'center', flex: '1 1' }}>
                                    <div className="rIconw"><ShoppingCartOutlined className="rIcon" /></div>
                                    <p style={{ fontSize: 'var(--font15)' }}>$ 80.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div2">
                        <div className="showCaseCard w100 h100 cardbase"></div>
                    </div>
                    <div className="div3">
                        <div className="popularCard w100 h100 cardbase" style={{ padding: 0,overflow:'clip' }}>
                            <img src={popularImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="popularGrid">
                    <p className="title">Popular Games</p>
                    
                </div>
            </div >
        </>
    );
}

export default Store;