import './DailyMenu.css';
import image1 from '../../assets/menuImages/dailyMenuImages/menuAside1.jpg';
import image2 from '../../assets/menuImages/dailyMenuImages/menuAside2.jpg';
import image3 from '../../assets/menuImages/dailyMenuImages/menuAside3.jpg';
import MenuListItem from './MenuListItems/MenuListItem';
import { useEffect, useState } from 'react';
import * as dailyMenuService from '../../services/dailyMenuService';
import { useDispatch } from 'react-redux';
import { loader } from '../../store/loader';

const DailyMenu = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(loader());
        dailyMenuService.getProducts()
            .then(res => {
                dispatch(loader());
                setData(res);
            })
            .catch(error => {
                dispatch(loader());
                console.log(error);
            })
    }, []);


    return (
        <main>
            <section className="menu-page-wrapper">
                <article className="menu-banner-wrapper">
                    <h1>Our daily menu</h1>
                </article>
                <h1 className="menu-heading">BREAKFAST MENU</h1>
                <section className="menu-wrapper">
                    <img src={image1} alt="image" />
                    <article className="menu-list-items">
                        <ul>
                            {data.length > 0 ? data[0].slice(0, Math.ceil(data[0].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}

                        </ul>
                        <ul>
                            {data.length > 0 ? data[0].slice(Math.ceil(data[0].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}

                        </ul>
                    </article>
                </section>
                <h1 className="menu-heading">LUNCH MENU</h1>
                <section className="menu-wrapper-reverse">
                    <article className="menu-list-items">
                        <ul>
                            {data.length > 0 ? data[1].slice(0, Math.ceil(data[1].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}
                        </ul>
                        <ul>
                            {data.length > 0 ? data[1].slice(Math.ceil(data[1].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}
                        </ul>
                    </article>
                    <img src={image2} alt="image" />

                </section>

                <h1 className="menu-heading">DINNER MENU</h1>
                <section className="menu-wrapper">
                    <img src={image3} alt="image" />
                    <article className="menu-list-items">
                        <ul>
                            {data.length > 0 ? data[2].slice(0, Math.ceil(data[2].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}
                        </ul>
                        <ul>
                            {data.length > 0 ? data[2].slice(Math.ceil(data[2].length / 2)).map(x => {
                                return <MenuListItem key={x._id} itemName={x.productName} price={x.productPrice} description={x.productDescription} />
                            }) : ""}
                        </ul>
                    </article>
                </section>





            </section>


        </main>
    )
}

export default DailyMenu;