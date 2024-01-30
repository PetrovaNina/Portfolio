import { t } from "i18next";

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
      t("projectsTexts.audio.list.8"),
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
    ],
    imagesCount: 2,
  },
  {
    name: "cats",
    title: t("projectsTexts.cats.title"),
    intro: t("projectsTexts.cats.intro"),
    list: [
      t("projectsTexts.cats.list.0"),
      t("projectsTexts.cats.list.1"),
      t("projectsTexts.cats.list.2"),
    ],
    imagesCount: 1,
    conclusion: t("projectsTexts.cats.conclusion"),
    href: "https://petrovanina.github.io/Find_cat/",
  },
];

export default projects;
