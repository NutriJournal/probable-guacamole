import React, { useState } from "react";
import EyeIconSVG from "../svg/EyeIconSVG.js";
import CommentIconSVG from "../svg/CommentIconSVG.js";
import LikeIconSVG from "../svg/LikeIconSVG.js";
import MoreIconSVG from "../svg/MoreIconSVG.js";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_VIEW_COUNT, UPDATE_LIKE_COUNT } from "../../gql/mutations";
import Menu from "./Menu.js";

const TopicCard = (props) => {
  const router = useRouter();
  const [addLike] = useMutation(UPDATE_LIKE_COUNT)
  const [showMenu, setShowMenu] = useState(false);
  const isOwnPost = props.data.user.id === props.user.id;

  let previousViews = props.data.viewCount === null ? 1 : props.data.viewCount;

  const [updateViews] = useMutation(UPDATE_VIEW_COUNT);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const incLikes = async () => {
    const count = props.data.likeCount ? props.data.likeCount : 0
    const newCount = count + 1
    const { data } = await addLike({
        variables: {
            id: props.data.id,
            likeCount: newCount
        },
        optimisticResponse: {
            __typename: "Mutation",
            updatePost: {
              id: props.data.id,
              __typename: "Post",
              likeCount: newCount,
            },
          },
    })

  }

  const handleChange = (e) => {
    e.preventDefault();
    router.push("/forum/[post]", `/forum/${props.data.id}`);
    updateViews({
      variables: {
        id: props.data.id,
        viewCount: (previousViews += 1),
      },
    });
  };

  return (
    <div className="border-b-2 border-gray-50">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="muli text-2xl my-4" onClick={handleChange}>
            {props.data.title}
          </h1>
          <p className="mb-4">{props.data.user.name}</p>
        </div>
        <div className="flex flex-1"></div>
        <div className="flex align-middle">
          <div className="my-4 mx-2 w-1/4">
            <div className="flex">
              <EyeIconSVG /> {props.data.viewCount || 0}
            </div>
          </div>
          <div className="my-4 mx-2 w-1/4">
            <div className="flex">
              <CommentIconSVG />{" "}
              {props.data.comments.length ? props.data.comments.length : 0}
            </div>
          </div>
          <div className="my-4 mx-2 w-1/4">
            <div 
                className="flex cursor-pointer"
                onClick={incLikes}
                >
              <LikeIconSVG />
              {props.data.likeCount ? props.data.likeCount : 0}
            </div>
          </div>
          <div className={`my-4 mx-2 w-1/4 ${isOwnPost ? "cursor-pointer" : ""}`} onClick={isOwnPost && toggleMenu}>
            {showMenu ? (
              <Menu
                data={props.data}
                showMenu={showMenu}
                toggleMenu={toggleMenu}
                refetch={props.refetch}
                isOwnPost={isOwnPost}
              />
            ) : (
              <MoreIconSVG />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
