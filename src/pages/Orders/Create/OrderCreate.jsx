import React from 'react';
import './OrderCreate.css';
import ReactSelect from 'react-select';
import esTerritory from './es_territory.svg';
import { getTerritoryList, getAllCustomersForOrderByDepotTerritory } from './useOrderCreate';

class OrderCreate extends React.Component {
    state = {
        isLoading: true,
        territoryList: [],
        customerList: [],
        search: '',
        selectedCustomer: null,
    };

    componentDidMount() {
        getTerritoryList()
            .then((response) => {
                if (response.data.response_code === 200) {
                    this.setState({
                        isLoading: false,
                        territoryList: response.data.territory_list.map((item) => ({
                            value: item.id,
                            label: `${item.display_code} - ${item.area_name}`,
                        })),
                    });
                }
            })
            .catch((error) => console.log(error));
    }

    handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        this.setState({
            isLoading: true,
        });
        const { value } = inputValue;
        getAllCustomersForOrderByDepotTerritory(value).then((response) => {
            if (response.data.response_code === 200) {
                this.setState({
                    isLoading: false,
                    customerList: response.data.sbu_customers,
                });
            }
        });
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    handleCustomerChange = (customer) => {
        console.log(customer);
        this.setState({
            selectedCustomer: customer,
        });
    };

