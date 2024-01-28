import { GetServerSidePropsContext } from "next";
import i18next from "../i18n";
import { DEFAULT_LOCALE } from "@/constants";

export default async function initializeLanguage(
  context: GetServerSidePropsContext
) {
  try {
    const { lang } = context.params as { lang: string };
    const initialLanguage = lang || DEFAULT_LOCALE;
    await i18next.changeLanguage(initialLanguage);

    return initialLanguage;
  } catch (error) {
    return DEFAULT_LOCALE;
  }
}
