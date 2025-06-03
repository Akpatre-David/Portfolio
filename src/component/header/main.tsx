import style from "./style.module.css";
import logo from "../../images/passport.jpg";
import whatsapp from "../../images/whatsapp.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/business.png";

const Header = () => {
  return (
    <>
      <section className={style.picture}>
        <p>AKPATRE DAVID</p>
        <p> independent IT Personel</p>
      </section>

      <section className={style.sideBySide}>
        <div>
          <p>Akpatre David</p>

          <p>IT Professional</p>

          <div className={style.socialContainer}>
            <img src={whatsapp} alt="whatsapp" className={style.Socialimage} />
            <img src={instagram} alt="whatsapp" className={style.Socialimage} />
            <img src={twitter} alt="twitter" className={style.Socialimage} />
            <img src={linkedin} alt="linkedin" className={style.Socialimage} />
          </div>
        </div>

        <div>
          <img src={logo} alt="Logo" className={style.image} />
        </div>
      </section>
    </>
  );
};

export default Header;
