import "dotenv/config";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import tasksJSON from "./tasks.json"

const { PORT } = process.env;

const typeDefs = gql`
    type Task {
        id: ID
        title: String
        progress: Int
    }

    type Project {
        id: ID
        title: String
        progress: Int
    }

    type User {
        id: ID
        name: String
        username: String
        email: String
        photo: String
        birthdate: String
        position: String
        phone: String
        completed: Int
        inProgress: Int
        notStarted: Int
    }

    type Query {
        tasks: [Task]
        projects: [Project]
        users: [User]
    }
`

const resolvers = {
    Query: {
        tasks: async(_: any, {}, _ctx: any) => {
            return tasksJSON;
        },
        projects: async(_: any, {}, _ctx: any) => {
            return tasksJSON;
        },
        users: async(_: any, {}, _ctx: any) => {
            return tasksJSON;
        },
    }
}

const main = async () => {
    const app = express();
    app.use(cors(), express.json());

    const httpServer = createServer(app);

    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const server = new ApolloServer({ schema });

    await server.start();


    app.use("/graphql", expressMiddleware(server, {
        context: async ({ req }) => ({req})
    }));

    httpServer.listen({ port: PORT }, () => {
        console.log("Server is running")
    })
}

main();