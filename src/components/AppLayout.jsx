import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { webMenuWithUser } from 'hooks/useSidebar';
import SideBarMenu from 'components/SideBarMenu';

function AppLayout({ children }) {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [menuList, setMenuList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        webMenuWithUser().then((response) => {
            setIsLoading(false);
            setMenuList(response.data.menu_list);
            setUserInfo(response.data.user_info);
        });
    }, []);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const onClickLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        console.log('logout');
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

                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="header-right-section d-flex align-items-center">
                            <div className="profile-section">
                                <div className="profile-img-section">
                                    <img
                                        className="user-icon"
                                        src={`https://ui-avatars.com/api/?name=${userInfo.name}&background=026CD1&color=fff`}
                                        alt="user"
                                    />
                                </div>
                                <div
                                    id="profileDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="profile-desc-section">
                                    <div className="d-flex justify-content-between">
                                        <p className="profile-name">{userInfo.name}</p>
                                        <span className="profile-arrow">
                                            <span className="material-icons text-sm-20">
                                                expand_more
                                            </span>
                                        </span>
                                    </div>
                                    <p className="profile-designation">
                                        {userInfo.role_name} ({userInfo.wh_code})
                                    </p>
                                </div>

                                <div
                                    id="profile-dropdown"
                                    className="profile-dropdown dropdown-menu"
                                    aria-labelledby="profileDropdown">
                                    <div className="profile-dropdown-inner">
                                        <ul className="profile-item">
                                            <li className="profile-dropdown-item name-section profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <img
                                                        className="profile-img rounded-circle"
                                                        src="https://ui-avatars.com/api/?name=LH&background=026CD1&color=fff"
                                                        alt="F R Summit"
                                                    />
                                                </div>
                                                <div className="dropdown-item-title">
                                                    <p>{userInfo.name}</p>
                                                    <small className="text-dark">
                                                        {userInfo.role_name}
                                                    </small>
                                                </div>
                                            </li>
                                            <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <span className="material-icons">
                                                        swap_horiz
                                                    </span>
                                                </div>
                                                <div className="dropdown-item-title">
                                                    Switch Role
                                                </div>
                                            </li>
                                            <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <span className="material-icons">settings</span>
                                                </div>
                                                <div className="dropdown-item-title">Settings</div>
                                            </li>
                                            <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <span className="material-icons">help</span>
                                                </div>
                                                <div className="dropdown-item-title">Help</div>
                                            </li>

                                            <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <span className="material-icons">password</span>
                                                </div>
                                                <div className="dropdown-item-title">
                                                    Reset Password
                                                </div>
                                            </li>
                                            <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                                <div className="dropdown-item-icon">
                                                    <span className="material-icons">lock</span>
                                                </div>
                                                <div className="dropdown-item-title">
                                                    Lock Screen
                                                </div>
                                            </li>
                                            <li className="profile-dropdown-item">
                                                <div
                                                    className="d-flex align-items-center"
                                                    onClick={onClickLogout}
                                                    role="button"
                                                    tabIndex="0">
                                                    <div className="dropdown-item-icon">
                                                        <span className="material-icons">
                                                            logout
                                                        </span>
                                                    </div>
                                                    <div className="dropdown-item-title">
                                                        Logout
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <SideBarMenu isOpen={isOpen} menuList={menuList} />
            <main id="main-section" className="main-section">
                {children}
            </main>
            <footer id="footer" className="footer-section bg-danger d-flex align-items-center">
                <div className="footer-inner text-center w-100 d-flex align-items-center">
                    <div className="d-flex text-white">
                        <p className="text-uppercase pr-2">This is JERP development site, </p>
                        <p>
                            Follow the instructions to embed the icon font in your site and learn
                            how to style your icons using CSS.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AppLayout;
