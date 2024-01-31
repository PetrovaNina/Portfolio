import { t } from "i18next";
import { forwardRef, ForwardRefRenderFunction } from "react";

const About: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => (
  <section ref={ref} {...props} id="about">
    <div className="container container--s">
      <h2 className="section-title">{t("About me")}</h2>
      <p>{t("frontendDeveloperIntroduction")}</p>
      <p>{t("collaborationExperience")}</p>
      <div>
        <h3 className="section-subtitle">{t("Key Skills")}:</h3>
        <ul>
          <li>SSR (Afrer.js, Next.js)</li>
          <li>React, Redux, Jest</li>
          <li>JavaScript and TypeScript</li>
          <li>HTML, CSS (SСSS/PostCSS), Webpack</li>
          <li>REST APIs, Node.js, Docker, Postman</li>
          <li>Tag Manager, Google Analytics</li>
          <li>{t("Distributed Scrum Teams")}, Jira, ClickUp</li>
          <li>{t("Project Collaboration and Management")}</li>
        </ul>
      </div>
    </div>
  </section>
);

export default forwardRef(About);
