import salad from '../icons_assets/greek salad.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';
import lemon from '../icons_assets/lemon dessert.jpg';

export default function Testimonials() {
    const ratings = [
        {
            rating: '',
            pic: salad,
            name: '',
            review: ''
        },
        {
            rating: '',
            pic: Bruchetta,
            name: '',
            review: ''
        },
        {
            rating: '',
            pic: lemon,
            name: '',
            review: ''
        },
        {
            rating: '',
            pic: salad,
            name: '',
            review: ''
        }
    ]
    return <section className="testimonials">
        <h3>Testimonials</h3>
        <div className="rates">
            {ratings.map(element => {
                return (<div className="rate">
                <p>Rating</p>
                <div>
                <img src={element.pic} alt='pic' />
                <p>name</p>
                </div>
                <p>Review text</p>
            </div>)})}
        </div>
            
    </section>;
}