import BreakfastMenu from './BreakfastMenu/BreakfastMenu';
import LunchMenu from './LunchMenu/LunchMenu';
import DinnerMenu from './DinnerMenu/DinnerMenu';
import './ManageDailyMenu.css';
import { Link } from 'react-router-dom';


const ManageDailyMenu = () => {
    return (
        <section className="admin-page-manage-daily-menu-wrapper">

            <h1>Current daily menu</h1>

            <section className="manage-breakfast-daily-menu">
                <div className="admin-page-manage-daily-menu-add-product-button-wrapper">
                    <Link to="/admin-panel/daily-menu/product/create">
                    <button>Add product</button>
                    </Link>
                </div>
                <ul>
                    <h1>Breakfast Menu</h1>
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <BreakfastMenu />
                    <h1>Lucnh Menu</h1>
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <h1>Dinner Menu</h1>
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />
                    <DinnerMenu />




                </ul>

            </section>


            {/* <h1>Lunch Menu</h1>
            <section className="manage-lunch-daily-menu">
                <p className="admin-page-manage-daly-menu-title">Current lunch menu</p>
                <div className="admin-page-manage-daily-menu-add-product-button-wrapper">
                    <button>Add product</button>
                </div>
                <ul>
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                    <LunchMenu />
                </ul>

            </section> */}


            {/* <h1>Dinner Menu</h1>
            <section className="manage-dinner-daily-menu">
                <p className="admin-page-manage-daly-menu-title">Current lunch menu</p>
                <div className="admin-page-manage-daily-menu-add-product-button-wrapper">
                    <button>Add product</button>
                </div>
                <ul>
               
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >

                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >
                <DinnerMenu / >

                </ul>

            </section> */}

        </section>
    )
}

export default ManageDailyMenu;