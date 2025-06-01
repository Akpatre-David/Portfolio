import { Flex, Progress } from "antd";
import style from "./style.module.css";

const FourthSection = () => {
  return (
    <section className={style.container}>
      <div>
        <p>I have high skills in Development, testing and IT infrasture</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus!
          Consectetur commodi adipisci, ipsum sunt delectus atque blanditiis
          impedit aliquid similique facere cupiditate assumenda facilis harum
          expedita dicta libero tempora.
        </p>
      </div>

      <div>
        <Flex gap="small" vertical>
          <p>React</p>
          <Progress percent={30} />

          <p>Quality Assurance</p>
          <Progress percent={60} />

          <p>React</p>
                  <Progress percent={30} />
                  
        </Flex>
      </div>
    </section>
  );
};

export default FourthSection;
