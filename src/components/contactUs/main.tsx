import { Form, Formik } from "formik";
import style from "./style.module.css";
import Input from "../../customs/input/main";
import Typewriter from "../../images/Typewriting.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Adjust motion distance for small screens
  const imageMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : -100 },
    animate: inView
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: isMobile ? 0 : -100 },
  };

  const formMotion = {
    initial: { opacity: 0, x: isMobile ? 0 : 100 },
    animate: inView
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: isMobile ? 0 : 100 },
  };

  return (
    <section className={style.container} ref={ref}>
      <motion.div
        initial={imageMotion.initial}
        animate={imageMotion.animate}
        transition={{ duration: 2, ease: "easeOut" }}>
        <img src={Typewriter} alt="contactUs" />
      </motion.div>

      <motion.div
        className={style.designForm}
        initial={formMotion.initial}
        animate={formMotion.animate}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}>
        <h2>Get in touch</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
          }}>
          {() => (
            <Form>
              <div className={style.inputContainer}>
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Full Name"
                    name="fullName"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={8}
                    cols={70}
                    placeholder="Message"
                  />
                </div>

                <button type="submit" className={style.submitButton}>
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </section>
  );
};

export default Login;
