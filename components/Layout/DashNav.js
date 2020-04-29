import { useQuery } from "@apollo/react-hooks";
import { ME } from "../../gql/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashNav() {
  //Gets active dashboard component from client cache
  const { data, client } = useQuery(ME);
  const router = useRouter();

  const currPage = router.pathname.split("/")[1];

  useEffect(() => {
    client.writeData({
      data: {
        ...data,
        lowerNav: currPage,
        journalComponent: "log",
        logType: "daily",
        mealType: "breakfast",
        activeCat: "featured",
      },
    });
    return () => null;
  }, []);

  if (!data) return <div className="w-1/3"></div>;

  const { me, lowerNav } = data;

  const activeNavControl = lowerNav ? lowerNav : "journal";
  const user = me ? me.name : "user";
  return (
    <ul className="w-1/3 flex justify-around text-lg font-medium py-2">
      <li
        className={`${
          activeNavControl === "journal" ? "border-b-4 border-blue-400" : ""
        } cursor-pointer`}
        value={"journal"}
        onClick={() => {
          client.writeData({
            data: { ...data, lowerNav: "journal", id: me.id },
          });
          router.push("/journal/[user]", `/journal/${user}`);
        }}
      >
        Food Journal
      </li>
      <li
        className={`${
          activeNavControl === "progress" ? "border-b-4 border-blue-400" : ""
        } cursor-pointer`}
        value={"progress"}
        onClick={() => {
          client.writeData({
            data: { ...data, lowerNav: "progress", id: me.id },
          });
          router.push("/progress/[user]", `/progress/${user}`);
        }}
      >
        Progress
      </li>
      <li
        className={`${
          activeNavControl === "forum" ? "border-b-4 border-blue-400" : ""
        } cursor-pointer`}
        value={"forums"}
        onClick={() => {
          client.writeData({ data: { ...data, lowerNav: "forum", id: me.id } });
          router.push("/forum/posts");
        }}
      >
        Forums
      </li>
    </ul>
  );
}
