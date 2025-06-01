import style from "./style.module.css";
import logo from "../../images/passport.jpg";

const SecondSection = () => {
  return (
    <section className={style.container}>
      <div>
        <img src={logo} alt="Logo" className={style.image} />
      </div>

      <div>
        <p>About Me</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nam
          quia eaque. Libero error cum optio quidem nulla eos sint quasi,
          officiis at tenetur doloribus officia pariatur veritatis, architecto
          aut?
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
