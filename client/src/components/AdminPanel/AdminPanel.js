import './AdminPanel.css';
import Aside from './Aside/Aside';
import Dashboard from './Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Tables from './Tables/Tables';

const AdminPanel = () => {
    return (
        <main>
            <div className="admin-entire-page-wrapper">
            <section className="admin-page-wrapper">
            <Aside />
            <Switch>
            <Route path="/admin-panel" component={Dashboard} exact />
            <Route path="/admin-panel/tables" component={Tables} />
            </Switch>
            </section>
            </div>
        </main>
    )
}

export default AdminPanel;
