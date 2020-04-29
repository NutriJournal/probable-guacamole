import { useQuery } from "@apollo/react-hooks";
import ProgressCenter from "./ProgressCenter.js";
import ProgressWeightLog from "./ProgressWeightLog.js";
import ProgressGraph from './ProgressGraph.js';
import { GET_WEIGHT_LOGS } from '../../gql/queries.js'


const Progress = () => {

  const { loading, error, data, refetch } = useQuery(GET_WEIGHT_LOGS)

  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`

  return (
    <section className="flex items-center justify-center">
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
  );
};

export default Progress;