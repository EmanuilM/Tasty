import './Dashboard.css';

import { MultiLineChart } from './Charts/MultiLineChart';
import { DoughnutChart } from './Charts/DoughnutChart';

const Dashboard = () => {

    return (
        <section className="admin-page-main-content">
            <section className="admin-page-restaurant-stats">
                <ul>
                    <li>
                        <div className="stats delivery-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Order Delivered</h1>
                            <p>8000</p>
                        </div>
                    </li>
                    <li>
                        <div className="stats order-received-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Order Received</h1>
                            <p>10000</p>
                        </div>
                    </li>
                    <li>
                        <div className="earnings-stats">
                            <i className="fas fa-box-open admin-panel-dashboard-icon"></i>
                            <h1>Earnings</h1>
                            <p>30000</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="charts-wrapper">
                <article className="line-chart-wrapper">
                    <h3>Activity</h3>
                    <MultiLineChart />
                </article >
                <article className="doughnut-chart-wrapper">
                    <h3>Top Selling Products</h3>
                    <DoughnutChart />

                </article>
            </section>
        </section>
    )
}

export default Dashboard;
