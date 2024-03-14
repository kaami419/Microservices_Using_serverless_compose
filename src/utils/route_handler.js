// utils/route-handler.js

const RouteHandler = (handler, schema) => {
  return async (event, context) => {
    try {
      // Perform any pre-processing or validation based on the schema
      // For example, you might validate the request payload against the schema

      const result = await handler(event, context);

      // Perform any post-processing based on the result

      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message || "Internal Server Error",
        }),
      };
    }
  };
};

module.exports = {
  RouteHandler,
};
