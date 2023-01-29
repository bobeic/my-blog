const SERVER_URL = process.env.SERVER_URL;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://blog-server-ezko.onrender.com/posts/" + id);

  const data = await res.json();

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://blog-server-ezko.onrender.com/posts");
  if (res.ok) {
    const data = await res.json();

    const paths = data.map((post) => {
      return {
        params: {
          id: post._id.toString(),
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } else {
    console.log("error");
  }
};

const BlogPost = ({ post }) => {
  return (
    <div className="container-lg">
      <h1>{post.title}</h1>
      <h3>{post.author}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
