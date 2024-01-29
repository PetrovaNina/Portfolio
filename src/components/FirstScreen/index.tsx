import { t } from "i18next";
import s from "./FirstScreen.module.css";
import { forwardRef, ForwardRefRenderFunction, MutableRefObject } from "react";
import classNames from "@/functions/classNames";
import Link from "next/link";

const FirstScreen: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  props,
  ref
) => {
  return (
    <section ref={ref} {...props} className={classNames(s.section, "before")}>
        <div className={classNames(s.welcome, "container")}>
          <h1 className={s.title}>{t("Hi! I'm Nina Petrova")}</h1>
          <span className={s.info}>Frontend Developer</span>
          <Link href="#about" className={classNames(s.btn, "btn")}>
            {t("Learn more")}
          </Link>
      </div>
    </section>
  );
};

export default forwardRef(FirstScreen);

export type FirstScreenProps = React.HTMLAttributes<HTMLDivElement>;
