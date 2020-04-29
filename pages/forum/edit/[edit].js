import React, { useState, useEffect } from "react";
import withApollo from "../../../lib/apollo.js";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_POST } from "../../../gql/mutations.js";
import { GET_POST_DETAILS } from "../../../gql/queries.js";
import {
  CenteredContainer,
  Spacer,
} from "../../../components/Layout/LayoutPrimitives.js";
import Layout from "../../../components/Layout/index.js";
import { useRouter } from "next/router";

const edit = (props) => {
  const router = useRouter();
  const id = router.query.edit;

  const { data, loading, error } = useQuery(GET_POST_DETAILS, {
    variables: { id: id },
  });
  const [updatePost] = useMutation(UPDATE_POST);

  const [updatedPost, setUpdatedPost] = useState({});

  useEffect(() => {
    data && setUpdatedPost({ title: data.post.title, body: data.post.body });
    return () => {
      setUpdatedPost(null);
    };
  }, [data]);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `There was an error getting the post, ${error}`;
  }

  const handleChange = (event) => {
    setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost({
      variables: {
        id: id,
        title: updatedPost.title,
        body: updatedPost.body,
      },
      optimisticResponse: {
        __typename: "Mutation",
        updatePost: {
          id: id,
          title: updatedPost.title,
          body: updatedPost.body,
          __typename: "Post",
        },
      },
    });
    router.push("/forum/posts");
  };

  return (
    <Layout>
      <CenteredContainer>
        <h1 className="text-xl muli my-2">Update Post</h1>
        <div className="w-full mb-12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                placeholder="Title"
                type="text"
                className="my-4 p-2 border rounded-sm border-gray-100"
                name="title"
                value={updatedPost.title}
                onChange={handleChange}
              ></input>
              <textarea
                rows="15"
                cols="75"
                placeholder="Text"
                type="text"
                className="w-full resize-none p-2 border rounded-sm border-gray-100"
                name="body"
                value={updatedPost.body}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="float-right muli text-xs rounded w-24 py-1 mx-2 my-4 bg-cyan-300 text-white"
            >
              Update
            </button>
            <button className="float-right muli text-xs rounded w-24 py-1 mx-2 my-4 text-cyan-300 border border-cyan-300">
              Cancel
            </button>
          </form>
        </div>
      </CenteredContainer>
    </Layout>
  );
};

export default withApollo(edit);
