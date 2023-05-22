import { Outlet } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";
import Header from "../components/Header";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Layout = () => {
  const theme = useSelector((state) => state.theme)
  return (
    <div className={"page-container " + (theme.mode === "light" ? "light" : "dark")}>
    <Header/>
    <div className="line-x"></div>
      <section className="seciton-01" >
          <div className="contents">
            <div className="a-side">
              <div className="a-side-01">
                <AsideMenu />
              </div>
            </div>
            <div className="line-y"></div>
            <div className="outlet">
              <Outlet/>
            </div>
          </div>
      
      </section>
      <div className="line-x"></div>
      <footer className="footer-01">
        <div className="footer-container">
          <div className="a-item">
            <a href="">
              <AiFillGithub className="icon-01" />
            </a>
            <span>EfsanBbasi</span>
          </div>
          <hr />
          <ul className="b-item">
            <li>
              <a href="">
                <AiFillTwitterCircle className="icon-2" />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram className="icon-2" />
              </a>
            </li>
            <li>
              <a>
                <AiFillFacebook className="icon-2" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
