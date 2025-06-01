import style from "./style.module.css";

const ThirdSection = () => {
  return (
    <section className={style.container}>
      <p>Skills</p>
      <div className={style.divheader}>
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{ backgroundColor: card.bgColor }}
            className={style.card}>
            <div>
              <img src={card.icons} alt={card.label} />
            </div>
            <div>{card.label}</div>
            <p>{card.text}</p> {/* <-- This line displays the text */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;

export const cardData = [
  {
    bgColor: "red",
    icons: "",
    label: "CV",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!
Consectetur commodi adipisci, ipsum sunt delectus atque blanditiis
impedit aliquid similique facere cupiditate assumenda facilis harum
expedita dicta libero tempora.`,
  },
  {
    bgColor: "blue",
    icons: "",
    label: "CV",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!
Consectetur commodi adipisci, ipsum sunt delectus atque blanditiis
impedit aliquid similique facere cupiditate assumenda facilis harum
expedita dicta libero tempora.`,
  },
  {
    bgColor: "red",
    icons: "",
    label: "CV",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!
Consectetur commodi adipisci, ipsum sunt delectus atque blanditiis
impedit aliquid similique facere cupiditate assumenda facilis harum
expedita dicta libero tempora.`,
  },
];
