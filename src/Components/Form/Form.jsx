import styles from "../Form/Form.module.css";
import { Button } from "../Button/Button";
import { Signin } from "../Button/Signin";
import { AiOutlineEye } from "react-icons/ai";
const Form = () => {
  return (
    <section className={` ${styles.page} flex  flex-column`}>
      <section className={` flex p2 flex-column gap3 `}>
        <section>
          {" "}
          <Button />
        </section>
        <section className="grid justify-content align-content grid-gapR ">
          <img
            src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1666701300/opypjpsweaheb0fzbyt4.jpg"
            className={` ${styles.img}  `}
          ></img>

          <section className="flex flex-column ">
            <section
              className={` ${styles.heading} heading1 text-center fontWeight1`}
            >
              Personal Account
            </section>
            <section className="heading2">Andrew@polka.io</section>
          </section>
        </section>
        <section className="flex flex-column  gap">
          {" "}
          <section>
            <label for="input" className="heading1  fontWeight1">
              Password
            </label>
          </section>
          <section>
            <input className=" p3" type="password" placeholder="andrew@polka" />
            <AiOutlineEye size={25} className={` ${styles.icons} p3 pointer`} />
          </section>
        </section>

        <section className="flex justify-content align-content  ">
          <section className="flex flex-column ">
            <section className={`  heading1 text-center fontWeight1`}>
              Forgot password?{" "}
              <span className={` ${styles.spanText} fontWeight2  pointer`}>
                Reset
              </span>
            </section>
          </section>
        </section>

        <section className={` ${styles.mobile} flex gap2`}>
          <section className="heading1  fontWeight1 align-self ">
            Stay signed in
          </section>

          <section>
            <Signin />
          </section>
        </section>
      </section>
      <footer className="p2">
        <section
          className={` ${styles.heading} heading1 text-center fontWeight1`}
        >
          This site is protected by reCAPTCHA and the Google{" "}
        </section>
        <section
          className={` ${styles.heading} heading1 text-center fontWeight1`}
        >
          {" "}
          <span className={` ${styles.footerSpan}`}>
            Privacy Policy
          </span> and{" "}
          <span className={` ${styles.footerSpan}`}>
            Terms of Service apply
          </span>
          .
        </section>
      </footer>
    </section>
  );
};

export { Form };
