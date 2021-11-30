import './AdminPanel.css';
import Aside from './Aside/Aside';
import Dashboard from './Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Tables from './Tables/Tables';
import TableDetails from './Tables/TableDetails/TableDetails';
import ManageTables from './Tables/ManageTables/ManageTables';
import CreateTable from './Tables/CreateTable/CreateTable';
import ManageDailyMenu from './ManageDailyMenu/ManageDailyMenu';
import AddProductToMenu from './ManageDailyMenu/AddProductToDailyMenu/AddProductToDailyMenu';
import EditProduct from './ManageDailyMenu/EditProduct/EditProduct';
import ManageMenu from './ManageMenu/ManageMenu';
import ManageMenuCategory from './ManageMenu/ManageMenuCategory/ManageMenuCategory';
import AddProductToCategory from './ManageMenu/AddProductToCategory/AddProductToCategory';
import EditMenuProduct from './ManageMenu/EditMenuProduct/EditMenuProduct';
import ManageOrders from './ManageOrders/ManageOrders';
import OrderDetails from './ManageOrders/OrderDetails/OrderDetails';
import ManageDiscounts from './ManageDiscounts/ManagaDiscounts';
import MakeAccount from './MakeAccount/MakeAccount';

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
            <Route path="/admin-panel/daily-menu/product/create" component={AddProductToMenu} />
            <Route path="/admin-panel/daily-menu/product/edit/:id" component={EditProduct} />
            <Route path="/admin-panel/manage/menu" component={ManageMenu} exact />
            <Route path="/admin-panel/manage/menu/add-product" component={AddProductToCategory} exact />
            <Route path="/admin-panel/manage/menu/:category" component={ManageMenuCategory} exact />
            <Route path="/admin-panel/manage/menu/product/edit/:id" component={EditMenuProduct} exact />
            <Route path="/admin-panel/manage/orders/:page" component={ManageOrders} exact />
            <Route path="/admin-panel/manage/order/details/:id" component={OrderDetails} exact />
            <Route path="/admin-panel/discounts" component={ManageDiscounts}  />
            <Route path="/admin-panel/make-account" component={MakeAccount}  />
            
            </Switch>
            </section>
            </div>
        </main>
    )
}

export default AdminPanel;
