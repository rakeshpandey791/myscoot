import React, {Component} from 'react';
import 'src/component/Header/Header.scss';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo">
                    myscoot
                </div>
                <div>
                    Start hosting
                </div>
                <div>
                    About
                </div>
                <div>
                    Sign up
                </div>
                <div className="login">
                    Login
                </div>
            </div>
        );
    }
}

export default Header;
