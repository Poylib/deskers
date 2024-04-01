import axios from 'axios'

async function getBlogBySlug({ slug }: { slug: string }) {
  return (await axios.get(`http://localhost:3000/api/blog/${slug}`)).data
}

export default async function Content({ params: { slug } }: { params: { slug: string } }) {
  const { title, content } = await getBlogBySlug({
    slug
  });
  return (
    <>
      <h1>{title}</h1>
      <br />
      <p>{content}</p>
    </>
  );
}
