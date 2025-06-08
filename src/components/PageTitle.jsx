/**
 * Node modules
 */
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet title={title}>
      <div>PageTitle</div>
    </Helmet>
  );
};

export default PageTitle;
