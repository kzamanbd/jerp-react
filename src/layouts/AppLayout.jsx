import SideBarMenu from '@/components/SideBarMenu';
import UserProfile from '@/components/UserProfile';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser: { menu = [], user: userInfo = {} } = {} } = useSelector(
        (state) => state.auth
    );

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="master-layout" className="master-layout">
            <header id="header" className="header-section">
                <div className="header-inner d-flex justify-content-between align-items-center">
                    <div className="header-left-section left-section d-flex align-items-center">
                        <div className="hamburger-menu-section">
                            <span
                                className="hamburger"
                                onClick={onClickHandler}
                                title="Menu"
                                role="button"
                                tabIndex="0">
                                {isOpen ? (
                                    <span className="material-icons">close</span>
                                ) : (
                                    <span className="material-icons">menu</span>
                                )}
                            </span>
                        </div>
                        <div className="logo-section">
                            <Link to="/features/users/dashboard" className="d-block">
                                <img className="group-logo" src={userInfo.sbu_logo} alt="" />
                            </Link>
                        </div>
                        <div className="group-name-section">
                            <p className="group-name">{userInfo.sbu_name}</p>
                        </div>
                        <div className="group-selection-dropdown-section">
                            <span
                                id="groupDropdown"
                                title="SBU Group"
                                className="group-icon header-icon mx-3"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="material-icons font-20">sync_alt</span>
                            </span>

                            <div
                                id="group-list-section"
                                className="group-list-section dropdown-menu"
                                aria-labelledby="groupDropdown">
                                <div className="group-list">
                                    <div className="group-list-header">
                                        <p className="group-txt">SBU Group</p>
                                    </div>
                                    <ul className="company-list">
                                        <li className="company-single-item">
                                            <p className="company-name">NIPRO JMI Pharma Ltd</p>
                                        </li>
                                        <li className="company-single-item">
                                            <p className="company-name">SBU Name 2</p>
                                        </li>
                                    </ul>
                                    <div className="group-footer">
                                        <a href="/home" className="link">
                                            Show More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-right-section d-flex align-items-center">
                        <UserProfile userInfo={userInfo} />
                    </div>
                </div>
            </header>
            <div className={`sidenavbar ${isOpen ? `expanded` : ''}`}>
                <SideBarMenu isOpen={isOpen} menuList={menu} warn />
            </div>
            <main className="main-section">{children}</main>
            <footer id="footer" className="footer-section bg-primary"></footer>
        </div>
    );
}

export default AppLayout;
