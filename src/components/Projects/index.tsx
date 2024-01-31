import { t } from "i18next";
import s from "./Projects.module.css";
import { ForwardRefRenderFunction, forwardRef } from "react";
import classNames from "@/functions/classNames";
import projects from "./projectsList";
import Link from "next/link";

const Projects: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => {
  return (
    <section ref={ref} {...props} id="projects">
      <div className={classNames(s.container, "container container--m")}>
        <h2 className="section-title">{t("My favorite projects")}</h2>
        {projects.map(
          ({ name, intro, title, list, conclusion, href, imagesCount }, i) => (
            <div key={name} className={classNames(i % 2 && s.flip, s.project)}>
              <div className={s.images}>
                {Array(imagesCount)
                  .fill("")
                  .map((_, i) => (
                    <div
                      key={i}
                      className={s.imageDiv}
                      style={{
                        backgroundImage: `url('img/${name}${i + 1}.webp')`,
                      }}
                    />
                  ))}
              </div>
              <div className={s.text}>
                <h3 className="section-subtitle">{title}</h3>
                <p>{intro}</p>
                <ul>
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {conclusion && (
                  <p>
                    {conclusion}
                    {href && (
                      <Link className={s.link} href={href} target="_blank">
                        {t("VIEW SITE")}
                      </Link>
                    )}
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default forwardRef(Projects);
