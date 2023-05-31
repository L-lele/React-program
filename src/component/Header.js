import {useState} from 'react';
import Nav from './Nav';

export default function Header() {
    const [lists, setList] = useState(
        [
            {name: 'Home', url:''},
            {name: 'About', url:''},
            {name: 'Menu', url:''},
            {name: 'Reservations', url:''},
            {name: 'Order Online', url:''},
            {name: 'Login', url:''}
        ]);
    return <header>
        <Nav lists={lists}/>
    </header>;
}