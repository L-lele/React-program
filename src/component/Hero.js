import dish from '../icons_assets/restauranfood.jpg'
export default function Hero() {
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus! Possimus facilis quod repudiandae dolore repellendus ab iusto sunt in quia libero officia quibusdam eaque enim, laudantium amet vitae ducimus?';
    return <section className="hero">
        <div>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p className="description">{description}</p>
            <button>Reserve a Table</button>
        </div>
        <img src={dish} alt="this is a picture" />
    </section>;
}