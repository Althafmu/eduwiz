import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import image from "../../assets/hero.png"

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className={styles.homeWrapper}>
        <div className={styles.homeContent}>
        <div className={styles.homeImage}>
        <img src={image} alt="hero" />
        </div>
          <div className={styles.hometext}>
          <span>ExaMate.</span>
          <span>Free AI Powered Questions Generator </span>
          <span>
            ExaMate questions generator helps you generate questions from any
            text. You can generate multiple choice questions, true or false, and
            open questions. You can also save the generated questions and use
            them in your exams.
          </span>
          </div>
       
        </div >
      </div>
      <div className={styles.homeWrapper1}>
        <div className={styles.homeContent}>
          <button>text</button>
          <textarea name="text" id="text" cols={500} rows={40}></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
