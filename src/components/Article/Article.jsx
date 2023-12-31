import { useEffect, useState } from "react";
import { getArticle } from "../../api/getArticle";
import { useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import { constArticle } from "../../assets/const";
import img2 from "../../assets/witd2.jpg";
import img0 from "../../assets/kremart.jpg";
import img1 from "../../assets/smoothie.jpg";
const array = [img0, img1, img2];

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    getArticle(id, setArticle);
  }, [id]);

  if (!article) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.imgWrapp}>
          <img className={styles.img} src={array[article.url]}></img>
        </div>
        <h2 className={styles.title}>{article.name}</h2>
        <p className={styles.text}>{constArticle[0]}</p>
        <p className={styles.text}>{constArticle[1]}</p>
        <p className={styles.text}>{constArticle[2]}</p>
      </div>
    </article>
  );
}
