import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Увійти в акаунт</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">Вийти</a>
                    </li>
                );
        }
    }

    render () {
        return (
            <nav>
                <div className="nav-wraper"> 
                <Link 
                    to={this.props.auth ? '/cabinet' : '/'} 
                    className="left brand-logo"
                > 
                    KCAA 
                </Link>
                <ul className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);