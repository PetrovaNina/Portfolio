import { t } from "i18next";
import s from "./Projects.module.css";
import { ForwardRefRenderFunction, forwardRef } from "react";

const Project: React.FC = () => {
  return (
    <div className="background-title__wrapper container wrapper--narrow animation smoothUp">
      <h2 className="section-title">My favorite projects</h2>
      <div className="before__block">
        <div className="before-after__text tile__list">
          <div className="before-after__content-wrapper">
            <div className="tile__item black-bg">
              <span className="tile__title text--green">
                {t("FIND CAT mini-game")}
              </span>
              <ul>
                <li>Concept generation</li>
                <li>Built with JavaScript</li>
                <li>
                  Creating and interaction with DOM elements dynamically through
                  JS
                </li>
                <li>Responsive designs</li>
                <li>CSS animation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="before-after__images">
          <div
            className="image-div container3-4"
            style={{ backgroundImage: "url(img/findCat.png)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Projects: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => {
  return (
    <section
      ref={ref}
      {...props}
      id="projects"
      className="before-after not-equal black-bg"
    >
      <Project />
    </section>
  );
};

export default forwardRef(Projects);