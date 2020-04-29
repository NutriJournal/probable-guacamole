import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

import FormInput from "./FormInput";
import { ADD_USER } from "../../gql/mutations";
import ThunderboltSVG from "../svg/ThunderboltSVG";
import { Spacer } from "../Layout/LayoutPrimitives";

export default function () {
  const [user, setUser] = useState({});
  const Router = useRouter();

  const variables = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async () => {
    const existingToken = Cookie.get("token");

    const {
      data: {
        createUser: { token, user },
      },
      error,
    } = await addUser({ variables: variables });
    //TODO: Proper error handling
    if (error) {
      window.alert(`ERROR: ${error}`);
    }
    if (existingToken) {
      Cookie.remove("token");
    }

    if (user) {
      Cookie.set("token", token);
      Cookie.set("name", user.name);
      Router.push("/createProfile");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-2">
        <Spacer />
        <div className="flex flex-col justify-center pb-3">
          <ThunderboltSVG />
        </div>
        <h2 className="text-3xl font-medium my-4">Sign Up</h2>
        <Spacer />
      </div>
      <div className="flex">
        <Spacer />
        <p className="text-xl mb-2">You're one step closer to your goals!</p>
        <Spacer />
      </div>
      <form className="flex flex-col w-full">
        <FormInput
          name="name"
          label="Your Name"
          placeHolder="First and Last Name"
          type="text"
          required={true}
          setInput={setUser}
          data={user}
        />
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
        <FormInput
          label="Verify Password"
          placeHolder="password"
          type="password"
          required={true}
          setInput={setUser}
          data={user}
        />
      </form>
      <button
        className="w-full mt-8 py-2 text-white bg-blue-400rounded hover:bg-item-hover"
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
