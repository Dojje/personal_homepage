import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

// import pfp from '../public/images/pfp.svg'

export default function Home() {
  return (<>
    <Head>  

    </Head>
    <div className={styles.hero}>
      <div className={styles.middlepart}>
        <div className={styles.pfp}>
          <Image
            src="https://i.imgur.com/gbJnQDb.png"
            width="400"
            height="400"
            alt="cool cat pfp"
          />
        </div>

        <div className={styles.bio}>
          <p>
            Hey guys
          </p>
        </div>
      </div>
    </div>

    <div className={styles.under}>
      <div className={styles.survival}>
        <p>
          Daniel has survived {getAge()}&nbsp;days
        </p>
      </div>
    </div>
  </>)
}

function getAge() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 GMT +0100"));
  var days_alive = ms_alive / 1000 / 60 / 60 / 24;

  return Math.floor(days_alive)
}
