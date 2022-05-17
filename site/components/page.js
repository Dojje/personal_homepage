import parseCookies from '../helpers/parseCookies'
import all_styles from '../styles/all.module.scss'
import Header from './header'

export default function Page({children, lang, setLang}) {

    return (<div className={all_styles.background}>
        <Header lang={lang} setLang={setLang} />
        <div className={all_styles.content}>
            <div className={all_styles.inner}>
                {children}
            </div>
        </div>
    </div>
    )
}
