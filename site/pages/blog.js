import Header from '../components/header';
import all_styles from '../styles/all.module.scss'
import styles from '../styles/blog.module.scss'
import moment from 'moment'

function BlogPost({name, time}) {

    let postDate = moment.unix(time)
    let href = "/blog/" + name.replace(/ /g, "-")
    return (
        <a href={href} className={styles.blog_post}>
            <b>
                {name}
            </b>
            <p>
                {postDate.format("YYYY-MM-DD HH:MM")}
            </p>
        </a>
    )
}

export default function Blog() {
    return (
    <div className={all_styles.background}>
        <Header/>
        <div className={all_styles.content}>
            <h2>Blog posts</h2>
            <BlogPost
                name="not really a blog"
                time="1646259200"
            />
            <BlogPost
                name="not really a blog"
                time="1646259200"
            />
            <BlogPost
                name="not really a blog"
                time="1646259200"
            />
        </div>
    </div>
    )
}

