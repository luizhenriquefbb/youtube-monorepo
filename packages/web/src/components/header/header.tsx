import React from "react";
import { useAuth } from "../../contexts/authContext";

const Header: React.FC = () => {

    const {logOut} = useAuth()
    const handleLogout = () => {
        logOut();
    }
    return <header>
        <span onClick={handleLogout}>sair</span>
    </header>

}

export default Header;