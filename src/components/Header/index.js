import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  setEmail,
  setLastName,
  setName,
} from "../../store/features/user/userSlice";
import { setSearchParam } from "../../store/features/filter/filterSlice";
import { toggleTheme } from "../../store/features/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state);
  const searchParam = useSelector((state) => state.filter.searchParam);
  const basket = useSelector((state) => state.basket);
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme);

  const login = () => {
    dispatch(setName("Efşan"));
    dispatch(setLastName("Bbasi"));
    dispatch(setEmail("efsanbbasi@icloud.com"));
  };
  return (
    <header className="header-01">
      <div className="c-wrapper">
        <div className="header-container">
          <div className="container-01">
            <Link to="/">Home</Link>
            <Link to="/urunler">Ürünler</Link>
            <Link to="/kategoriler">Kategoriler</Link>
          </div>
          <div className="mode-icon">
            <button className="mode-button"
              onClick={() => {
                dispatch(toggleTheme());
                localStorage.setItem(
                  "theme",
                  theme.mode === "dark" ? "light" : "dark"
                );
              }}
            >
              {theme.mode === "dark" && <MdLightMode className="light"/>}
              {theme.mode === "light" && <MdDarkMode className="dark"/>}
            </button>
          </div>
          <div className="container-02">
            <div className="basket-container">
              <Link className="basket-container-01" to="/sepet">
        
                  <BsFillBasket2Fill className="basket" />
              </Link>
              {basket.items.length > 0 && <span className="basket-container-02">{basket.items.length}</span>}
            </div>
            <form>
              <input
                type="text"
                placeholder="Ara..."
                value={searchParam}
                onChange={(e) => dispatch(setSearchParam(e.target.value))}
              />
              <AiOutlineFileSearch className="search-icon" />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
