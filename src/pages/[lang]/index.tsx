import { useRef } from "react";
import { GetServerSideProps } from "next";
import { t } from "i18next";
import Head from "next/head";
import initializeLanguage from "@/i18n/initializeLanguage";
import Header from "@/components/Header";
import withOnVisible from "@/components/HOC/withOnVisible";
import FirstScreen from "@/components/FirstScreen";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { ImperativeRef } from "@/functions/customHooks/useOnScreen";
import Contacts from "@/components/Contacts";

const sections = [
  withOnVisible(FirstScreen),
  withOnVisible(About),
  withOnVisible(Projects),
  withOnVisible(Contacts),
];

interface HomeProps {
  initialLanguage: string;
  isTouch?: boolean;
}

const Home: React.FC<HomeProps> = ({ isTouch }) => {
  const navRef = useRef<ImperativeRef>(null);
  return (
    <>
      <Head>
        <title>{t("Nina Petrova | Frontend Developer Portfolio")}</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header ref={navRef} isTouch={isTouch} />
      <main className="Page">
        {sections.map((Section, i) => (
          <Section key={i} imperativeRef={navRef} />
        ))}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context: any
) => {
  const initialLanguage = await initializeLanguage(context);

  return { props: { initialLanguage } };
};

export default Home;

export const runtime = "experimental-edge";
