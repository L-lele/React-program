export default function Nav(props) {
    return <nav>
    <img className="logo" src="" alt="this is a log"/>
    <ul>{props.lists.map(element => {
        return <li><a href={element.url}>{element.name}</a></li>
    })}</ul>
    </nav>
}