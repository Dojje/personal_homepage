import posts from '../../blogposts/posts';
import { useRouter } from 'next/router';
import Page from '../../components/page';
import parseCookies from '../../helpers/parseCookies';
import { useState } from 'react';

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
                    <h1>sdf</h1>
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
