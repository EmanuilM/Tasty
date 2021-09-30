import './AdminPanel.css';
import Aside from './Aside/Aside';
import Dashboard from './Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Tables from './Tables/Tables';
import TableDetails from './Tables/TableDetails/TableDetails';
import ManageTables from './Tables/ManageTables/ManageTables';
import CreateTable from './Tables/CreateTable/CreateTable';
import ManageDailyMenu from './ManageDailyMenu/ManageDailyMenu';

const AdminPanel = () => {
    return (
        <main>
            <div className="admin-entire-page-wrapper">
            <section className="admin-page-wrapper">
            <Aside />
            <Switch>
            <Route path="/admin-panel" component={Dashboard} exact />
            <Route path="/admin-panel/tables" component={Tables} exact />
            <Route path="/admin-panel/tables/create" component={CreateTable}  />
            <Route path="/admin-panel/tables/details/:tableID" component={TableDetails} />
            <Route path="/admin-panel/tables/manage/:tableID" component={ManageTables} />
            <Route path="/admin-panel/manage/daily-menu" component={ManageDailyMenu} />

            </Switch>
            </section>
            </div>
        </main>
    )
}

export default AdminPanel;
