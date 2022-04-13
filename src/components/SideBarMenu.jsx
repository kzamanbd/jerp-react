import React from 'react'

export default function SideBarMenu() {
    return (
        <aside id="sidenavbar" className="sidenavbar">
            <div id="sidenav-menu-section" className="sidenav-menu-section">
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
                            <ul id="accordion-primary-menu" className="primary-menu-section list-unstyled">
                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <a href="index.html" className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">dashboard</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name">
                                                <span>HOME</span>
                                            </p>
                                        </a>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex" data-toggle="collapse" data-target="#collapse-primary-menu-1" aria-expanded="false">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">build</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>CONFIGURATION</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>

                                        <div id="collapse-primary-menu-1" data-parent="#accordion-primary-menu" className="secondary-menu-section collapse">
                                            <div className="secondary-menu-section-inner">
                                                <div id="accordion-secondary-menu-1" className="secondary-menu-area-inner">
                                                    <div className="secondary-menu-name-section d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse-secondary-menu-1" aria-expanded="false">
                                                        <div className="secondary-menu-icon-inner">
                                                            <span className="secondary-icon">
                                                                <span className="material-icons">integration_instructions</span>
                                                            </span>
                                                        </div>
                                                        <p className="secondary-menu-name d-flex align-items-center justify-content-between">
                                                            <span>SALES CODES</span>
                                                            <span className="right-arrow-icon">
                                                                <span className="material-icons">chevron_right</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div id="collapse-secondary-menu-1" data-parent="#collapse-primary-menu-1" className="tertiary-menu-section collapse">
                                                        <div className="tertiary-menu-section-inner">
                                                            <div id="accordion-tertiary-menu1" className="tertiary-menu-area-inner">
                                                                <div className="tertiary-menu-name-section d-flex align-items-center" data-toggle="collapse" data-target="#collapse-tertiary-menu-1" aria-expanded="false">
                                                                    <div className="tertiary-menu-icon-inner">
                                                                        <span className="tertiary-icon">
                                                                            <span className="material-icons">
                                                                                info
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <p className="tertiary-menu-name d-flex align-items-center justify-content-between">
                                                                        <span>TERTIARY MENU</span>
                                                                        <span className="right-arrow-icon">
                                                                            <span className="material-icons">chevron_right</span>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                                <div id="collapse-tertiary-menu-1" className="tertiary-poly-menu-section collapse">
                                                                    <div className="tertiary-poly-menu-section-inner">
                                                                        <div className="tertiary-poly-menu-area-inner">
                                                                            <div className="tertiary-poly-menu-name-section d-flex align-items-center">
                                                                                <div className="tertiary-poly-menu-icon-inner">
                                                                                    <span className="tertiary-poly-icon">
                                                                                        <span className="material-icons">
                                                                                            info
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                                <p className="tertiary-poly-menu-name">TERTIARY POLY MENU 1</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="tertiary-poly-menu-section-inner">
                                                                        <div className="tertiary-poly-menu-area-inner">
                                                                            <div className="tertiary-poly-menu-name-section d-flex align-items-center">
                                                                                <div className="tertiary-poly-menu-icon-inner">
                                                                                    <span className="tertiary-poly-icon">
                                                                                        <span className="material-icons">
                                                                                            info
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                                <p className="tertiary-poly-menu-name">TERTIARY POLY MENU 2</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="accordion-secondary-menu-2" className="secondary-menu-area-inner">
                                                    <div className="secondary-menu-name-section d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse-secondary-menu-2" aria-expanded="false">
                                                        <div className="secondary-menu-icon-inner">
                                                            <span className="secondary-icon">
                                                                <span className="material-icons">integration_instructions</span>
                                                            </span>
                                                        </div>
                                                        <p className="secondary-menu-name d-flex align-items-center justify-content-between">
                                                            <span>SALES AREAS</span>
                                                            <span className="right-arrow-icon">
                                                                <span className="material-icons">chevron_right</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div id="collapse-secondary-menu-2" data-parent="#collapse-primary-menu-1" className="tertiary-menu-section collapse">
                                                        <div className="tertiary-menu-section-inner">
                                                            <div id="accordion-tertiary-menu2" className="tertiary-menu-area-inner">
                                                                <div className="tertiary-menu-name-section d-flex align-items-center" data-toggle="collapse" data-target="#collapse-tertiary-menu-2" aria-expanded="false">
                                                                    <div className="tertiary-menu-icon-inner">
                                                                        <span className="tertiary-icon">
                                                                            <span className="material-icons">
                                                                                info
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <p className="tertiary-menu-name d-flex align-items-center justify-content-between">
                                                                        <span>TERTIARY MENU</span>
                                                                        <span className="right-arrow-icon">
                                                                            <span className="material-icons">chevron_right</span>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                                <div id="collapse-tertiary-menu-2" className="tertiary-poly-menu-section collapse">
                                                                    <div className="tertiary-poly-menu-section-inner">
                                                                        <div className="tertiary-poly-menu-area-inner">
                                                                            <div className="tertiary-poly-menu-name-section d-flex align-items-center">
                                                                                <div className="tertiary-poly-menu-icon-inner">
                                                                                    <span className="tertiary-poly-icon">
                                                                                        <span className="material-icons">
                                                                                            info
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                                <p className="tertiary-poly-menu-name">TERTIARY POLY MENU 1</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="tertiary-poly-menu-section-inner">
                                                                        <div className="tertiary-poly-menu-area-inner">
                                                                            <div className="tertiary-poly-menu-name-section d-flex align-items-center">
                                                                                <div className="tertiary-poly-menu-icon-inner">
                                                                                    <span className="tertiary-poly-icon">
                                                                                        <span className="material-icons">
                                                                                            info
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                                <p className="tertiary-poly-menu-name">TERTIARY POLY MENU 2</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">note_alt</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Delivery PLAN</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">local_shipping</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Delivery Schedule</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">print</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>INVOICE PRINT</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">drive_file_move</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Delivery Dispatch</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">shopping_basket</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Sales Order</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">assignment_turned_in</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Order Approval</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">description</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Invoice Delivery</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">undo</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Sales Return</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">vertical_split</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Stock Position</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">list_alt</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Requisition</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">medication</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Products</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">people</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Sales force</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">store</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Customer</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="primary-menu-section-inner">
                                    <div className="primary-menu-area-inner">
                                        <div className="primary-menu-name-section d-flex">
                                            <div className="primary-menu-icon-inner">
                                                <span className="primary-icon">
                                                    <span className="material-icons">payments</span>
                                                </span>
                                            </div>
                                            <p className="primary-menu-name d-flex align-items-center justify-content-between">
                                                <span>Collection</span>
                                                <span className="right-arrow-icon">
                                                    <span className="material-icons">chevron_right</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>


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
    )
}