import posts from '../../blogposts/posts';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import parseCookies from '../../helpers/parseCookies';
import { useState } from 'react';
import moment from 'moment';

function BlogPost({ initialLang }) {
    const [lang, setLang] = useState(initialLang);
    let router = useRouter()
    let postname = router.query.postname;
    
    for (let Post of posts) {
        let post_obj = new Post();
        let post_manifest = post_obj.manifest();
        if (post_manifest.id == postname) {
            return (
                <Page lang={lang} setLang={setLang}>
                    <div
                        style={{
                            padding: "1em",
                            backgroundColor: "var(--background-dark)",
                            borderRadius: "1em",
                        }}
                    >
                        {lang == "en" ? "last edited" : "senast ändrad"} {moment.unix(post_manifest.lastEdited).format("YYYY-MM-DD HH:MM")}
                        <br/>
                        {lang == "en" ? "first published" : "publicerad"} {moment.unix(post_manifest.published).format("YYYY-MM-DD HH:MM")}
                    </div>
                    <Post/>
                </Page>
            )
        }
    }
    return (
        <Page>
            <h1>blog post called {postname} not found</h1>
        </Page>
    )
}
BlogPost.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
        initialLang: cookies.lang || "en"
    }
}

export default BlogPost;
