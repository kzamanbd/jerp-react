import { useLogoutMutation } from '@/features/auth/authApi';
import { useNavigate } from 'react-router-dom';

export default function UserProfile({ userInfo }) {
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const onClickLogout = () => {
        logout();
        localStorage.clear();
        navigate('/login');
    };
    const profilePhoto =
        userInfo?.photo ||
        `https://ui-avatars.com/api/?name=${userInfo.name}&background=026CD1&color=fff`;

    return (
        <div className="profile-section">
            <div
                id="profileDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <div className="profile-img-section">
                    <img className="user-icon" src={profilePhoto} alt="JERP" />
                </div>
                <div className="profile-desc-section">
                    <div className="d-flex justify-content-between">
                        <p className="profile-name">{userInfo.name}</p>
                        <span className="profile-arrow">
                            <span className="material-icons text-sm-20">expand_more</span>
                        </span>
                    </div>
                    <p className="profile-designation">
                        {userInfo.role_name} ({userInfo?.user_area?.display_code})
                    </p>
                </div>
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
                                    src={profilePhoto}
                                    alt="JERP"
                                />
                            </div>
                            <div className="dropdown-item-title">
                                <div>{userInfo.name}</div>
                                <small>{userInfo.role_name}</small>
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
                            <div className="dropdown-item-title">Change Password</div>
                        </li>
                        <li className="profile-dropdown-item profile-dropdown-border d-flex align-items-center">
                            <div className="dropdown-item-icon">
                                <span className="material-icons">lock</span>
                            </div>
                            <div className="dropdown-item-title">Lock Screen</div>
                        </li>
                        <li
                            className="profile-dropdown-item d-flex align-items-center"
                            role="button"
                            onClick={onClickLogout}>
                            <div className="dropdown-item-icon">
                                <span className="material-icons">logout</span>
                            </div>
                            <div className="dropdown-item-title">Logout</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
