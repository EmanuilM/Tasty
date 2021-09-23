import { Pie } from 'react-chartjs-2';
import './Tables.css';
import { Link } from 'react-router-dom';

const Tables = () => {
    const dummyData = {
        "data": [
            {
                tableName: "TB-SE1",
                tableCapacity: 3,
                tableStatus: "Active",
            },
            {
                tableName: "TB-SE2",
                tableCapacity: 7,
                tableStatus: "Active",
            },
            {
                tableName: "TB-SE3",
                tableCapacity: 10,
                tableStatus: "Active",
            },
            {
                tableName: "TB-SE4",
                tableCapacity: 3,
                tableStatus: "Busy",
            },
            {
                tableName: "TB-SE5",
                tableCapacity: 7,
                tableStatus: "Reserved",
            },
            {
                tableName: "TB-SE6",
                tableCapacity: 3,
                tableStatus: "Active",
            },
            {
                tableName: "TB-SE7",
                tableCapacity: 3,
                tableStatus: "Active",
            }
        ]
    }
 
    return (
        <section className="admin-page-manage-tables-wrapper">
            <section className="admin-page-manage-tables">
                <h1>Manage tables</h1>
                <div className="admin-page-buttons-wrapper">
                <button className="add-table-button">Add table</button>
                <div className="admin-page-tables-search-wrapper">
                    <p>Search : </p>
                    <input type="text" />
                </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Table name</th>
                            <th>Table capacity</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.data.map(x => {
                            return <tr>
                                <td>{x.tableName}</td>
                                <td>{x.tableCapacity}</td>
                                <td>
                                    <div className={x.tableStatus}>
                                        {x.tableStatus}
                                    </div>
                                </td>
                                <td className="admin-page-manage-tables-actions-wrapper">
                                    <div className="admin-page-tables-actions">
                                    <Link to={`details/${x.tableName}`}>
                                        <i className="fas fa-info"></i>
                                    </Link>
                                    <i className="fas fa-edit"></i>
                                    <i className="fas fa-trash"></i>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default Tables;