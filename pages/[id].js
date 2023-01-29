export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:5000/posts/" + id);

  const data = await res.json();

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/posts/");
  // console.log(res);
  const data = await res.json();
  // console.log(data);

  const paths = data.map(post => {
    return {
      params: {
        id: post._id.toString(),
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
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
