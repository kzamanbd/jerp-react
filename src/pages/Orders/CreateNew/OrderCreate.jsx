import React from 'react';
import ReactSelect from 'react-select';

import { jerpConfirm, jerpSuccess, jerpWarning } from '@/utils';

import {
    areaListByUser,
    createNewOrder,
    customerInfoForDepot,
    findProductOffer,
    getAllCustomersForOrderByDepotTerritory,
    getDICWiseUsers,
    getTerritoryList,
    orderOfferAmount,
    searchProductDataList,
} from '@/hooks/useOrder';

import esAddProduct from '@/assets/images/es_icons/es_add_product.svg';
import esCustomer from '@/assets/images/es_icons/es_customer.svg';
import esTerritory from '@/assets/images/es_icons/es_territory.svg';
import JerpBreadcrumb from '@/components/JerpBreadcrumb';
import './OrderCreate.css';

class OrderCreate extends React.Component {
    state = {
        search: '',
        isLoading: true,
        salesAreas: [],
        customerAddress: '',
        isOrderUpdate: false,
        specialDiscount: 0,
        dicWiseUsers: [],
        territoryList: [],
        selectedTerritory: null,
        customerIsLoading: false,
        customerList: [],
        selectedCustomer: null,
        productList: [],
        selectedSR: null,
        selectedRowForEdit: {},
        selectedProductWithOffer: [],
        selectedOrderTerritory: null,
        orderNote: '',
        deliveryDate: new Date().toISOString().split('T')[0],
    };

    componentDidMount() {
        console.log('OrderCreate.jsx componentDidMount');
        this.initializeOrder();
    }

    initializeOrder = () => {
        getTerritoryList().then((response) => {
            if (response.data.response_code === 200) {
                this.setState({
                    isLoading: false,
                    territoryList: response.data.territory_list.map((item) => ({
                        value: item.id,
                        label: `${item.display_code} - ${item.area_name}`,
                    })),
                });
            }
        });

        getDICWiseUsers().then((response) => {
            if (response.data.response_code === 200) {
                this.setState({
                    isLoading: false,
                    dicWiseUsers: response.data.users.da,
                });
            }
        });

        searchProductDataList().then((response) => {
            if (response.data.response_code === 200) {
                this.setState({
                    productList: response.data.product_list.map((item) => ({
                        ...item,
                        checked: false,
                        quantity: 1,
                    })),
                });
            }
        });
    };

    handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        this.setState({
            isLoading: true,
            selectedTerritory: inputValue,
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
        const { selectedTerritory, productList } = this.state;

        this.setState({
            customerIsLoading: true,
            selectedProductWithOffer: [],
            productList: productList.map((item) => ({
                ...item,
                checked: false,
                quantity: 1,
            })),
        });
        customerInfoForDepot(customer.customer_id, selectedTerritory.value).then((response) => {
            this.setState({
                customerIsLoading: false,
                selectedCustomer: response.data.customer_details,
                customerAddress: response.data.customer_details.customer_info?.customer_address,
            });
        });

        areaListByUser(customer.customer_id).then((response) => {
            this.setState({
                salesAreas: response.data.sales_areas,
            });
        });
    };

    handelAddProduct = (product) => {
        // find index of product in productList
        const { productList } = this.state;
        const currentProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentProductIndex] = {
            ...productList[currentProductIndex],
            checked: !productList[currentProductIndex].checked,
        };
        // update state
        this.setState({
            productList,
        });
    };

