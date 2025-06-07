import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

const PostCreate: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
