import Logo from '../icons_assets/Logo.svg'
export default function Nav(props) {
    return <nav>
    <img className="logo" src={Logo} alt="logo"/>
    <ul>{props.lists.map(element => {
        return <li><a href={element.url}>{element.name}</a></li>
    })}</ul>
    </nav>
}