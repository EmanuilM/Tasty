import MainVideo from './MainVideo/MainVideo';
import AboutUs from './AboutUs/AboutUs';
import MenuSection from './MenuSection/MenuSection';
import Gallery from './Gallery/Gallery';
import Location from './Location/Location';
import { useEffect } from 'react/cjs/react.development';

const HomePage = () => { 

  
    return ( 
        <main>
            <MainVideo />
            <AboutUs />
            <MenuSection / >
            <Gallery / >
            <Location / >
        </main>
        

    )
}


export default HomePage;