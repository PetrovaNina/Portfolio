import { t } from "i18next";
import s from "./About.module.css";
import { forwardRef, ForwardRefRenderFunction, MutableRefObject } from "react";
import { Trans, useTranslation } from "react-i18next";

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => {
  const { t } = useTranslation();
  return (
    <section ref={ref} {...props} id="about">
      <div className="about-container container">
        <h2 className="section-title">{t("About me")}</h2>
        <div className="about-person">
          <p>{t("frontendDeveloperIntroduction")}</p>
          <p>{t('collaborationExperience')}</p>
        </div>

        <div
          className="about-skills animation smoothUp flex image-text-arrow"
          // style="padding-bottom: 0;"
        >
          <div
            className="image-text-arrow__images"
            // style="width: 40%;"
          >
            <div
              className="container3-4"
              // style="background: url('./img/cover2.png') no-repeat center / cover;"
            ></div>
          </div>
          <div className="image-text-arrow__text">
            <h3 className="skills-title">Key Skills:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git</li>
              <li>PhotoShop, GIMP</li>
            </ul>
          </div>
          <div className="arrow-line arrow-line--ver"></div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(About);

export type FirstScreenProps = React.HTMLAttributes<HTMLDivElement>;
