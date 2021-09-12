import './Location.css';

const Location = () => {
    return (
    <section className="location">
        <h1 className="typographgy-heading">Location</h1>
        <article>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.331207553926!2d-0.1287341682447984!3d51.507139348535624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sbg!2sbg!4v1630701695597!5m2!1sbg!2sbg"
                width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
        </article>
    </section>
    )
}


export default Location;