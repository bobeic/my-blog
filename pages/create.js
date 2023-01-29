import { useRef } from "react";
import { useRouter } from "next/router";

const SERVER_URL = process.env.SERVER_URL;

const Create = () => {
  const titleRef = useRef();
  const nameRef = useRef();
  const bodyRef = useRef();

  const router = useRouter();

  console.log(titleRef.current);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const author = nameRef.current.value;
    const body = bodyRef.current.value;

    const response = await fetch(SERVER_URL + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
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
                ref={titleRef}
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
                ref={nameRef}
              />
            </div>

            <div className="form-floating mb-4 mt-5">
              <textarea
                id="post"
                style={{ height: "140px" }}
                className="form-control"
                ref={bodyRef}
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
