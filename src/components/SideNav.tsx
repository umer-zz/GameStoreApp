import { BookOutlined, CustomerServiceOutlined, HomeOutlined, NotificationOutlined, ShoppingCartOutlined, ToolOutlined, WalletOutlined } from "@ant-design/icons";
import ToggleSwitch from "./toogle";
import logo from '../assets/images/logo.png'

const SideNav = () => {
    return (
        <div className="sidenav">
            <div style={{ padding: '1rem' }}>
                <img src={logo} alt="" />
            </div>
            <div className="nav-item blue">
                <p>Home</p>
                <HomeOutlined />
            </div>
            <div className="nav-item pink">
                <p>News</p>
                <NotificationOutlined />
            </div>
            <div className="nav-item yellow">
                <p>Library</p>
                <BookOutlined />
            </div>
            <div className="nav-item purple active">
                <p>Store</p>
                <ShoppingCartOutlined />
            </div>
            <div className="nav-item green">
                <p>Wallet</p>
                <WalletOutlined />
            </div>
            <div className="ld-toggle">
                <ToggleSwitch></ToggleSwitch>
            </div>

            <div className="nav-item lblue">
                <p>Support</p>
                <CustomerServiceOutlined />
            </div>
            <div className="nav-item lblue">
                <p>Settings</p>
                <ToolOutlined />
            </div>
        </div>
    );
}

export default SideNav;