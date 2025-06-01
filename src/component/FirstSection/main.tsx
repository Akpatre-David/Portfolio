import style from "./style.module.css";
import logo from "../../images/passport.jpg";

const FirstSection = () => {
  return (
    <>
      <section className={style.picture}>
        <p>AKPATRE DAVID</p>
        <p> independent IT Personel</p>
      </section>

      <section className={style.sideBySide}>
        <div>hello</div>
        <div>
          <img src={logo} alt="Logo" className={style.image} />
        </div>
      </section>
    </>
  );
};

export default FirstSection;
