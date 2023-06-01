import restaurantA from '../icons_assets/restauranfood.jpg';
import restaurantB from '../icons_assets/restaurant.jpg';
export default function About() {
    return <section className='about'>
        <div className='content'>
            <h2>Little Lemon</h2>
            <p>Chicago</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus! Possimus facilis quod repudiandae dolore repellendus ab iusto sunt in quia libero</p></div>
            <div className='imgs'>
            <img src={restaurantA} alt="picture"/>
            <img src={restaurantB} alt="picture"/>
        </div>
    </section>;
}