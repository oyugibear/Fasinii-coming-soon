import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
              <div className={styles.items}>
                  <div className={styles.copyright}>
                      <p className={styles.text}>
                          © Fasinii 2022
                      </p>
                  </div>
              </div>
              <div className={styles.items}>
                  <div className={styles.copyright}>
                      <p className={styles.text}>
                          For inquiry call: 0743505069
                      </p>
                  </div>
              </div>
          </div>

    )
}

export default Footer