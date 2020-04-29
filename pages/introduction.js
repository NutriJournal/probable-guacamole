import Layout from "../components/Layout/index.js";
import MarketingTop from "../components/marketing/MarketingTop.js";
import MarketingCenter from "../components/marketing/MarketingCenter.js";
import withApollo from "../lib/apollo";

const Introduction = () => {
  return (
    <>
      <Layout>
        <div className="my-8">
          <MarketingTop />
        </div>
        <div className="my-8 mr-24">
          <MarketingCenter />
        </div>
      </Layout>
    </>
  );
};

export default withApollo(Introduction);
