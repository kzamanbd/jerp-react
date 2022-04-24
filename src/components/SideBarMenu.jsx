import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBarMenu({ isOpen, menuList }) {
    return (
        <aside id="side-navbar" className={`side-navbar ${isOpen ? `expanded` : ''}`}>
            <div id="side-nav-menu-section" className="side-nav-menu-section">
                <div className="menu-section-area">
                    <div className="menu-section-inner">
                        <div className="search-section">
                            <div className="form-group has-search">
                                <span className="form-control-feedback">
                                    <span className="material-icons">search</span>
                                </span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>

                        <div className="dynamic-menu">
                            <ul
                                id="accordion-primary-menu"
                                className="primary-menu-section list-unstyled">
                                {menuList.map((primary) => (
                                    <li className="primary-menu-section-inner" key={primary.id}>
                                        <div className="primary-menu-area-inner">
                                            <div
                                                className="primary-menu-name-section d-flex"
                                                data-toggle="collapse"
                                                data-target={`#collapse-primary-menu-${primary.id}`}
                                                aria-expanded="false">
                                                <div className="primary-menu-icon-inner">
                                                    <span className="primary-icon">
                                                        <span
                                                            className={`${primary.icon_class} icon-size-24`}
                                                        />
                                                    </span>
                                                </div>
                                                {primary?.menu?.length > 0 ? (
                                                    <p className="primary-menu-name d-flex align-items-center justify-content-between text-dark">
                                                        <span>{primary.menu_name}</span>
                                                        <span className="right-arrow-icon">
                                                            <span className="material-icons">
                                                                chevron_right
                                                            </span>
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <Link
                                                        to={primary?.feature?.url}
                                                        className="primary-menu-name d-flex align-items-center justify-content-between">
                                                        <span>{primary.menu_name}</span>
                                                    </Link>
                                                )}
                                            </div>

                                            {primary?.menu?.length > 0 ? (
                                                <div
                                                    id={`collapse-primary-menu-${primary.id}`}
                                                    data-parent="#accordion-primary-menu"
                                                    className="secondary-menu-section collapse">
                                                    <div className="secondary-menu-section-inner">
                                                        {primary?.menu?.map((secondary) => (
                                                            <div
                                                                key={secondary.id}
                                                                id="accordion-secondary-menu-1"
                                                                className="secondary-menu-area-inner">
                                                                {secondary?.menu?.length > 0 ? (
                                                                    <div
                                                                        className="secondary-menu-name-section d-flex align-items-center justify-content-between"
                                                                        data-toggle="collapse"
                                                                        data-target={`#collapse-secondary-menu-${secondary.id}`}
                                                                        aria-expanded="false">
                                                                        <div className="secondary-menu-icon-inner">
                                                                            <span className="secondary-icon">
                                                                                <span className="shape" />
                                                                            </span>
                                                                        </div>
                                                                        <p className="secondary-menu-name d-flex align-items-center justify-content-between">
                                                                            <span>
                                                                                {
                                                                                    secondary.menu_name
                                                                                }
                                                                            </span>
                                                                            <span className="right-arrow-icon">
                                                                                <span className="material-icons">
                                                                                    chevron_right
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                ) : (
                                                                    <Link
                                                                        to={secondary?.feature?.url}
                                                                        className="secondary-menu-name-section d-flex align-items-center justify-content-between">
                                                                        <div className="secondary-menu-icon-inner">
                                                                            <span className="secondary-icon">
                                                                                <span className="shape" />
                                                                            </span>
                                                                        </div>
                                                                        <p className="secondary-menu-name d-flex align-items-center justify-content-between">
                                                                            <span>
                                                                                {
                                                                                    secondary.menu_name
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                )}

                                                                {secondary?.menu?.length > 0 ? (
                                                                    <div
                                                                        id={`collapse-secondary-menu-${secondary.id}`}
                                                                        data-parent={`#collapse-primary-menu-${primary.id}`}
                                                                        className="tertiary-menu-section collapse">
                                                                        <div className="tertiary-menu-section-inner">
                                                                            {secondary?.menu?.map(
                                                                                (tertiary) => (
                                                                                    <div
                                                                                        key={
                                                                                            tertiary.id
                                                                                        }
                                                                                        className="tertiary-menu-area-inner">
                                                                                        <div className="tertiary-menu-name-section d-flex align-items-center">
                                                                                            <div className="tertiary-menu-icon-inner">
                                                                                                <span className="tertiary-icon">
                                                                                                    <span className="shape" />
                                                                                                </span>
                                                                                            </div>
                                                                                            <p className="tertiary-menu-name d-flex align-items-center justify-content-between">
                                                                                                <span>
                                                                                                    {
                                                                                                        tertiary.menu_name
                                                                                                    }
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    ''
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bottom-logo-section d-flex justify-content-center align-items-center text-center">
                            <a href="/feature/users/dashboard" className="app-info">
                                <span className="material-icons">info</span>
                            </a>
                            <a href="index.html" className="app-version">
                                <span className="app-name">JERP</span>
                                <span className="text-dark">Version: 2.10.20215</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
