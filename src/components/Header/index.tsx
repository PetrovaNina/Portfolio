import Link from "next/link";
import { t } from "i18next";
import dynamic from 'next/dynamic'
import LanguagesSwitcher from "../LanguagesSwitcher";
import s from "./Header.module.css";
import { forwardRef, useImperativeHandle, useState } from "react";
import classNames from "../../functions/classNames";
import { ImperativeRef } from "@/functions/customHooks/useOnScreen";
 
const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false })

const Header: React.ForwardRefRenderFunction<ImperativeRef, HeaderProps> = (
  { isTouch },
  forwardedRef
) => {
  const [visibleItem, setVisibleItem] = useState<string | null>();

  const navLinks = {
    about: t("about"),
    projects: t("projects"),
    contacts: t("contacts"),
  };

  useImperativeHandle(
    forwardedRef,
    () => ({
      onVisible: (item: string | null) => setVisibleItem(item),
    }),
    [setVisibleItem]
  );

  return (
    <header className={classNames(s.header, "before", visibleItem && s.fixed)}>
      <div className="container">
        <Link href="#" className={s.home_link} />
        {isTouch && (
          <MobileMenu className={s.mobileMenu} openClassName={s.open} />
        )}
        <nav className={s.navbar}>
          {Object.entries(navLinks).map(([key, val]) => {
            return (
              <Link
                key={key}
                href={`#${key}`}
                className={classNames(
                  s.navbar_link,
                  key === visibleItem && s.highlighted
                )}
              >
                {val}
              </Link>
            );
          })}
          <LanguagesSwitcher className={s.navbar_link} activeClassName={s.highlighted} />
        </nav>
      </div>
    </header>
  );
};

export default forwardRef(Header);

export type HeaderProps = {
  ref?: React.Ref<HTMLDivElement>;
  isTouch?: boolean;
};
