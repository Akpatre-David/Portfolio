import style from "./style.module.css";

const Skills = () => {
  return (
    <section className={style.container}>
      <p>Skills</p>
      <div className={style.divheader}>
        {cardData.map((card, index) => (
          <div key={index} className={style.card}>
            <div>
              <img src={card.icons} alt={card.label} />
            </div>
            <div>{card.label}</div>
            <p className={style.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

export const cardData = [
  {
    // bgColor: "red",
    icons: "",
    label: "CV",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!Consectetur commodi adipisci, ipsum sunt delectus atque blanditiisimpedit aliquid similique facere cupiditate assumenda facilis harumexpedita dicta libero tempora.",
  },
  {
    // bgColor: "blue",
    icons: "",
    label: "CV",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!Consectetur commodi adipisci, ipsum sunt delectus atque blanditiisimpedit aliquid similique facere cupiditate assumenda facilis harumexpedita dicta libero tempora.",
  },
  {
    icons: "",
    label: "CV",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!Consectetur commodi adipisci, ipsum sunt delectus atque blanditiisimpedit aliquid similique facere cupiditate assumenda facilis harumexpedita dicta libero tempora.",
  },
];