    render() {
        const { territoryList, isLoading, customerList, search, selectedCustomer } = this.state;
        const filteredCustomerList = customerList.filter((customer) =>
            customer.display_name.toLowerCase().includes(search.toLowerCase())
        );
        console.groupEnd();
        return (
            <div>
                <div className="layout-breadcrumb">
                    <div className="breadcrumb_area">
                        <h5>Create Order</h5>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Local Sales</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="/">Order</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Create Order
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="layout-body">
                    <div className="layout-sidebar createOrder-list">
                        <div className="header">
                            <div className="row1">
                                <div className="form-group">
                                    <ReactSelect
                                        options={territoryList}
                                        onChange={this.handleInputChange}
                                        isLoading={isLoading}
                                        placeholder="Select Territory"
                                    />
                                </div>
                            </div>
                        </div>
                        {customerList.length > 0 ? (
                            <div className="header">
                                <div className="row2">
                                    <div className="form-group">
                                        <span className="material-icons"> search </span>
                                        <input
                                            onChange={(e) =>
                                                this.setState({ search: e.target.value })
                                            }
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
                                                            defaultValue="0"
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
                                                            defaultValue="1"
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
                                                    <input
                                                        className="form-control-sm"
                                                        type="date"
                                                    />
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
                                                <button
                                                    type="button"
                                                    className="btn btn-draft mr-2">
                                                    Reset
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Filter
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="row3">
                                    <h5>
                                        Total Customer: <span>{filteredCustomerList.length}</span>
                                    </h5>
                                </div>
                            </div>
                        ) : (
                            <div className="content">
                                <div className="eState-sidebar">
                                    <img className="img-warp" src={esTerritory} alt="State" />
                                    <h5>Select a Territory</h5>
                                    <p>Territory list has given on the top dropdown</p>
                                </div>
                            </div>
                        )}

                        <div className="content">
                            <div className="h-100">
                                {isLoading ? (
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="spinner-border text-primary " role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    filteredCustomerList.map((customer) => (
                                        <div
                                            className="card_body"
                                            key={customer.id}
                                            onClick={() => this.handleCustomerChange(customer)}
                                            tabIndex="0"
                                            role="button">
                                            <div className="row1">
                                                <h5>{customer.display_code}</h5>
                                                <span
                                                    className={`type ${
                                                        customer.credit_flag === 'Y'
                                                            ? 'credit'
                                                            : 'cash'
                                                    }`}>
                                                    {customer.credit_flag === 'Y'
                                                        ? 'Credit'
                                                        : 'Cash'}
                                                </span>
                                            </div>
                                            <div className="row2">
                                                <p>{customer.display_name}</p>
                                            </div>
                                            <div className="row3">
                                                <p>{customer.customer_info?.customer_address}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="layout-container">
                        <div className="container-fluid">
                            {selectedCustomer ? (
                                <div className="col-12 orderDetails-area">
                                    <div className="row orderDetails-header">
                                        <div className="col-12 header-top">
                                            <h5>
                                                Customer ID: <span className="mr-1">154613</span>|
                                                <span>DHK2520179</span>
                                            </h5>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <p>
                                                Customer:
                                                <span className="mr-1 text-ellipsis">
                                                    Nowabganj Medicine Corner Center Name
                                                </span>
                                                - <span>Cash</span>
                                            </p>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-12">
                                            <p>
                                                AM: <span>Mehedi Hassan</span>
                                            </p>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12">
                                            <p>
                                                MIO: <span>Md. Mahateb Ali</span>
                                            </p>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-12">
                                            <p>
                                                Credit Limit: <span>20,000</span>
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label htmlFor="address">Address:</label>
                                                <input
                                                    className="form-control-sm"
                                                    type="text"
                                                    id="address"
                                                    placeholder="Enter Address Here"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label htmlFor="address">Order Territory:</label>
                                                <select className="form-control-sm">
                                                    <option>Select Territory</option>
                                                    <option>Territory 1</option>
                                                    <option>Territory 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 mt-1">
                                            <div className="p-text">
                                                SR:
                                                <div
                                                    className="p-text"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <span>Mehedi Hassan</span>
                                                    <span className="material-icons">
                                                        {' '}
                                                        change_circle{' '}
                                                    </span>
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
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                            <li className="dropdown-item">
                                                                Mehedi Hassan
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label htmlFor="delivery-date">Delivery:</label>
                                                <input className="form-control-sm" type="date" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-100 d-flex flex-column">
                                        <table className="row createOrder-table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>TP + VAT</th>
                                                    <th>Quantity</th>
                                                    <th>Discount</th>
                                                    <th>Bonus</th>
                                                    <th>Total Price</th>
                                                    <th>
                                                        <div className="btn-group justify-content-end">
                                                            <span title="Save">
                                                                <span className="circular-btn material-icons save">
                                                                    done
                                                                </span>
                                                            </span>
                                                            <span title="Bulk Edit">
                                                                <span className="circular-btn material-icons">
                                                                    edit
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="edit-row active">
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Altrip. Almotriptan.
                                                            </p>
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
                                                                    defaultValue="1"
                                                                    min="1"
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
                                                            <span
                                                                title="Save"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons save">
                                                                    done
                                                                </span>
                                                            </span>
                                                            <span
                                                                title="Edit"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons">
                                                                    edit
                                                                </span>
                                                            </span>
                                                            <span
                                                                title="Remove"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons remove">
                                                                    delete
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Altrip. Almotriptan.
                                                            </p>
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
                                                            <span
                                                                title="Edit"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons">
                                                                    edit
                                                                </span>
                                                            </span>
                                                            <span
                                                                title="Remove"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons remove">
                                                                    delete
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="edit-row">
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Altrip. Almotriptan.
                                                            </p>
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
                                                            <span
                                                                title="Edit"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons">
                                                                    edit
                                                                </span>
                                                            </span>
                                                            <span
                                                                title="Remove"
                                                                data-toggle="tooltip"
                                                                data-placement="left">
                                                                <span className="action-btn material-icons remove">
                                                                    delete
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
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
                                                        </div>
                                                        |
                                                        <div
                                                            className="additional-btn"
                                                            data-toggle="modal"
                                                            data-target="#order-note-modal">
                                                            <span className="material-icons">
                                                                description
                                                            </span>
                                                            Order Note
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">Subtotal</p>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">13,032.20</p>
                                                    </th>
                                                    <th />
                                                </tr>
                                                <tr>
                                                    <th />
                                                    <th>
                                                        <p className="small-text">(+) Vat</p>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">32.20</p>
                                                    </th>
                                                    <th />
                                                </tr>
                                                <tr>
                                                    <th />
                                                    <th>
                                                        <p className="small-text">Gross Total</p>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">13,032.20</p>
                                                    </th>
                                                    <th />
                                                </tr>
                                                <tr>
                                                    <th />
                                                    <th>
                                                        <p className="small-text">(-) Discount</p>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">13,032.20</p>
                                                    </th>
                                                    <th />
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <div
                                                            className="additional-btn"
                                                            data-toggle="modal"
                                                            data-target="#attachment-modal">
                                                            <span className="material-icons">
                                                                file_present
                                                            </span>
                                                            Attachment
                                                        </div>
                                                        |
                                                        <div className="form-check ml-2">
                                                            <input
                                                                className="form-check-input my-0"
                                                                type="checkbox"
                                                                id="partial-delivery"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="partial-delivery">
                                                                Partial Delivery
                                                            </label>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">
                                                            (-) SP Discount
                                                        </p>
                                                    </th>
                                                    <th>
                                                        <p className="small-text">32.20</p>
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
                                                        <div className="reject-btn">
                                                            Cancle Order
                                                        </div>
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
                                                Proceed Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-12 eState-body">
                                    <div className="eState-container">
                                        <img className="img-warp" src={esTerritory} alt="State" />
                                        <h5>Select a Territory</h5>
                                        <p>Select territory from the left sidebar.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="add-product-modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Product</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row h-100">
                                    <div className="col-4 h-100">
                                        <div className="leftsidebar-productlist">
                                            <div className="header">
                                                <div className="row1">
                                                    <div className="form-group">
                                                        <span className="material-icons">
                                                            {' '}
                                                            search{' '}
                                                        </span>
                                                        <input
                                                            type="text"
                                                            placeholder="Search by Name, ID No"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="card_body">
                                                    <input
                                                        id="product-1"
                                                        type="checkbox"
                                                        name="product"
                                                    />
                                                    <label
                                                        htmlFor="product-1"
                                                        className="check-item">
                                                        <div className="row1">
                                                            <h5>Ansulin® Pen Cartridge </h5>
                                                            <span>300 BDT</span>
                                                        </div>
                                                        <div className="row2">
                                                            <p>
                                                                Code: <span>188721965</span>
                                                            </p>
                                                        </div>
                                                    </label>
                                                </div>

                                                <div className="card_body">
                                                    <input
                                                        id="product-15"
                                                        type="checkbox"
                                                        name="product"
                                                    />
                                                    <label
                                                        htmlFor="product-15"
                                                        className="check-item">
                                                        <div className="row1">
                                                            <h5>Ansulin® Pen Cartridge </h5>
                                                            <span>300 BDT</span>
                                                        </div>
                                                        <div className="row2">
                                                            <p>
                                                                Code: <span>188721965</span>
                                                            </p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8 h-100 pl-0">
                                        <table className="addproduct-modal-table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Total Price</th>
                                                    <th> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="product">
                                                            <p className="name">
                                                                Ace® Power <span>500mg</span>
                                                            </p>
                                                            <p className="type">Code: NP2125</p>
                                                        </div>
                                                    </td>
                                                    <td>
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
                                                    </td>
                                                    <td>
                                                        <p>300</p>
                                                    </td>
                                                    <td>
                                                        <span className="circular-btn material-icons remove">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="btn-group justify-content-center">
                                    <button type="button" className="btn btn-primary">
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="order-note-modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="OrderNote"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order Note</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-0">
                                    <textarea
                                        className="form-control"
                                        id="note"
                                        placeholder="Write order note..."
                                    />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="attachment-modal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="CustomerCard"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Attachment</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="uploader-container">
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1"
                                            />
                                        </div>
                                        <button type="button" className="btn btn-primary">
                                            Upload
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="document-file">
                                            <div className="thumbnail">
                                                <div className="view">
                                                    <span className="circular-btn material-icons">
                                                        visibility
                                                    </span>
                                                </div>
                                                <div className="cover">
                                                    <span className="material-icons">
                                                        picture_as_pdf
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="file-name">
                                                <div>
                                                    <p>Document 2021.doc</p>
                                                    <small>Added: April 14, 2021</small>
                                                </div>
                                                <div className="d-flex align-item-center">
                                                    <span className="circular-btn material-icons download">
                                                        file_download
                                                    </span>
                                                    <span className="circular-btn material-icons remove">
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="document-file">
                                            <div className="thumbnail">
                                                <div className="view">
                                                    <span className="circular-btn material-icons">
                                                        visibility
                                                    </span>
                                                </div>
                                                <div className="cover">
                                                    <span className="material-icons">
                                                        description
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="file-name">
                                                <div>
                                                    <p>Document 2021.doc</p>
                                                    <small>Added: April 14, 2021</small>
                                                </div>
                                                <div className="d-flex align-item-center">
                                                    <span className="circular-btn material-icons download">
                                                        file_download
                                                    </span>
                                                    <span className="circular-btn material-icons remove">
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="document-file">
                                            <div className="thumbnail">
                                                <div className="view">
                                                    <span className="circular-btn material-icons">
                                                        visibility
                                                    </span>
                                                </div>
                                                <div className="cover">
                                                    <span className="material-icons">
                                                        description
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="file-name">
                                                <div>
                                                    <p>Document 2021.doc</p>
                                                    <small>Added: April 14, 2021</small>
                                                </div>
                                                <div className="d-flex align-item-center">
                                                    <span className="circular-btn material-icons download">
                                                        file_download
                                                    </span>
                                                    <span className="circular-btn material-icons remove">
                                                        delete
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="document-file">
                                            <div className="thumbnail">
                                                <div className="view">
                                                    <span className="circular-btn material-icons">
                                                        visibility
                                                    </span>
                                                </div>
                                                <div className="cover">
                                                    {/* <img
                                                        alt="image"
                                                        className="img-responsive"
                                                        src="./cheque-details-1.png"
                                                    /> */}
                                                </div>
                                            </div>
                                            <div className="file-name">
                                                <div>
                                                    <p>Document 2021.doc</p>
                                                    <small>Added: April 14, 2021</small>
                                                </div>
                                                <div className="d-flex align-item-center">
                                                    <span className="circular-btn material-icons download">
                                                        file_download
                                                    </span>
                                                    <span className="circular-btn material-icons remove">
                                                        delete
                                                    </span>
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
        );
    }
}

export default OrderCreate;
