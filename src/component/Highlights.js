
import Bruchetta from '../icons_assets/bruchetta.svg';
import lemon from '../icons_assets/lemon dessert.jpg';
import salad from '../icons_assets/greek salad.jpg';


export default function Highlights() {
    const cards = [
        {
            pic: salad,
            name: 'Greek salad', 
            price: 12.99,
            discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus! Possimus facilis quod repudiandae dolore repellendus ab iusto sunt in quia libero',
        },
        {
            pic: Bruchetta,
            name: 'Bruchetta', 
            price: 5.99,
            discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus! Possimus facilis quod repudiandae dolore repellendus ab iusto sunt in quia libero',
        },
        {
            pic: lemon,
            name: 'Lemon dessert', 
            price: 5.00,
            discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus! Possimus facilis quod repudiandae dolore repellendus ab iusto sunt in quia libero',
        },
    ]
    return <section className="highlights">
        <div>
        <h3>Specials</h3>
        <button>Online Menu</button>
        </div>
        <div className='cards'>
            {cards.map(element => {
                return (<div className='card'>
                    <img src={element.pic} />
                    <p className='name'>{element.name}</p>
                    <p className='price'>${element.price}</p>
                    <p className='description'>{element.discription}</p>
                    <a href="#">Order a delivery <i></i></a>
                </div>)
            })}
            
        </div>
    </section>;
}