import { Flex, Progress } from "antd";
import style from "./style.module.css";

const skillsInDevelopment = () => {
  return (
    <section className={style.container}>
      <div>
        <p>
          I have high skills in Development, SoftWare Testing and IT
          infrastructure.
        </p>

        <p>
          Experienced IT professional with strong expertise in software
          development, end-to-end software testing (including manual and
          automated testing), and IT infrastructure management. Skilled in
          designing and executing comprehensive test plans, creating and
          maintaining test scripts using tools like Selenium and Python, and
          ensuring robust quality assurance throughout the software development
          lifecycle (SDLC). Adept at troubleshooting infrastructure issues,
          optimizing system performance, and supporting seamless deployment
          environments to enhance operational efficiency and product
          reliability.
        </p>
      </div>

      <div>
        <Flex vertical>
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

export default skillsInDevelopment;
