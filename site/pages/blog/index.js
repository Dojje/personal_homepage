import styles from '../../styles/blog.module.scss'
import moment, { lang } from 'moment'
import { useRouter } from 'next/router'
import Page from '../../components/page';
import { useCookies } from "react-cookie"

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
    

    let lang = "en";
    if (process.browser) {
        if (router.query.lang !== undefined) {
            lang = router.query.lang;
        } else {
            router.push("/blog/?lang=en")
        }
    }

    let posts = [TunnelbaneRace];

    let getLang = () => {
        if (lang === "sv") {
            return "english 🇬🇧"
        } else if (lang === "en") {
            return "swedish 🇸🇪"
        }
    }

    let switchLang = () => {
        if (lang === "sv") {
            router.push("/blog/?lang=en")
        } else if (lang === "en") {
            router.push("/blog/?lang=sv")
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

