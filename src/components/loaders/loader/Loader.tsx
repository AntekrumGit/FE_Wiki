import styles from "./Loader.module.css"

export function Loader(){
    return(
    <div className={styles.loaderBack}>
    <div className={styles.loader}></div>
    <div className={styles.loaderText}>Loading...</div>
    </div>
    )
}