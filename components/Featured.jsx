import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
    return (

       <div>
            <Image src="/img/bg.png" alt="As the sun rises over the horizon, we will be there." layout="fill" className={styles.bgImg}/>
            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <div className={styles.title}>
                        Fasinii
                    </div>
                    <div className={styles.subtitle}>
                        For more information, 
                        please contact us on:
                    </div>
                    <div className={styles.contacts}>
                        Phone: 0743505069
                        <br/>
                        <br/>
                        Email: jroyugi@gmail.com
                    </div>
                </div>
            </div>

       </div> 

    )
}

export default Featured