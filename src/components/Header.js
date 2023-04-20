import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component
{

  

    render(){
        return(
            <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 height__100P">
                <nav className="navigation height__100P">
                  <span>
                    <i data-toggle="navigation-menu" className="navigation__bars fa fa-bars"></i>
                  </span>

                  <ul className="navigation__items ">
                    <li >
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <Link to="/search" >Search</Link>
                    </li>
                    
                    <li className="">
                      <Link to="/edit" >Edit</Link>
                    </li>
                    <li>
                      <Link to="/about" >About</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        );
    }
}

export default Header;