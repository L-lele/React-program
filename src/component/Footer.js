import mario from '../icons_assets/Mario and Adrian b.jpg';
export default function Footer() {
    const navLists= [
            {name: 'Home', url:''},
            {name: 'About', url:''},
            {name: 'Menu', url:''},
            {name: 'Reservations', url:''},
            {name: 'Order Online', url:''},
            {name: 'Login', url:''}
        ];
        const contact= [
            {name: 'Adress', url:''},
            {name: 'phone number', url:''},
            {name: 'email', url:''}
        ];
        const social= [
            {name: 'Adress', url:''},
            {name: 'phone number', url:''},
            {name: 'email', url:''}
        ];

    return <footer>
        <img src={mario} alt="picture"/>
            <div>
                <p>Doormat <br />Navigation</p>
                <ul>{navLists.map(element => {
        return <li><a href={element.url}>{element.name}</a></li>
    })}</ul>
            </div>
            <div><p>contact</p>
                <ul>{contact.map(element => {
        return <li><a href={element.url}>{element.name}</a></li>
    })}</ul></div>
            <div><p>Social Media</p>
                <ul>{social.map(element => {
        return <li><a href={element.url}>{element.name}</a></li>
    })}</ul></div>

    </footer>;
}