import { BellOutlined, MailOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <div className='dflex header' style={{ padding: '1rem 4rem', position: 'sticky', top: 0, justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <p className="welcome-text">Good day, Rayan!</p>
            <div className="dflex" style={{ alignItems: 'center', gap: '2rem' }}>
                <SearchOutlined className="icon" />
                <BellOutlined className="icon" />
                <MailOutlined className="icon" />
                <div className="profile">
                    <img src="https://picsum.photos/200/300" alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
}

export default Header;