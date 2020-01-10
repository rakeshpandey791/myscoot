import React, {Component} from 'react';
import 'src/component/Footer/Footer.scss';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="blank-space"></div>
                <div className="footer">
                    <div className="footer-msg">
                        Get exclusive invites with verified MyScoot account
                    </div>
                    <div className="sign-up">
                        <button className="btn-signup">Sign up</button>
                    </div>
                    <div className="login">
                        <button className="btn-login">Login</button>

                    </div>
                </div>
            </React.Fragment>
            

        );
    }
}

export default Footer;