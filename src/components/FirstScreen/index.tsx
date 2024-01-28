import { t } from "i18next";
import s from "./FirstScreen.module.css";
import { forwardRef, ForwardRefRenderFunction, MutableRefObject } from "react";

const FirstScreen: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => {
  return (
    <section ref={ref} {...props}>
      <div className="container welcome-container">
        <div className="welcome-message">
          <h1>{t("Hi! I'm Nina Petrova")}</h1>
          <p>Frontend Developer</p>
          <a href="#about" className="btn">
            {t("Learn more")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(FirstScreen);

export type FirstScreenProps = React.HTMLAttributes<HTMLDivElement>;

