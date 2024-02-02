import { t } from "i18next";
import Link from "next/link";
import s from "./Projects.module.css";
import { ForwardRefRenderFunction, forwardRef } from "react";
import classNames from "@/functions/classNames";

const Projects: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => {
  const projects = [
    {
      name: "audio",
      title: t("projectsTexts.audio.title"),
      intro: t("projectsTexts.audio.intro"),
      list: [
        t("projectsTexts.audio.list.0"),
        t("projectsTexts.audio.list.1"),
        t("projectsTexts.audio.list.2"),
        t("projectsTexts.audio.list.3"),
        t("projectsTexts.audio.list.4"),
        t("projectsTexts.audio.list.5"),
        t("projectsTexts.audio.list.6"),
        t("projectsTexts.audio.list.7"),
      ],
      imagesCount: 3,
    },
    {
      name: "digital",
      title: t("projectsTexts.digital.title"),
      intro: t("projectsTexts.digital.intro"),
      list: [
        t("projectsTexts.digital.list.0"),
        t("projectsTexts.digital.list.1"),
        t("projectsTexts.digital.list.2"),
        t("projectsTexts.digital.list.3"),
        t("projectsTexts.digital.list.4"),
        t("projectsTexts.digital.list.5"),
      ],
      imagesCount: 3,
    },
    {
      name: "nft",
      title: t("projectsTexts.nft.title"),
      intro: t("projectsTexts.nft.intro"),
      list: [
        t("projectsTexts.nft.list.0"),
        t("projectsTexts.nft.list.1"),
        t("projectsTexts.nft.list.2"),
        t("projectsTexts.nft.list.3"),
        t("projectsTexts.nft.list.4"),
      ],
      imagesCount: 2,
    },
    {
      name: "kittens",
      title: t("projectsTexts.kittens.title"),
      intro: t("projectsTexts.kittens.intro"),
      list: [
        t("projectsTexts.kittens.list.0"),
        t("projectsTexts.kittens.list.1"),
        t("projectsTexts.kittens.list.2"),
      ],
      imagesCount: 1,
      conclusion: t("projectsTexts.kittens.conclusion"),
      href: "https://petrovanina.github.io/Find_cat/",
    },
  ];

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
                <h3 className="title--large">{title}</h3>
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
