import i18next from "../i18n";
import Link from "next/link";
import { LOCALES } from "@/constants";
import { useRouter } from "next/router";
import classNames from "@/functions/classNames";

interface LanguagesSwitcherProps {
  className?: string;
  activeClassName?: string;
}
const LanguagesSwitcher: React.FC<LanguagesSwitcherProps> = ({
  className,
  activeClassName,
}) => {
  const { pathname, asPath, query, push } = useRouter();

  return (
    <div className="LanguagesSwitcher">
      {LOCALES.map((locale, i) => (
        <span
          key={locale}
          className={classNames(
            className,
            locale === query.lang && activeClassName
          )}
          onClick={() => {
            i18next.changeLanguage(locale);

            const lang =
              query.lang && typeof query.lang === "string"
                ? query.lang
                : locale;
            // if (query.lang && typeof query.lang === "string")
            push({ pathname, query }, asPath.replace(lang, locale), {
              scroll: false,
              locale,
            });
          }}
          style={{
            borderRight: i < LOCALES.length - 1 ? "2px solid white" : "none",
            padding: "0 0.5em",
            cursor: "pointer",
          }}
        >
          {locale}
        </span>
      ))}
    </div>
  );
};

export default LanguagesSwitcher;
