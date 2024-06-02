import { BookOutlined, CustomerServiceOutlined, HomeOutlined, NotificationOutlined, ShoppingCartOutlined, ToolOutlined, WalletOutlined } from "@ant-design/icons";
import ToggleSwitch from "./toogle";
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav">
            <div style={{ padding: '1rem' }}>
                <img style={{ height: 'auto' }} src={logo} alt="" />
            </div>
            <NavLink to={'/'} className="nav-item blue">
                <p>Home</p>
                <HomeOutlined />
            </NavLink>
            <NavLink to={'Genre'} className="nav-item pink">
                <p>Genres</p>
                <NotificationOutlined />
            </NavLink>
            <div className="nav-item yellow">
                <p>Library</p>
                <BookOutlined />
            </div>
            <NavLink to={'/browse'} className="nav-item purple">
                <p>Store</p>
                <ShoppingCartOutlined />
            </NavLink>
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