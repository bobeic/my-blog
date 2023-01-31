import { useState } from "react";
import { useRouter } from "next/router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const [body, setBody] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // "https://blog-server-ezko.onrender.com/api/posts"
    const response = await fetch("https://blog-server-ezko.onrender.com/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author: name,
        body,
      }),
    });

    if (response.ok) {
      console.log("Post successfully sent!");
      router.push("/");
    } else {
      console.error("Failed to send post");
    }
  };

  return (
    <div className="container-lg">
      <h2>Create Post</h2>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <div className="mb-4 input-group">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <div className="mb-4 input-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-floating mb-4 mt-5">
              <textarea
                id="post"
                style={{ height: "140px" }}
                className="form-control"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label htmlFor="post" className="form-label">
                Your post...
              </label>
            </div>

            <div className="mb-4 text-center">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
