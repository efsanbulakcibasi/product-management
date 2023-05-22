import { Link } from "react-router-dom";

const AsideMenu = () => {
    return(
        <>
        <ul className="a-side-01-A">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/kategoriler">Kategoriler</Link>
            </li>
            <li>
                <Link to="/urunler">Ürünler</Link>
            </li>
        </ul>
        </>
    )
}

export default AsideMenu;