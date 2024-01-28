import { GetServerSideProps } from "next";
import { t } from "i18next";
import Head from "next/head";
import initializeLanguage from "../../i18n/initializeLanguage";
import i18next from "../../i18n";
import Header from "@/components/Header";
import { useRef } from "react";
import withOnVisible from "@/components/HOC/withOnVisible";
import FirstScreen from "@/components/FirstScreen";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { ImperativeRef } from "@/functions/customHooks/useOnScreen";

const FirstScreenVisible = withOnVisible(FirstScreen);
const AboutVisible = withOnVisible(About);
const ProjectsVisible = withOnVisible(Projects);

type Locales = { [key: string]: { title: string } };

const locales: Locales = {
  en: { title: "English" },
  ru: { title: "Русский" },
};

const changeLanguage = (locale: string) => {
  i18next.changeLanguage(locale);
};

const intro = [
  `Frontend Developer with a background in digital marketing, specializing in constructing web applications 
  through SSR, React, and Redux, with proficiency in Jest for testing. 
  Skilled in collaborating within distributed scrum teams and utilizing tools like Jira and ClickUp for 
  effective task management. Fluent in JS, TS, HTML, CSS (SСSS/PostCSS), Webpack,REST APIs, Node.js, Docker, Postman.`,

  `I am dedicated to crafting engaging and memorable user experiences for mobile-first responsive websites. 
  My passion lies in undertaking diverse projects, especially those within lifesciences, entertainment, and 
  social sectors, aiming to further develop my skills and stay abreast of cutting-edge technologies.`,

  "Location: Paphos, Cyprus",
];

const skills = [
  "SSR (Server-Side Rendering)",
  "React, Redux, Jest",
  "JavaScript (JS) and TypeScript (TS)",
  "HTML, CSS (SСSS), Webpack",
  "REST APIs, Node.js, Docker, Postman",
  "Digital Marketing",
  "Distributed Scrum Teams, Jira, ClickUp",
  "Mobile-First Responsive Design",
  "Project Collaboration and Management",
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
        <FirstScreenVisible imperativeRef={navRef} />
        <AboutVisible imperativeRef={navRef} />
        <ProjectsVisible imperativeRef={navRef} />
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
