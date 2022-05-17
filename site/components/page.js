import all_styles from '../styles/all.module.scss'
import Header from './header'

export default function Page(props) {
    return (<div className={all_styles.background}>
        <Header/>
        <div className={all_styles.content}>
            <div className={all_styles.inner}>
                {props.children}
            </div>
        </div>
    </div>
    )
}