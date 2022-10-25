import styles from "../Form/Form.module.css";
import { Button } from "../Button/Button";
import { Signin } from "../Button/Signin";
const Form = () => {
  return (
    <section className={` ${styles.page}  `}>
      <section className={` flex p2 flex-column gap3 `}>
        <Button />
        <section className="grid justify-content align-content grid-gapR ">
          <img
            src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80"
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
        <form className="flex flex-column gap ">
          <label for="input" className="heading1  fontWeight1">
            Password
          </label>
          <input className="input" type="password" placeholder="andrew@polka" />
          <section className="grid justify-content align-content  ">
            <section className="flex flex-column ">
              <section className={`  heading1 text-center fontWeight1`}>
                Forgot password?{" "}
                <span className={` ${styles.spanText} fontWeight2  pointer`}>
                  Reset
                </span>
              </section>
            </section>
          </section>
        </form>

        <section className="flex gap2 ">
          <section className="heading1  fontWeight1">Stay signed in</section>

          <section>
            <Signin />
          </section>
        </section>
        <footer>
          <section
            className={` ${styles.heading} heading1 text-center fontWeight1`}
          >
            This site is protected by reCAPTCHA and the Google{" "}
          </section>
          <section
            className={` ${styles.heading} heading1 text-center fontWeight1`}
          >
            {" "}
           <span className={` ${styles.footerSpan}`}>Privacy Policy</span>  and <span className={` ${styles.footerSpan}`}>Terms of Service apply</span>.
          </section>
        </footer>
      </section>
    </section>
  );
};

export { Form };