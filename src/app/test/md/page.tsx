import matter from 'gray-matter'
// Import 'remark', library for rendering markdown
import { remark } from 'remark'
import html from 'remark-html'
import 'github-markdown-css';
import styles from './test_md.module.scss'

export default async function test_md() {
    // const [value, setValue] = React.useState("**Hello world!!!**");
    const res = await fetch('http://localhost:3000/page/sample.md', { cache: 'no-store' });
    const markdown = await res.text()
    let title = "";
    let date = "";

    const matterResult = matter(markdown)
    title = matterResult.data.title;
    date = matterResult.data.date;
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return (
        <>
            <section className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{date}</div>
            </section>
            <div className={"markdown-body"} >
                <div
                    className={"text-gray-600"}
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </>
    );
}