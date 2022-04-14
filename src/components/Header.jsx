import React, { useState } from 'react';

import sbuImage from '../assets/images/groups/nipro_jmi-pharma.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => setIsOpen(!isOpen);
    return (
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
                        <a href="/features/users/dashboard" className="d-block">
                            <img className="group-logo" src={sbuImage} alt="" />
                        </a>
                    </div>
                    <div className="group-name-section">
                        <p className="group-name">NIPRO JMI Pharma Ltd.</p>
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
                                    <li className="company-single-item">
                                        <p className="company-name">SBU Name 3</p>
                                    </li>
                                    <li className="company-single-item">
                                        <p className="company-name">SBU Name 4</p>
                                    </li>
                                    <li className="company-single-item">
                                        <p className="company-name">SBU Name 5</p>
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
                    <div className="chat-section">
                        <div className="chat-section-inner d-flex">
                            <div
                                id="chatDropdown"
                                title="Conversations"
                                className="chat-icon header-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="material-icons text-22">chat</span>
                                <span className="header-circle-icon" />
                            </div>

                            <div
                                id="chat-dropdown"
                                className="chat-dropdown dropdown-menu"
                                aria-labelledby="notificationDropdown">
                                <div className="chat-inner-section">
                                    <div className="chat-header">
                                        <p className="chat-txt">Conversations</p>
                                    </div>

                                    <div className="all-chat-section d-flex align-items-center justify-content-between">
                                        <p>All Conversations</p>
                                        <span className="material-icons">add</span>
                                    </div>

                                    <ul className="p-0 m-0 list-unstyled chat-unordered-list">
                                        <li className="chat-dropdown-item d-flex justify-content-between">
                                            <div className="title-description-section d-flex align-items-center w-75">
                                                <div className="icon-section">
                                                    <span className="material-icons">
                                                        directions_bike
                                                    </span>
                                                </div>
                                                <div className="title-description">
                                                    <p className="title">Message Title</p>
                                                    <p className="description">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Eaque aut repellat,
                                                        asperiores deleniti.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="time-section d-flex justify-content-end w-25">
                                                <span className="time-text">Just now</span>
                                            </div>
                                        </li>
                                        <li className="chat-dropdown-item d-flex justify-content-between">
                                            <div className="title-description-section d-flex align-items-center w-75">
                                                <div className="icon-section">
                                                    <span className="material-icons">
                                                        directions_bike
                                                    </span>
                                                </div>
                                                <div className="title-description">
                                                    <p className="title">Message Title</p>
                                                    <p className="description">
                                                        Message Description
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="time-section d-flex justify-content-end w-25">
                                                <span className="time-text">Just now</span>
                                            </div>
                                        </li>
                                        <li className="chat-dropdown-item d-flex justify-content-between">
                                            <div className="title-description-section d-flex align-items-center w-75">
                                                <div className="icon-section">
                                                    <span className="material-icons">
                                                        directions_bike
                                                    </span>
                                                </div>
                                                <div className="title-description">
                                                    <p className="title">Message Title</p>
                                                    <p className="description">
                                                        Lorem ipsum dolor sit amet consectetur,
                                                        adipisicing elit. Eaque aut repellat,
                                                        asperiores deleniti.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="time-section d-flex justify-content-end w-25">
                                                <span className="time-text">Just now</span>
                                            </div>
                                        </li>
                                        <li className="chat-dropdown-item d-flex justify-content-between">
                                            <div className="title-description-section d-flex align-items-center w-75">
                                                <div className="icon-section">
                                                    <span className="material-icons">
                                                        directions_bike
                                                    </span>
                                                </div>
                                                <div className="title-description">
                                                    <p className="title">Message Title</p>
                                                    <p className="description">
                                                        Message Description
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="time-section d-flex justify-content-end w-25">
                                                <span className="time-text">Just now</span>
                                            </div>
                                        </li>
                                        <li className="chat-dropdown-item d-flex justify-content-between">
                                            <div className="title-description-section d-flex align-items-center w-75">
                                                <div className="icon-section">
                                                    <span className="material-icons">
                                                        directions_bike
                                                    </span>
                                                </div>
                                                <div className="title-description">
                                                    <p className="title">Message Title</p>
                                                    <p className="description">
                                                        Message Description
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="time-section d-flex justify-content-end w-25">
                                                <span className="time-text">Just now</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="chat-footer">
                                        <a href="/home" className="link">
                                            Show More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notification-section">
                        <div className="notification-section-inner d-flex">
                            <div
                                id="notificationDropdown"
                                title="Notifications"
                                className="notification-icon header-icon"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <span className="material-icons">notifications</span>
                                <span className="header-circle-icon" />
                            </div>

                            <div
                                id="notification-dropdown"
                                className="notification-dropdown dropdown-menu"
                                aria-labelledby="notificationDropdown">
                                <div className="notification-inner-section">
                                    <div className="notification-header d-flex align-items-center justify-content-center">
                                        <p className="notification-txt">Notifications</p>
                                    </div>

                                    <ul className="p-0 m-0 notification-unordered-list">
                                        <li className="notification-dropdown-item">
                                            <div className="d-flex justify-content-between">
                                                <div className="title-description-icon d-flex align-items-center w-75">
                                                    <div className="notification-icon">
                                                        <img
                                                            className="rounded-image"
                                                            src="https://ui-avatars.com/api/?name=LH&background=026CD1&color=fff"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="title-description-section">
                                                        <p className="title">Notification title</p>
                                                        <p className="description">
                                                            Lorem ipsum dolor sit amet consectetur,
                                                            adipisicing elit. Rerum quisquam
                                                            perspiciatis porro deserunt nulla et,
                                                            quaerat atque.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-25 d-flex justify-content-end align-items-stretch">
                                                    <div className="action-section">
                                                        <div className="time-section">
                                                            <span className="time-text">
                                                                Just now
                                                            </span>
                                                        </div>
                                                        <div className="attachment-section">
                                                            <span className="material-icons">
                                                                attach_file
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="notification-btn-group d-flex align-items-center justify-content-center mt-3">
                                                <button
                                                    type="button"
                                                    className="notification-btn mx-2">
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="notification-btn btn-accept mx-2">
                                                    Accept
                                                </button>
                                            </div>
                                        </li>

                                        <li className="notification-dropdown-item">
                                            <div className="d-flex justify-content-between">
                                                <div className="title-description-icon d-flex align-items-center w-75">
                                                    <div className="notification-icon">
                                                        <img
                                                            className="rounded-image"
                                                            src="https://ui-avatars.com/api/?name=LH&background=026CD1&color=fff"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="title-description-section">
                                                        <p className="title">Notification title</p>
                                                        <p className="description">
                                                            Notification description
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-25 d-flex justify-content-end align-items-stretch">
                                                    <div className="action-section">
                                                        <div className="time-section">
                                                            <span className="time-text">
                                                                Just now
                                                            </span>
                                                        </div>
                                                        <div className="attachment-section">
                                                            <span className="material-icons">
                                                                attach_file
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="notification-dropdown-item">
                                            <div className="d-flex justify-content-between">
                                                <div className="title-description-icon d-flex align-items-center w-75">
                                                    <div className="notification-icon">
                                                        <img
                                                            className="rounded-image"
                                                            src="https://ui-avatars.com/api/?name=LH&background=026CD1&color=fff"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="title-description-section">
                                                        <p className="title">Notification title</p>
                                                        <p className="description">
                                                            Lorem ipsum dolor sit amet consectetur,
                                                            adipisicing elit. Rerum quisquam
                                                            perspiciatis porro deserunt nulla et,
                                                            quaerat atque.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-25 d-flex justify-content-end align-items-stretch">
                                                    <div className="action-section">
                                                        <div className="time-section">
                                                            <span className="time-text">
                                                                Just now
                                                            </span>
                                                        </div>
                                                        <div className="attachment-section">
                                                            <span className="material-icons">
                                                                attach_file
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="notification-footer">
                                        <a href="/home" className="link">
                                            Show More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-section">
                        <div className="profile-img-section">
                            <img
                                className="user-icon"
                                src="https://ui-avatars.com/api/?name=LH&background=026CD1&color=fff"
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
                                <p className="profile-name">Md. Lokman Hossain</p>
                                <span className="profile-arrow">
                                    <span className="material-icons text-sm-20">expand_more</span>
                                </span>
                            </div>
                            <p className="profile-designation">Depot In-Charge</p>
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
                                            <p>Md. Lokman Hossain</p>
                                            <small className="text-dark">Depot In-Charge</small>
                                        </div>
                                    </li>
                                    <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                        <div className="dropdown-item-icon">
                                            <span className="material-icons">swap_horiz</span>
                                        </div>
                                        <div className="dropdown-item-title">Switch Role</div>
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
                                        <div className="dropdown-item-title">Reset Password</div>
                                    </li>
                                    <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                                        <div className="dropdown-item-icon">
                                            <span className="material-icons">lock</span>
                                        </div>
                                        <div className="dropdown-item-title">Lock Screen</div>
                                    </li>
                                    <li className="profile-dropdown-item d-flex align-items-center">
                                        <div className="dropdown-item-icon">
                                            <span className="material-icons">logout</span>
                                        </div>
                                        <div className="dropdown-item-title">Logout</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
