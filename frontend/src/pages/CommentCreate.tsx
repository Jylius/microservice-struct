import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

interface CommentCreateProps {
  postId: string;
}

const CommentCreate: React.FC<CommentCreateProps> = ({ postId }) => {
  const [content, setContent] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
