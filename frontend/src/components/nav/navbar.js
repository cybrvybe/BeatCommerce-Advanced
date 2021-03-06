import React from "react";
import "./navbar.scss";
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import App from "../../App.js";
import NavTextLogo from "./nav-logo.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlusSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import {faArchive, faList, faPlusCircle, faShoppingCart, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import Login from "../login/login";
import Homepage from "../homepage/homepage";
import LoginPage from "../login/login-page";
import SignUpPage from "../login/sign-up-page";
export default class Navbar extends React.Component{
    render(){
        const {
            nav_dict_array = []
        } = this.props;
        return(
            <BrowserRouter>
                <div className = "navbarWrapper">
                    <div className = "navbarDiv">
                        <div className = "logoWrapper">
                            <Link className = "logoDiv" to = "/home">
                                <NavTextLogo font_size = "2rem" font_family = "kingsCross" text_prompt = "BeatCommerce"></NavTextLogo>
                            </Link>
                        </div>
                        <div className = "navEntryListWrapper">
                            <div className = "navEntryListDiv">
                                
                                    <div className = "navEntryListDiv">
                                        <ul className = "navEntryList">
                                            {
                                                nav_dict_array.map(
                                                    nav_dict => (
                                                        <li className = "navEntryItem">
                                                            <Link className = "navEntryText" to = {nav_dict.path_ext}>{nav_dict.title}</Link>
                                                        </li>
                                                    )
                                                )
                                            }
                                        </ul>
                                        
                                    </div>
                                
                            </div>
                        </div>
                        <div className = "navbarExtraMenuWrapper">
                            <div className = "navbarExtraMenuDiv">
                                <Login></Login>
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path = "/" component = {App}/>
                    <Route path = "/home" component = {Homepage}/>
                    {
                        nav_dict_array.map(
                            nav_dict => (
                
                                <Route path = {nav_dict.path_ext} component = {nav_dict.component[0]} />
                            )
                        )
                    }
                    <Route path = "/login" component = {LoginPage}/>
                    <Route path = "/sign-up" component = {SignUpPage}/>
                
                </Switch>
            </BrowserRouter>
        )
    }
};
