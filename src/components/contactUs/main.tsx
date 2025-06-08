import { Form, Formik } from "formik";
import style from "./style.module.css";
import Input from "../../customs/input/main";
import Envelop from "../../images/envelope.png";

const Login = () => {
  // const loginMutation = useMutation({
  //   mutationFn: LoginCall,
  //   mutationKey: ["login"],
  // });

  // const loginHandler = async (values: FormikValues) => {
  //   const payload: LoginPayload = {
  //     username: values?.username.trim(),
  //     password: values?.password.trim(),
  //   };
  //   try {
  //     await loginMutation.mutateAsync(payload, {
  //       onSuccess: (data) => {
  //         setUser(data);
  //         showSnackbar("Successfully logged in", { autoHideDuration: 2500 });
  //       },
  //     });
  //   } catch (error: any) {
  //     showSnackbar(error?.response?.data?.message || "Error while logging in", {
  //       autoHideDuration: 2500,
  //     });
  //   }
  // };

  return (
    <section className={style.container}>
      <div>
        <img src={Envelop} alt="" />
      </div>

      <div className={style.design}>
        <h2>Get in touch</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          // validationSchema={loginValidation}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
            // loginHandler(values);
          }}>
          {() => (
            <Form>
              <div className={style.inputContainer}>
                <Input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"
                />
                <Input type="email" placeholder="Enter Email" name="email" />

                <div>
                  <textarea
                    name="message"
                    id=""
                    placeholder="Enter your message"
                  />
                </div>

                <button type="submit" className={style.submitButton}>
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
