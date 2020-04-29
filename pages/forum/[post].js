import React from "react";
import withApollo from "../../lib/apollo";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { GET_POST_DETAILS } from "../../gql/queries.js";
import Layout from "../../components/Layout/index";
import CommentCard from "../../components/forum/CommentCard.js";
import EyeIconSVG from "../../components/svg/EyeIconSVG.js";
import CommentIconSVG from "../../components/svg/CommentIconSVG.js";
import LikeIconSVG from "../../components/svg/LikeIconSVG.js";
import Comment from "../../components/forum/Comment.js";

const post = () => {
  const router = useRouter();
  const id = router.query;

  const { data, loading, error, refetch } = useQuery(GET_POST_DETAILS, {
    variables: { id: id.post },
  });

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `There was an error getting the post, ${error}`;
  }

  console.log(data);

  return (
    <>
      <Layout>
        <div className=" px-64">
          <Link href="/forum/posts" replace>
            <button className="flex justify-start my-4">Back</button>
          </Link>
          <h1 className="muli text-2xl">{data.post.title}</h1>

          <div className="flex justify-between my-4">
            <p>Posted by {data.post.user.name}</p>
            <div className="flex justify-end w-1/2">
              <div className="mx-2">
                <div className="flex mx-1">
                  <EyeIconSVG /> {data.post.viewCount || 0}
                </div>
              </div>
              <div className="mx-2">
                <div className="flex mx-1">
                  <CommentIconSVG /> {data.post.comments.length}
                </div>
              </div>
              <div className="mx-2">
                <div className="flex mx-1">
                  <LikeIconSVG /> {data.post.likeCount || 0}
                </div>
              </div>
            </div>
          </div>

          <p>{data.post.body}</p>

          <Comment data={data} refetch={refetch} />

          <div>
            {data.post.comments.map((comment) => {
              return (
                <CommentCard key={comment.id} data={comment} me={data.me} />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withApollo(post);
