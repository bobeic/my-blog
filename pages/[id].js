import { useRouter } from "next/router";
const SERVER_URL = process.env.SERVER_URL;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  // const res = await fetch("https://blog-server-ezko.onrender.com/api/posts/" + id);
  const res = await fetch("https://blog-server-ezko.onrender.com/api/posts/" + id);

  const data = await res.json();

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  // const res = await fetch("https://blog-server-ezko.onrender.com/api/posts/");
  const res = await fetch("https://blog-server-ezko.onrender.com/api/posts/");

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
  const router = useRouter();
  // http://localhost:5000/api/posts/
  // https://blog-server-ezko.onrender.com
  const deletePost = async () => {
    const res = await fetch("https://blog-server-ezko.onrender.com/api/posts/" + post._id, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/");
    } else {
      console.log("not ok");
    }
  };

  // const updatePost = async () => {
  //   const res = await fetch("http://localhost:5000/api/posts/" + post._id);
  //   if (res.ok) {
  //     router.push("/");
  //   }
  // };
  return (
    <div className="container-lg">
      <h1>{post.title}</h1>
      <h3>{post.author}</h3>
      <p>{post.body}</p>
      <button type="button" onClick={deletePost}>
        Delete
      </button>
      {/* <button type="button">Update</button> */}
    </div>
  );
};

export default BlogPost;
