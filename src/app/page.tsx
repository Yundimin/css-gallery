import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full relative justify-center items-center gap-10">
      <h1>
        <span className={styles.word}>
          Jimin<span className={styles.superscript}>s</span>{" "}
        </span>
        <span className={styles.word}>CSS House</span>
      </h1>
      <button className={styles.goToListBtn}>목록 이동</button>
    </div>
  );
}