    handelAddProductQtyMinus = (product) => {
        const { productList } = this.state;
        const currentProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentProductIndex] = {
            ...productList[currentProductIndex],
            quantity:
                productList[currentProductIndex].quantity > 1
                    ? productList[currentProductIndex].quantity - 1
                    : 1,
        };
        // update state
        this.setState({
            productList,
        });
    };

    handelAddProductOnChangeQty = (event, product) => {
        const { productList } = this.state;
        const currentProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentProductIndex] = {
            ...productList[currentProductIndex],
            quantity: parseInt(event.target.value, 10),
        };
        // update state
        this.setState({
            productList,
        });
    };

    handelAddProductQtyPlus = (product) => {
        const { productList } = this.state;
        const currentProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentProductIndex] = {
            ...productList[currentProductIndex],
            quantity: productList[currentProductIndex].quantity + 1,
        };
        // update state
        this.setState({
            productList,
        });
    };

    handelFindProductOffer = async () => {
        const { productList, selectedCustomer, deliveryDate } = this.state;

        const selectedProductList = productList
            .filter((product) => product.checked)
            .map((item) => ({
                prod_id: item.prod_id,
                quantity: item.quantity,
            }));

        const orderDetail = {
            sbu_id: 2,
            customer_id: selectedCustomer.customer_id,
            prod_details: JSON.stringify(selectedProductList),
        };

        let selectedProductWithOffer = [];

        await findProductOffer(orderDetail).then((response) => {
            console.log(response);
            if (response.data.response_code === 200) {
                selectedProductWithOffer = response.data.data;
                this.setState({
                    selectedProductWithOffer: response.data.data,
                });
            }
        });

        const regularProductLineTotal = await selectedProductWithOffer
            .filter((product) => product.is_regular_product === 'Y')
            .reduce((acc, product) => acc + product.base_tp * product.quantity, 0);

        orderOfferAmount(regularProductLineTotal, deliveryDate).then((response) => {
            console.log(response);
            if (response.data.response_code === 200) {
                this.setState({
                    specialDiscount: response.data.discount_data.discounted_tk,
                });
            }
        });
    };

    handelProductQtyMinus = (product) => {
        const { selectedProductWithOffer, productList } = this.state;
        const currentProductIndex = selectedProductWithOffer.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        selectedProductWithOffer[currentProductIndex] = {
            ...selectedProductWithOffer[currentProductIndex],
            quantity:
                selectedProductWithOffer[currentProductIndex].quantity > 1
                    ? selectedProductWithOffer[currentProductIndex].quantity - 1
                    : 1,
        };

        const currentAddProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentAddProductIndex] = {
            ...productList[currentAddProductIndex],
            quantity: selectedProductWithOffer[currentProductIndex].quantity,
        };
        // update state
        this.setState({
            productList,
            isOrderUpdate: true,
            selectedProductWithOffer,
        });
    };

    handelProductOnChangeQty = (event, product) => {
        const { selectedProductWithOffer, productList } = this.state;
        const currentProductIndex = selectedProductWithOffer.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        selectedProductWithOffer[currentProductIndex] = {
            ...selectedProductWithOffer[currentProductIndex],
            quantity: parseInt(event.target.value, 10),
        };
        const currentAddProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentAddProductIndex] = {
            ...productList[currentAddProductIndex],
            quantity: selectedProductWithOffer[currentProductIndex].quantity,
        };
        // update state
        this.setState({
            isOrderUpdate: true,
            selectedProductWithOffer,
        });
    };

    handelProductQtyPlus = (product) => {
        const { selectedProductWithOffer, productList } = this.state;
        const currentProductIndex = selectedProductWithOffer.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        selectedProductWithOffer[currentProductIndex] = {
            ...selectedProductWithOffer[currentProductIndex],
            quantity: selectedProductWithOffer[currentProductIndex].quantity + 1,
        };

        const currentAddProductIndex = productList.findIndex(
            (item) => item.prod_id === product.prod_id
        );
        // update productList
        productList[currentAddProductIndex] = {
            ...productList[currentAddProductIndex],
            quantity: selectedProductWithOffer[currentProductIndex].quantity,
        };
        // update state
        this.setState({
            productList,
            isOrderUpdate: true,
            selectedProductWithOffer,
        });
    };

    handelSelectedProductEdit = (action, product) => {
        const { selectedProductWithOffer } = this.state;
        if (action === 'edit') {
            this.setState({
                selectedRowForEdit: product,
            });
        } else if (action === 'done') {
            this.setState({
                selectedRowForEdit: {},
            });
        } else if (action === 'delete') {
            if (selectedProductWithOffer.length > 1) {
                const currentProductIndex = selectedProductWithOffer.findIndex(
                    (item) => item.prod_id === product.prod_id
                );

                // remove product from productList
                selectedProductWithOffer.splice(currentProductIndex, 1);
                this.setState({
                    isOrderUpdate: true,
                    selectedProductWithOffer,
                });
            }
        }
    };

    handelSelectSr = (sr) => {
        this.setState({
            selectedSR: sr,
        });
    };

    handelUpdateOrder = () => {
        jerpConfirm('You want update this order.', async () => {
            const { selectedProductWithOffer, selectedCustomer, deliveryDate } = this.state;
            const selectedProductList = selectedProductWithOffer.map((item) => ({
                prod_id: item.prod_id,
                quantity: item.quantity,
            }));

            const orderDetail = {
                sbu_id: 2,
                customer_id: selectedCustomer.customer_id,
                prod_details: JSON.stringify(selectedProductList),
            };

            await findProductOffer(orderDetail).then((response) => {
                console.log(response);
                if (response.data.response_code === 200) {
                    this.setState({
                        isOrderUpdate: false,
                        selectedRowForEdit: {},
                        selectedProductWithOffer: response.data.data,
                    });
                }
            });

            const regularProductLineTotal = await selectedProductWithOffer
                .filter((product) => product.is_regular_product === 'Y')
                .reduce((acc, product) => acc + product.base_tp * product.quantity, 0);

            orderOfferAmount(regularProductLineTotal, deliveryDate).then((response) => {
                if (response.data.response_code === 200) {
                    this.setState({
                        specialDiscount: response.data.discount_data.discounted_tk,
                    });
                }
            });
        });
    };

    handelProceedOrder = () => {
        console.group('Order Details');

        const {
            orderNote,
            deliveryDate,
            customerAddress,
            selectedCustomer,
            selectedOrderTerritory,
            selectedProductWithOffer,
        } = this.state;

        if (selectedOrderTerritory == null) {
            jerpWarning('Please select a territory.');
            return;
        }

        jerpConfirm('You want to proceed this order.', () => {
            const orderDetail = {
                sbu_id: 2,
                customer_id: selectedCustomer.customer_id,
                delivery_address: customerAddress,
                order_detail: JSON.stringify(selectedProductWithOffer),
                order_note: orderNote,
                date: deliveryDate,
                sales_area_id: selectedOrderTerritory,
            };
            console.log(orderDetail);

            createNewOrder(orderDetail).then((response) => {
                console.log(response);
                if (response.data.response_code === 201) {
                    jerpSuccess('Order created successfully.');
                    this.setState({
                        selectedProductWithOffer: [],
                    });
                } else {
                    jerpWarning(response.data.message);
                }
            });
        });

        console.groupEnd();
    };

    render() {
        const {
            search,
            isLoading,
            selectedSR,
            salesAreas,
            deliveryDate,
            isOrderUpdate,
            customerAddress,
            dicWiseUsers,
            productList,
            territoryList,
            specialDiscount,
            customerList,
            selectedCustomer,
            customerIsLoading,
            selectedRowForEdit,
            selectedProductWithOffer,
        } = this.state;

        const filteredCustomerList = customerList.filter((customer) =>
            customer.display_name.toLowerCase().includes(search.toLowerCase())
        );
        const selectedProductList = productList.filter((product) => product.checked);

        const subTotal = selectedProductWithOffer.reduce(
            (acc, item) => acc + item.quantity * item.base_tp,
            0
        );
        const vatTotal = selectedProductWithOffer.reduce(
            (acc, item) => acc + item.quantity * item.base_vat,
            0
        );

        const grossTotal = subTotal + vatTotal;

        const discountTotal = selectedProductWithOffer
            .filter((product) => product.offer_accept === 'Y')
            .reduce(
                (acc, product) =>
                    acc +
                    product.base_tp * product.quantity -
                    product.price_now_per_qty * product.quantity,
                0
            );

        const grandTotal = subTotal + vatTotal - discountTotal - specialDiscount;

        const breadcrumb = ['Local Sales', 'Order', 'Create'];

        return (
            <div>
                <JerpBreadcrumb title="Create Order" breadcrumb={breadcrumb} />

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
                                            className={`card_body ${
                                                selectedCustomer?.id === customer.id ? 'active' : ''
                                            }`}
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
                            {selectedCustomer && !customerIsLoading ? (
                                <div className="col-12 orderDetails-area">
                                    <div className="row orderDetails-header">
                                        <div className="col-12 header-top">
                                            <h5>
                                                Customer ID:{' '}
                                                <span className="mr-1">
                                                    {selectedCustomer.customer_id}
                                                </span>
                                                |<span>{selectedCustomer.display_code}</span>
                                            </h5>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <p>
                                                Customer:
                                                <span className="mr-1 text-ellipsis">
                                                    {selectedCustomer.display_name}
                                                </span>
                                                -{' '}
                                                <span>
                                                    {selectedCustomer.credit_flag === 'Y'
                                                        ? 'Credit'
                                                        : 'Cash'}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-12">
                                            <p>
                                                AM:{' '}
                                                <span>
                                                    {
                                                        selectedCustomer.customer_area_info
                                                            ?.sales_force?.manager_info?.name
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12">
                                            <p>
                                                MIO:{' '}
                                                <span>
                                                    {
                                                        selectedCustomer.customer_area_info
                                                            ?.sales_force?.user_info?.name
                                                    }
                                                </span>
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
                                                    value={customerAddress}
                                                    onChange={(e) => {
                                                        this.setState({
                                                            customerAddress: e.target.value,
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label htmlFor="address">Territory:</label>
                                                <select
                                                    className="form-control-sm"
                                                    onChange={(event) => {
                                                        this.setState({
                                                            selectedOrderTerritory:
                                                                event.target.value,
                                                        });
                                                    }}>
                                                    <option>Select Territory</option>
                                                    {salesAreas.map((area) => (
                                                        <option value={area.id} key={area.id}>
                                                            {area.display_code} -{' '}
                                                            {area.area_short_name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 mt-1">
                                            <div className="p-text">
                                                SR:
                                                <div className="p-text">
                                                    <span>{selectedSR?.name}</span>
                                                    <span
                                                        className="material-icons"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        change_circle
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
                                                        <ul role="menu">
                                                            {dicWiseUsers.map((user) => (
                                                                <li
                                                                    className="dropdown-item p-0"
                                                                    key={user.id}>
                                                                    <span
                                                                        role="button"
                                                                        className="d-block text-dark p-2"
                                                                        tabIndex="0"
                                                                        onClick={() =>
                                                                            this.handelSelectSr(
                                                                                user
                                                                            )
                                                                        }>
                                                                        {user.name} - (
                                                                        {user.username})
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-12 mt-1">
                                            <div className="form-group">
                                                <label htmlFor="delivery-date">Delivery:</label>
                                                <input
                                                    className="form-control-sm"
                                                    id="delivery-date"
                                                    value={deliveryDate}
                                                    onChange={(e) => {
                                                        this.setState({
                                                            deliveryDate: e.target.value,
                                                        });
                                                    }}
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {selectedProductWithOffer.length > 0 ? (
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
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedProductWithOffer.map((product) => (
                                                        <>
                                                            <tr
                                                                className={
                                                                    selectedRowForEdit?.prod_id ===
                                                                    product.prod_id
                                                                        ? 'edit-row active'
                                                                        : ''
                                                                }
                                                                key={product.prod_id}>
                                                                <td>
                                                                    <div className="product">
                                                                        <p className="name">
                                                                            {product.prod_name}
                                                                        </p>
                                                                        <p className="code">
                                                                            Unit Price:
                                                                            <span>
                                                                                {Number(
                                                                                    product.base_tp
                                                                                ).toFixed(2)}
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {Number(
                                                                        parseFloat(
                                                                            product.base_tp
                                                                        ) +
                                                                            parseFloat(
                                                                                product.base_vat
                                                                            )
                                                                    ).toFixed(2)}
                                                                </td>
                                                                <td>
                                                                    <div className="edit-mode">
                                                                        <div className="jerp-quantity-input">
                                                                            <input
                                                                                onClick={() =>
                                                                                    this.handelProductQtyMinus(
                                                                                        product
                                                                                    )
                                                                                }
                                                                                className="minus"
                                                                                type="button"
                                                                                defaultValue="-"
                                                                            />
                                                                            <input
                                                                                className="quantity"
                                                                                type="number"
                                                                                value={
                                                                                    product.quantity
                                                                                }
                                                                                onChange={(
                                                                                    event
                                                                                ) => {
                                                                                    this.handelProductOnChangeQty(
                                                                                        event,
                                                                                        product
                                                                                    );
                                                                                }}
                                                                                min="1"
                                                                            />
                                                                            <input
                                                                                onClick={() =>
                                                                                    this.handelProductQtyPlus(
                                                                                        product
                                                                                    )
                                                                                }
                                                                                className="plus"
                                                                                type="button"
                                                                                defaultValue="+"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <p className="view-mode">
                                                                        {product.quantity}
                                                                    </p>
                                                                </td>

                                                                <td>
                                                                    <p>
                                                                        {
                                                                            product.offer
                                                                                ?.discount_percentage
                                                                        }
                                                                        %
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        {product.offer.bonus_qty
                                                                            ? parseInt(
                                                                                  parseFloat(
                                                                                      product.quantity
                                                                                  ) /
                                                                                      parseFloat(
                                                                                          product
                                                                                              .offer
                                                                                              .bonus_on
                                                                                      ),
                                                                                  10
                                                                              )
                                                                            : 0}
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        {Number(
                                                                            parseFloat(
                                                                                product.base_tp
                                                                            ) *
                                                                                parseFloat(
                                                                                    product.quantity
                                                                                )
                                                                        ).toFixed(2)}
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <div className="hover-btns">
                                                                        {selectedRowForEdit?.prod_id ===
                                                                        product.prod_id ? (
                                                                            <span
                                                                                title="Save"
                                                                                data-toggle="tooltip"
                                                                                data-placement="left">
                                                                                <span
                                                                                    className="action-btn material-icons save"
                                                                                    onClick={() =>
                                                                                        this.handelSelectedProductEdit(
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
                                                                                    this.handelSelectedProductEdit(
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
                                                                                this.handelSelectedProductEdit(
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
                                                            {product.offer_type === 'free' ? (
                                                                <tr
                                                                    className="bg-offer"
                                                                    key={Math.random()}>
                                                                    <td className="edit-mode">
                                                                        <div className="product">
                                                                            <p className="name">
                                                                                {' '}
                                                                                {
                                                                                    product.offer
                                                                                        .free_prod_name
                                                                                }
                                                                            </p>
                                                                            <span>
                                                                                Free Product
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td />
                                                                    <td />
                                                                    <td />
                                                                    <td>
                                                                        <span>
                                                                            {product.offer
                                                                                ?.bonus_qty
                                                                                ? parseInt(
                                                                                      parseFloat(
                                                                                          product.quantity
                                                                                      ) /
                                                                                          parseFloat(
                                                                                              product
                                                                                                  .offer
                                                                                                  .free_req_qty
                                                                                          ),
                                                                                      10
                                                                                  ) *
                                                                                  product.offer
                                                                                      .free_prod_qty
                                                                                : ''}
                                                                        </span>
                                                                        <span>
                                                                            {product.offer
                                                                                ?.free_prod_qty
                                                                                ? parseInt(
                                                                                      parseFloat(
                                                                                          product.quantity
                                                                                      ) /
                                                                                          parseFloat(
                                                                                              product
                                                                                                  .offer
                                                                                                  .free_req_qty
                                                                                          ),
                                                                                      10
                                                                                  )
                                                                                : ''}
                                                                        </span>
                                                                    </td>
                                                                    <td />
                                                                    <td />
                                                                </tr>
                                                            ) : (
                                                                ''
                                                            )}
                                                        </>
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
                                                            <p className="small-text">
                                                                {Number(subTotal).toFixed(2)}
                                                            </p>
                                                        </th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <th />
                                                        <th>
                                                            <p className="small-text">(+) Vat</p>
                                                        </th>
                                                        <th>
                                                            <p className="small-text">
                                                                {Number(vatTotal).toFixed(2)}
                                                            </p>
                                                        </th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <th />
                                                        <th>
                                                            <p className="small-text">
                                                                Gross Total
                                                            </p>
                                                        </th>
                                                        <th>
                                                            <p className="small-text">
                                                                {Number(grossTotal).toFixed(2)}
                                                            </p>
                                                        </th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <th />
                                                        <th>
                                                            <p className="small-text">
                                                                (-) Discount
                                                            </p>
                                                        </th>
                                                        <th>
                                                            <p className="small-text">
                                                                {Number(discountTotal).toFixed(2)}
                                                            </p>
                                                        </th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="additional-btn">
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
                                                            <p className="small-text">
                                                                {Number(specialDiscount).toFixed(2)}
                                                            </p>
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
                                                                Cancel Order
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <p className="grand-total">
                                                                Grand Total
                                                            </p>
                                                        </th>
                                                        <th>
                                                            <p className="grand-total">
                                                                {new Intl.NumberFormat().format(
                                                                    grandTotal.toFixed(2)
                                                                )}
                                                            </p>
                                                        </th>
                                                        <th />
                                                    </tr>
                                                </tfoot>
                                            </table>

                                            <div className="row btn-group justify-content-center py-2">
                                                {isOrderUpdate ? (
                                                    <button
                                                        type="button"
                                                        onClick={this.handelUpdateOrder}
                                                        className="btn btn-primary">
                                                        Update Order
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={this.handelProceedOrder}>
                                                        Proceed Order
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="eState-body">
                                            <div className="eState-container">
                                                <img
                                                    className="img-warp"
                                                    src={esAddProduct}
                                                    alt="add product"
                                                />
                                                <h5>Add Required Products</h5>
                                                <p>Product List Given Left Sidebar</p>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-toggle="modal"
                                                    data-target="#add-product-modal">
                                                    <span className="material-icons"> add </span>Add
                                                    Product
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="col-12 eState-body">
                                    {customerIsLoading ? (
                                        <div className="eState-container">
                                            <img
                                                className="img-warp"
                                                src={esCustomer}
                                                alt="State"
                                            />
                                            <h5>Loading customer information, Please wait...</h5>
                                        </div>
                                    ) : (
                                        <div className="eState-container">
                                            {customerList.length > 0 ? (
                                                <>
                                                    <img
                                                        className="img-warp"
                                                        src={esCustomer}
                                                        alt="State"
                                                    />
                                                    <h5>Select a Customer</h5>
                                                    <p>Select customer from the left sidebar.</p>
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        className="img-warp"
                                                        src={esTerritory}
                                                        alt="State"
                                                    />
                                                    <h5>Select a territory</h5>
                                                    <p>Select territory from the left sidebar.</p>
                                                </>
                                            )}
                                        </div>
                                    )}
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
                                                            search
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
                                                {productList.map((product) => (
                                                    <div
                                                        key={product.id}
                                                        className="card_body"
                                                        onClick={() =>
                                                            this.handelAddProduct(product)
                                                        }
                                                        role="button"
                                                        tabIndex="0">
                                                        <input
                                                            id={`product-${product.id}`}
                                                            type="checkbox"
                                                            value={product.id}
                                                            onChange={() =>
                                                                this.handelAddProduct(product)
                                                            }
                                                            checked={product.checked}
                                                        />
                                                        <label
                                                            htmlFor={`product-${product.id}`}
                                                            className="check-item">
                                                            <div className="row1">
                                                                <h5>
                                                                    {product.prod_name} (
                                                                    {product.com_pack_size})
                                                                </h5>
                                                            </div>
                                                            <div className="row2">
                                                                <p>
                                                                    {product.display_code} -{' '}
                                                                    {product.com_pack_desc}{' '}
                                                                    {product.offer
                                                                        ? `| ${product.offer}`
                                                                        : ''}
                                                                </p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))}
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
                                                {selectedProductList.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            <div className="product">
                                                                <p className="name">
                                                                    {product.prod_name}{' '}
                                                                    <span>
                                                                        {product.com_pack_size}
                                                                    </span>
                                                                </p>
                                                                <p className="type">
                                                                    {product.display_code} -{' '}
                                                                    {product.com_pack_desc}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="jerp-quantity-input">
                                                                <input
                                                                    onClick={() =>
                                                                        this.handelAddProductQtyMinus(
                                                                            product
                                                                        )
                                                                    }
                                                                    className="minus"
                                                                    type="button"
                                                                    value="-"
                                                                />
                                                                <input
                                                                    className="quantity"
                                                                    type="number"
                                                                    value={product.quantity}
                                                                    onChange={(event) => {
                                                                        this.handelAddProductOnChangeQty(
                                                                            event,
                                                                            product
                                                                        );
                                                                    }}
                                                                    min="1"
                                                                />
                                                                <input
                                                                    onClick={() =>
                                                                        this.handelAddProductQtyPlus(
                                                                            product
                                                                        )
                                                                    }
                                                                    className="plus"
                                                                    type="button"
                                                                    value="+"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>
                                                                {Number(
                                                                    product.base_tp *
                                                                        product.quantity
                                                                ).toFixed(2)}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <span className="circular-btn material-icons remove">
                                                                delete
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="btn-group justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.handelFindProductOffer}
                                        data-dismiss="modal">
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
                                        onChange={(event) => {
                                            this.setState({
                                                orderNote: event.target.value,
                                            });
                                        }}
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
            </div>
        );
    }
}

export default OrderCreate;
