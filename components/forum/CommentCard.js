import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_COMMENT } from "../../gql/mutations.js";
import { useFetchUser } from "../../lib/user.js";

const CommentCard = (props) => {
  const [newComment, setNewComment] = useState(props.data.body);
  const [isEditing, setIsEditing] = useState(false);
  const [editComment] = useMutation(UPDATE_COMMENT);
  const isOwnComment = props.data.user.id === props.me.id;

  const handleChange = (e) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    editComment({
      variables: {
        id: props.data.id,
        body: newComment,
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateComment: {
          id: props.data.id,
          body: newComment,
          __typename: "Comment",
        },
      },
    });
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex-col">
        <p className="text-sm mb-2">{props.data.user.name}</p>
        <p
          onClick={() => isOwnComment && setIsEditing(!isEditing)}
          className={`${!isEditing ? "" : "hidden"} muli`}
        >
          {props.data.body}
        </p>
        <div className={`${isEditing ? "" : "hidden"}`}>
          <input value={newComment} onChange={handleChange}></input>
        </div>
        <button
          className={`${
            isEditing ? "" : "hidden"
          } bg-cyan-300 text-white text-xs muli w-12 py-1 my-4 rounded`}
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
