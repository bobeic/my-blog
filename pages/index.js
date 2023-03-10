import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch("https://blog-server-ezko.onrender.com/api/posts");
  // const res = await fetch("http://localhost:5000/api/posts");

  const data = await res.json();

  return {
    props: { posts: data },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Home page: search bar, list of blogs */}
      <div className="container-lg">
        <h1 className="display-3">Blog Home</h1>
        <div className="row mt-3 justify-content-between">
          <div className="col-lg-8">
            {posts.map((post) => (
              <Link
                href={`/${post._id}`}
                key={post._id}
                className="text-reset text-decoration-none"
              >
                <h3>{post.title}</h3>
                <p className="text-muted">{post.author}</p>
                <p>{post.body}</p>
              </Link>
            ))}
          </div>
          <div className="col-lg-3">
            <h2 className="lead display-6">Popular</h2>
            <ul className="list-group">
              <li className="list-group-item">Blog 1</li>
              <li className="list-group-item">Blog 2</li>
              <li className="list-group-item">Blog 3</li>
              <li className="list-group-item">Blog 4</li>
              <li className="list-group-item">Blog 5</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
