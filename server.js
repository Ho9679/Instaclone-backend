import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
require("dotenv").config();
import { ApolloServer } from"apollo-server";
import schema from "./schema";

const PORT = process.env.PORT;
const server = new ApolloServer({
	schema,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
	.listen(PORT)
	.then(() => 
		console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
	);