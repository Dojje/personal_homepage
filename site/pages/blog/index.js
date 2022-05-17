import Header from '../../components/header';
import all_styles from '../../styles/all.module.scss'
import styles from '../../styles/blog.module.scss'
import moment, { lang } from 'moment'
import { useRouter } from 'next/router'
import Page from '../../components/page';

import { useState, useEffect } from 'react';
import TunnelbaneRace from './subway-race';

function BlogPost({name, time, id}) {
    let postDate = moment.unix(time)
    let href = "/blog/" + id
    return (
        <a href={href} className={styles.blog_post} key={id}>
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
    let router = useRouter()

    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (router.query.lang === undefined) {
            setLang("en");

        } else {
            setLang(router.query.lang);
        }
    }, [router.query.lang])

    let posts = [TunnelbaneRace];

    let getLang = () => {
        console.log(lang)
        if (lang === "sv") {
            return "english 🇬🇧"
        } else if (lang === "en") {
            return "swedish 🇸🇪"
        }
    }

    let switchLang = () => {
        if (lang === "sv") {
            setLang("en")
        } else if (lang === "en") {
            setLang("sv")
        }
    }

    let valid_posts = posts.filter(post => {
        return new post().manifest().languages.includes(lang)
    });

    return (
    <Page>
        <button 
            style={{
                fontSize: "24px",
                marginLeft: "auto",
            }}
            onClick={switchLang}
        >
            {getLang()}
        </button>
        {
            valid_posts.map(post => {
                let post_manifest = new post().manifest();
                return <BlogPost id={post_manifest.id} name={post_manifest.name[lang]} time={post_manifest.time}/>
            })
        }
    </Page>
    )
}

