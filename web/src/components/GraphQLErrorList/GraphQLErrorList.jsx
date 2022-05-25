import React from "react";
import "./graphql-error-list.scss";

const GraphQLErrorList = ({ errors }) => {
  return (
    <div className="graphql-error-list">
      <div className="container graphql-error-list__container">
        <h1 className="graphql-error-list__heading">GraphQL Error</h1>
        {errors.map((error) => (
          <pre className="graphql-error-list__pre" key={error.message}>
            {error.message}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default GraphQLErrorList;
