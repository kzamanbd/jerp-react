import JerpBreadcrumb from 'components/JerpBreadcrumb';
import React from 'react';

import './OrderApproval.css';

function OrderApproval() {
    const breadcrumb = ['Local Sales', 'Order', 'Create'];
    return (
        <div>
            <JerpBreadcrumb title="Order Approval" breadcrumb={breadcrumb} />
            <div className="layout-body">
                <div className="layout-sidebar orderApproval-list">
                    <div className="header">
                        <div className="row1">
                            <div className="form-group">
                                <span className="material-icons"> search </span>
                                <input
                                    type="text"
                                    placeholder="Search by Name, ID No"
                                    className="form-control"
                                />
                            </div>
                            <div className="jerp-filter-section dropdown">
                                <span
                                    className="filter-search-btn"
                                    type="button"
                                    id="show-filter-inputs"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <span className="material-icons"> filter_alt </span>
                                </span>
                                <form
                                    className="dropdown-menu filter-menu dropdown-menu-right"
                                    aria-labelledby="show-filter-inputs">
                                    <div className="checkbox-section">
                                        <h6 className="dropdown-header">Filter Order</h6>
                                        <div className="dropdown-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault">
                                                    Default checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckChecked"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckChecked">
                                                    Checked checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-section">
                                        <h6 className="dropdown-header">Filter Order</h6>
                                        <div className="dropdown-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexRadioDefault1">
                                                    Default Radio
                                                </label>
                                            </div>
                                        </div>
                                        <div className="dropdown-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexRadioDefault2">
                                                    Default checked radio
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-section">
                                        <h6 className="dropdown-header">Filter Order</h6>
                                        <div className="dropdown-item form-group">
                                            <input className="form-control-sm" type="date" />
                                        </div>
                                        <div className="dropdown-item form-group">
                                            <select className="form-control-sm">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="filter-btn-group">
                                        <button type="button" className="btn btn-draft mr-2">
                                            Reset
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Filter
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row2">
                            <h5>
                                Pending: <span>200</span>
                            </h5>
                            <div className="form-group">
                                <select className="form-control-sm">
                                    <option>Select</option>
                                    <option>Select All</option>
                                    <option>Deselect All</option>
                                    <option>Approve Selected</option>
                                    <option>Approve Selected With SR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="approved">Approved</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="drafted">Draft</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="submitted">Submitted</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="verified">Verified</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>

                        <div className="card_body">
                            <div className="row1">
                                <h5>Nowabganj Medicine Corner Center Name</h5> <p>50,000</p>
                            </div>
                            <div className="row2">
                                <p>DHK0000163131</p> <p className="pending">Pending</p>
                            </div>
                            <div className="row3">
                                <p>13 DEC 2021 1:23 pm</p> <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layout-container">
                    <div className="container-fluid">
                        <div className="col-12 orderApproval-area">
                            <div className="jerp-loader">
                                <div className="loader">
                                    <div className="cell" />
                                    <div className="cell" />
                                    <div className="cell" />
                                    <div className="cell" />
                                </div>
                                <div className="loading">
                                    Loading
                                    <span className="loading-dot">.</span>
                                    <span className="loading-dot">.</span>
                                    <span className="loading-dot">.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderApproval;
