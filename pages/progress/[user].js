import ProgressCenter from "../../components/Progress/ProgressCenter";
import { useQuery } from "@apollo/react-hooks";

import ProgressWeightLog from "../../components/Progress/ProgressWeightLog.js";
import ProgressGraph from "../../components/Progress/ProgressGraph.js";
import { GET_WEIGHT_LOGS } from "../../gql/queries";
import withApollo from "../../lib/apollo.js";
import Layout from "../../components/Layout";

const Progress = () => {
  const { loading, error, data, refetch } = useQuery(GET_WEIGHT_LOGS);

  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;

  return (
    <Layout>
      <section className="flex items-center justify-center ml-20 mr-40">
        <div className="w-1/3">
          <ProgressGraph data={data} />
        </div>
        <div className="w-1/3">
          <ProgressCenter data={data} />
        </div>
        <div className="w-1/3">
          <ProgressWeightLog data={data} />
        </div>
      </section>
    </Layout>
  );
};

export default withApollo(Progress);
