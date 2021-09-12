import './MainVideo.css';
import video from '../../../assets/landPageVideo.mp4'; 

const MainVideo = () => {
    return (
        <section className="heading-video">
            <video autoPlay muted loop id="video">
                <source src={video} type="video/mp4" / >
            </video>
        </section>
    )
}

export default MainVideo;