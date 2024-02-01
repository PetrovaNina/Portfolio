import s from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.container}>
        <p>Nina Petrova, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
