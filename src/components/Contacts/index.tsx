import { t } from "i18next";
import Link from "next/link";
import { forwardRef, ForwardRefRenderFunction } from "react";
import Icon from "../Icon";

import s from "./Contacts.module.css";

const contacts = [
  { id: "linkedin", href: "https://linkedin.com/in/nina-petrova-frontend/" },
  { id: "github", href: "https://github.com/PetrovaNina" },
  { id: "telegram", href: "https://t.me/NinaAPetrova" },
  { id: "email", href: "mailto:petrova1nina@gmail.com" },
];

const Contacts: ForwardRefRenderFunction<HTMLDivElement, {}> = (props, ref) => (
  <section ref={ref} {...props} id="contacts">
    <div className="container container--s">
      <h2 className="section-title">{t("Let's work together")}</h2>
      <div className={s.links}>
        {contacts.map((link) => (
          <Link key={link.id} target="_blank" {...link}>
            <Icon name={link.id} width="50" height="50" className={s.icon} />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default forwardRef(Contacts);
