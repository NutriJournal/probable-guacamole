import { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { request } from "graphql-request";

import FormInput from "./FormInput";
import { LOG_IN } from "../../gql/mutations";
import ThunderboltSVG from "../svg/ThunderboltSVG";
import { Spacer } from "../Layout/LayoutPrimitives";

export default function () {
  const [user, setUser] = useState("");
  const Router = useRouter();

  const variables = {
    email: user.email,
    password: user.password,
  };

  const API = "https://labspt7-nutrition-tracker-be.herokuapp.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingToken = Cookie.get("token");

    if (existingToken) {
      Cookie.remove("token");
    }

    const {
      login: {
        token,
        user: { name },
      },
    } = await request(API, LOG_IN, variables);

    Cookie.set("token", token);
    Cookie.set("Authorization", `Bearer ${token}`);
    const nameWithoutWhitespace = (name) => name.trim().split(" ").join("");
    Router.push(
      "/[user]/dashboard",
      `/${nameWithoutWhitespace(name)}/dashboard`
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-2">
        <Spacer />
        <div className="flex flex-col justify-center pb-3">
          <ThunderboltSVG />
        </div>
        <h2 className="text-3xl font-medium my-4">Sign In</h2>
        <Spacer />
      </div>
      <div className="flex">
        <Spacer />
        <p className="text-xl mb-2">Let's start crushing those goals!</p>
        <Spacer />
      </div>
      <form className="flex flex-col w-full">
        <FormInput
          name="email"
          label="E-mail"
          placeHolder="email@email.com"
          type="email"
          required={true}
          setInput={setUser}
          data={user}
        />
        <FormInput
          name="password"
          label="Password"
          placeHolder="password"
          type="password"
          required={true}
          setInput={setUser}
          data={user}
        />
      </form>
      <button
        className="w-full mt-8 py-2 text-white bg-blue-400 rounded hover:bg-item-hover"
        onClick={handleSubmit}
      >
        Let's Go!
      </button>
      <div className="flex">
        <Spacer />
        <p className="mt-6 -mb-12">
          Already a member?{" "}
          <a className="text-gray-900 font-semibold" href="/signin">
            Sign In
          </a>
        </p>
        <Spacer />
      </div>
    </div>
  );
}
