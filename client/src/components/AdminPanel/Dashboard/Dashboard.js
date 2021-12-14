import './Dashboard.css';

import { MultiLineChart } from './Charts/MultiLineChart';
import { DoughnutChart } from './Charts/DoughnutChart';
import { useEffect, useState } from 'react';
import * as dashboardService from '../../../services/dashboardService';
import { useDispatch } from 'react-redux';
import { loader } from '../../../store/loader';

const Dashboard = () => {

    const dispatch = useDispatch();

    const [dashboard, setDashboard] = useState({});

    useEffect(() => {
        dispatch(loader());
        dashboardService.getAllDiscounts()
            .then(res => {
                dispatch(loader());
                setDashboard(res);
            })
            .catch(error => {
                dispatch(loader());
            })
    }, [])



    return (
        <section className="admin-page-main-content">
            <section className="admin-page-restaurant-stats">
                <ul>
                    <li>
                        <div className="stats delivery-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Order Delivered</h1>
                            <p>{dashboard?.ordersDelivered || 0}</p>
                        </div>
                    </li>
                    <li>
                        <div className="stats order-received-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Order Received</h1>
                            <p>{dashboard?.ordersReceived || 0}</p>
                        </div>
                    </li>
                    <li>
                        <div className="earnings-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Earnings</h1>
                            <p>{dashboard?.earnings || 0}</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="charts-wrapper">
                <article className="line-chart-wrapper">
                    <h3>Activity</h3>
                    <MultiLineChart data={dashboard} />
                </article >
                {/* <article className="doughnut-chart-wrapper">
                    <h3>Top Selling Products</h3>
                    <DoughnutChart data={dashboard} />

                </article> */}
            </section>
        </section>
    )
}

export default Dashboard;
