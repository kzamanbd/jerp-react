import React, { useEffect, useState } from 'react';
import JerpBreadcrumb from 'components/JerpBreadcrumb';
import { dateFormat } from 'utils';

import './OrderApproval.css';
import esOrder from 'assets/images/es_icons/es_order.svg';

import { pendingApprovalOrderCustomerList, pendingOrderDetails } from 'hooks/useOrder';

function OrderApproval() {
    const [pendingOrderCustomerList, setPendingOrderCustomerList] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [orderDetailIsLoading, setOrderDetailIsLoading] = useState(false);
    const [orderDetailRowEdit, setOrderDetailRowEdit] = useState(null);

    useEffect(() => {
        pendingApprovalOrderCustomerList().then((response) => {
            if (response.data.response_code) {
                setPendingOrderCustomerList(response.data.orders_info);
            }
        });
    }, []);

    const handleOrderDetails = (orderId) => {
        setOrderDetailIsLoading(true);
        pendingOrderDetails(orderId).then((response) => {
            if (response.data.response_code) {
                console.log(response.data.order_info);
                setOrderDetails(response.data.order_info);
                setOrderDetailIsLoading(false);
            }
        });
    };

    const handelSelectedProductEdit = (action, product) => {
        if (action === 'edit') {
            setOrderDetailRowEdit(product);
        } else if (action === 'done') {
            setOrderDetailRowEdit(null);
        } else if (action === 'delete') {
            if (orderDetails.order_details.length > 1) {
                const currentProductIndex = orderDetails.order_details.findIndex(
                    (item) => item.id === product.id
                );
                // remove product from productList
                orderDetails.order_details.splice(currentProductIndex, 1);
                setOrderDetails({ ...orderDetails });
            }
        }
    };

    const breadcrumb = ['Local Sales', 'Order', 'Approval'];
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
                                Pending: <span>{pendingOrderCustomerList.length}</span>
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
                        {pendingOrderCustomerList.map((order) => (
                            <div className="card_body" key={order.id}>
                                <div
                                    onClick={() => handleOrderDetails(order.id)}
                                    role="button"
                                    tabIndex="0">
                                    <div className="row1">
                                        <h5>{order.sbu_customer_info?.display_name}</h5>
                                        <p>{order.net_total}</p>
                                    </div>
                                    <div className="row2">
                                        <p>{order.order_no}</p>
                                        <p className="approval verified">
                                            {order.is_verified === 'Y' && 'Verified'}
                                        </p>
                                    </div>
                                </div>
                                <div className="row3">
                                    <p>
                                        {order.verified_date
                                            ? dateFormat(order.verified_date)
                                            : dateFormat(order.order_date)}
                                    </p>
                                    <input type="checkbox" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="layout-container">
                    <div className="container-fluid">
                        {orderDetails && !orderDetailIsLoading ? (
                            <div className="col-12 orderApproval-area">
                                <div className="row orderApproval-header">
                                    <div className="col-12 header-top">
                                        <h5>
                                            Order No: <span>{orderDetails.order_no}</span>
                                        </h5>
                                        <div className="header-action-btns">
                                            <span title="Print">
                                                <span className="circular-btn material-icons">
                                                    print
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12">
                                        <p>
                                            Customer:{' '}
                                            <span className="mr-1">
                                                {orderDetails.sbu_customer_info?.display_name}
                                            </span>{' '}
                                            -
                                        </p>
                                        <p
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span>Cash</span>
                                            <span title="Change SR" className="material-icons">
                                                change_circle
                                            </span>
                                        </p>
                                        <div className="dropdown-menu jerp-multiPurpose-dropdown mt-2">
                                            <h6 className="dropdown-header">Payment Type</h6>
                                            <div className="dropdown-divider" />
                                            <ul>
                                                <li className="dropdown-item">Cash</li>
                                                <li className="dropdown-item">Credit</li>
                                            </ul>
                                        </div>
                                        <p />
                                        <p />
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-12">
                                        <p>
                                            Territory:
                                            <span>{orderDetails.get_sales_area?.area_name}</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <p>
                                            Credit Limit:{' '}
                                            <span>
                                                {orderDetails.sbu_customer_info?.credit_limit}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        <p>
                                            Cash Due: <span>{orderDetails.cash_due_amt}</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <p>
                                            Address: <span>{orderDetails.delivery_address}</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <p>
                                            Submitted By:{' '}
                                            <span>{orderDetails.created_by_info?.name}</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12">
                                        <p>SR:</p>
                                        <p
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span>Cash</span>
                                            <span title="Change SR" className="material-icons">
                                                change_circle
                                            </span>
                                        </p>
                                        <div className="dropdown-menu jerp-multiPurpose-dropdown mt-2">
                                            <h6 className="dropdown-header">SR List</h6>
                                            <div className="dropdown-divider" />
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search by Name"
                                                />
                                            </div>
                                            <ul>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                                <li className="dropdown-item">Mehedi Hassan</li>
                                            </ul>
                                        </div>
                                        <p />
                                        <p />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        <div className="form-group">
                                            <label htmlFor="delivery-date">Delivery:</label>
                                            <input className="form-control-sm" type="date" />
                                        </div>
                                    </div>
                                </div>

                                <table className="row orderApproval-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>TP + VAT</th>
                                            <th>Quantity</th>
                                            <th>Discount</th>
                                            <th>Bonus</th>
                                            <th>Total Price</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderDetails.order_details.map((product) => (
                                            <tr
                                                className={
                                                    orderDetailRowEdit?.id === product.id
                                                        ? 'edit-row active'
                                                        : ''
                                                }
                                                key={product.id}>
                                                <td>
                                                    <div className="product">
                                                        <p className="name">Altrip. Almotriptan.</p>
                                                        <p className="code">
                                                            Unit Price:<span>329.84</span>
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>01</td>
                                                <td>
                                                    <div className="edit-mode">
                                                        <div className="jerp-quantity-input">
                                                            <input
                                                                className="minus"
                                                                type="button"
                                                                defaultValue="-"
                                                            />
                                                            <input
                                                                className="quantity"
                                                                type="number"
                                                                defaultValue="0"
                                                                min="0"
                                                            />
                                                            <input
                                                                className="plus"
                                                                type="button"
                                                                defaultValue="+"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="view-mode">00098</p>
                                                </td>

                                                <td>
                                                    <p>15%</p>
                                                </td>
                                                <td>
                                                    <p>0</p>
                                                </td>
                                                <td>
                                                    <p>300</p>
                                                </td>
                                                <td>
                                                    <div className="hover-btns">
                                                        {orderDetailRowEdit?.id === product.id ? (
                                                            <span
                                                                title="Save"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span
                                                                    className="action-btn material-icons save"
                                                                    onClick={() =>
                                                                        handelSelectedProductEdit(
                                                                            'done',
                                                                            product
                                                                        )
                                                                    }
                                                                    role="button"
                                                                    tabIndex="0">
                                                                    done
                                                                </span>
                                                            </span>
                                                        ) : (
                                                            <span
                                                                title="Edit"
                                                                data-toggle="tooltip"
                                                                data-placement="left"
                                                                onClick={() =>
                                                                    handelSelectedProductEdit(
                                                                        'edit',
                                                                        product
                                                                    )
                                                                }
                                                                role="button"
                                                                tabIndex="0">
                                                                <span className="action-btn material-icons">
                                                                    edit
                                                                </span>
                                                            </span>
                                                        )}
                                                        <span
                                                            title="Remove"
                                                            data-toggle="tooltip"
                                                            data-placement="left"
                                                            onClick={() =>
                                                                handelSelectedProductEdit(
                                                                    'delete',
                                                                    product
                                                                )
                                                            }
                                                            role="button"
                                                            tabIndex="0">
                                                            <span className="action-btn material-icons remove">
                                                                delete
                                                            </span>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="collapse" id="footer-expand">
                                        <tr>
                                            <th>
                                                <div
                                                    className="additional-btn"
                                                    data-toggle="modal"
                                                    data-target="#add-product-modal">
                                                    <span className="material-icons">
                                                        add_circle
                                                    </span>
                                                    Add Product
                                                </div>{' '}
                                                |
                                                <div className="additional-btn">
                                                    <span className="material-icons">
                                                        description
                                                    </span>
                                                    Order Note
                                                </div>
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">Subtotal</p>{' '}
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">13,032.20</p>{' '}
                                            </th>
                                            <th />
                                        </tr>
                                        <tr>
                                            <th />
                                            <th>
                                                {' '}
                                                <p className="small-text">(+) Vat</p>{' '}
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">32.20</p>
                                            </th>
                                            <th />
                                        </tr>
                                        <tr>
                                            <th />
                                            <th>
                                                {' '}
                                                <p className="small-text">Gross Total</p>{' '}
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">13,032.20</p>{' '}
                                            </th>
                                            <th />
                                        </tr>
                                        <tr>
                                            <th />
                                            <th>
                                                {' '}
                                                <p className="small-text">(-) Discount</p>{' '}
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">13,032.20</p>
                                            </th>
                                            <th />
                                        </tr>
                                        <tr>
                                            <th>
                                                <div
                                                    className="additional-btn"
                                                    data-toggle="modal"
                                                    data-target="#">
                                                    <span className="material-icons">info</span>
                                                    Additional Information
                                                </div>
                                                |
                                                <div
                                                    className="additional-btn"
                                                    data-toggle="modal"
                                                    data-target="#">
                                                    <span className="material-icons">
                                                        file_present
                                                    </span>
                                                    Attachment
                                                </div>
                                                |
                                                <div className="additional-btn">
                                                    <div
                                                        className="d-flex align-item-center"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <span className="material-icons">
                                                            account_tree
                                                        </span>
                                                        Partial Deliveries{' '}
                                                        <span className="counter">12</span>{' '}
                                                    </div>

                                                    <div className="dropdown-menu jerp-multiPurpose-dropdown mb-2">
                                                        <h6 className="dropdown-header">
                                                            Invoice List
                                                        </h6>
                                                        <div className="dropdown-divider" />
                                                        <ul>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                            <li
                                                                className="dropdown-item"
                                                                data-toggle="modal"
                                                                data-target="#invoice-modal">
                                                                DHK2112000158
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">(-) SP Discount</p>{' '}
                                            </th>
                                            <th>
                                                {' '}
                                                <p className="small-text">32.20</p>{' '}
                                            </th>
                                            <th />
                                        </tr>
                                    </tfoot>
                                    <tfoot>
                                        <tr className="grand-total-row">
                                            <th colSpan="1">
                                                <div
                                                    className="fold-btns"
                                                    title="Additional Info"
                                                    data-toggle="tooltip"
                                                    data-placement="left">
                                                    <span
                                                        data-toggle="collapse"
                                                        data-target="#footer-expand"
                                                        aria-expanded="false"
                                                        aria-controls="footer-expand"
                                                        className="material-icons"
                                                    />
                                                </div>
                                                <div className="reject-btn">Reject Order</div>
                                            </th>
                                            <th>
                                                <p className="grand-total">Grand Total</p>
                                            </th>
                                            <th>
                                                <p className="grand-total">14,505.55</p>
                                            </th>
                                            <th />
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className="row btn-group justify-content-center py-2">
                                    <button type="button" className="btn btn-primary">
                                        Approve
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="col-12 orderApproval-area">
                                {orderDetailIsLoading ? (
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
                                ) : (
                                    <div className="col-12 eState-body">
                                        <div className="eState-container">
                                            <img className="img-warp" src={esOrder} alt="State" />
                                            <h5>Select an Order</h5>
                                            <p>Order list has given on the left sidebar.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderApproval;
