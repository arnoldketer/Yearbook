import { Component } from "react";
import "../styles/NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="navbar-logo">YearBook</h1>
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}</Link>
                        </li>
                    )
                })}

                <Link to='/register'>
                <button>Sign Up</button>
                </Link>
                
                
            </ul>
        </nav>

        )
    }
}

export default Navbar;