import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter';
import './dashboard.css';

function Dashboard() {
    // today date
    const targetVsSalesOption = {
        series: [
            {
                name: 'Sales',
                type: 'column',
                data: [30000, 30000, 36000, 30000, 45000, 40000, 60000, 42000, 60200, 70000, 44662],
            },
            {
                name: 'Collection',
                type: 'column',
                data: [30200, 20000, 30000, 30000, 40000, 50000, 65000, 48000, 35000, 45000, 90000],
            },
            {
                name: 'Target',
                type: 'line',
                data: [30000, 25000, 36000, 30000, 45000, 35000, 64000, 52000, 59000, 36000, 39000],
            },
        ],
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        title: {
            text: 'Target vs Sales & Collection',
            style: {
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: undefined,
                color: '#36454F',
            },
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },

        labels: [
            '01/01/2021',
            '02/01/2021',
            '03/01/2021',
            '04/01/2021',
            '05/01/2021',
            '06/01/2021',
            '07/01/2021',
            '08/01/2021',
            '09/01/2021',
            '10/01/2021',
            '11/01/2021',
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            labels: {
                formatter(value) {
                    const d = 1000;
                    const s = 'k';
                    return value / d + s;
                },
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter(y) {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} points`;
                    }
                    return y;
                },
            },
        },
    };

    // Start Product Class
    const productClassOption = {
        series: [45, 20, 10, 6, 4],
        chart: {
            width: 465,
            type: 'pie',
        },
        title: {
            text: 'Product Class',
            style: {
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: undefined,
                color: '#36454F',
            },
        },
        labels: ['Top 20', 'Priority', 'General', 'Injectable', 'Cardiac'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
            {
                breakpoint: 1536,
                options: {
                    chart: {
                        width: 440,
                    },
                },
            },
        ],
    };
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="layout-container dic-dashboard-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="dic-dashboard-area">
                            <div className="row">
                                <div className="col-lg-9 col-12">
                                    <div className="row dashboard-header">
                                        <div className="col-lg-6 col-12 dashboard-greetings">
                                            <h4>Dashboard</h4>
                                            <h5>
                                                Good Morning, <span>John Doe!</span>
                                            </h5>
                                            <div className="my-3 d-flex align-items-center">
                                                <button
                                                    type="button"
                                                    className="mx-2"
                                                    onClick={() => dispatch(increment())}>
                                                    Increment ++
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mx-2"
                                                    onClick={() => dispatch(decrement())}>
                                                    Decrement --
                                                </button>
                                                page count: {count}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 dashboard-option">
                                            <div className="option-group">
                                                <p>Period Type</p>
                                                <div className="redio-group mr-2">
                                                    <label htmlFor="period-monthly">
                                                        <input
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="period-monthly"
                                                        />
                                                        <span>Monthly</span>
                                                    </label>

                                                    <label htmlFor="period-quarterly">
                                                        <input
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="period-quarterly"
                                                        />
                                                        <span>Quarterly</span>
                                                    </label>

                                                    <label htmlFor="period-yearly">
                                                        <input
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="period-yearly"
                                                        />
                                                        <span>Year&nbsp;to&nbsp;Date</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="option-group">
                                                <p>Sales Area</p>
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option>Depot/Sales Area</option>
                                                        <option>Region 1</option>
                                                        <option>Region 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div id="target-sales-chart" className="chart-box">
                                                <Chart
                                                    options={targetVsSalesOption}
                                                    series={targetVsSalesOption.series}
                                                    type="line"
                                                    height={350}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 d-flex justify-content-center">
                                            <div id="product-className-chart" className="chart-box">
                                                <Chart
                                                    options={productClassOption}
                                                    series={productClassOption.series}
                                                    type="pie"
                                                    height={350}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="date-title">Today is {today}</p>
                                            <div className="content-box">
                                                <div className="dic-sidebar-info">
                                                    <div className="dic-single-info">
                                                        <p>Today Sales</p>
                                                        <h5>55</h5>
                                                    </div>
                                                    <div className="verticle-line" />
                                                    <div className="dic-single-info">
                                                        <p>Today Collection</p>
                                                        <h5>455K</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="content-box">
                                                <div className="dic-sidebar-info">
                                                    <div className="dic-single-info">
                                                        <p>JUL-21 Sales</p>
                                                        <h5>557</h5>
                                                    </div>
                                                    <div className="verticle-line" />
                                                    <div className="dic-single-info">
                                                        <p>JUL-21 Collection</p>
                                                        <h5>455K</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="content-box">
                                                <h5 className="sidebar-title">Recent Activities</h5>
                                                <div className="dic-recent-activities">
                                                    <div className="activites-group">
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                fact_check{' '}
                                                            </span>
                                                            <p>Approve Order</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                payments{' '}
                                                            </span>
                                                            <p>Collection</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                local_shipping{' '}
                                                            </span>
                                                            <p>Delivery Schedule</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                store{' '}
                                                            </span>
                                                            <p>Customer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="content-box">
                                                <h5 className="sidebar-title">Quick Links</h5>
                                                <div className="dic-recent-activities">
                                                    <div className="activites-group">
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                fact_check{' '}
                                                            </span>
                                                            <p>Approve Order</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                payments{' '}
                                                            </span>
                                                            <p>Collection</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                local_shipping{' '}
                                                            </span>
                                                            <p>Delivery Schedule</p>
                                                        </div>
                                                        <div className="single-activites">
                                                            <span className="material-icons">
                                                                {' '}
                                                                store{' '}
                                                            </span>
                                                            <p>Customer</p>
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
            </div>
        </div>
    );
}

export default Dashboard;
