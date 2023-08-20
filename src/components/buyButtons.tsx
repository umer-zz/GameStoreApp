import { FrownOutlined, MehOutlined, ShoppingCartOutlined, SmileOutlined } from "@ant-design/icons";

const BuyButton = ({ small, rating }: { small?: boolean, rating: number }) => {
    let mode = rating <= 33 ?
        <div className="rIconw" style={{ backgroundColor: 'var(--pink)' }}>
            <FrownOutlined className="rIcon" />
        </div>
        :
        rating > 33 && rating <= 66 ?
            <div className="rIconw" style={{ backgroundColor: 'var(--yellow)' }}>
                <MehOutlined className="rIcon" />
            </div>
            :
            <div className="rIconw">
                <SmileOutlined className="rIcon" />
            </div>

    return (
        <div className="dflex w100" style={{ gap: '1rem' }}>
            <div className="dflex pillcard" style={!small ? { flex: '1' } : undefined}>
                {mode}
                <div>
                    <p style={{ color: 'var(--grey)' }}>Rating</p>
                    <p style={{ fontWeight: 700 }}>{rating}</p>
                </div>
            </div>
            <div className="dflex pricecard" style={{ alignItems: 'center', flex: '1', justifyContent: 'center' }}>
                <div className="rIconw"><ShoppingCartOutlined className="rIcon" style={{ color: '#fff' }} /></div>
                <p style={{ fontSize: 'var(--font15)' }}>$ 80.99</p>
            </div>
        </div>
    );
}

export default BuyButton;