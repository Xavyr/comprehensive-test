// What is occuring in this file

import { gql } from "apollo-server-express";

export const Client = gql`
  type Client {
    id: String!
    email: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    properties: [Property!]!
  }

  input ClientInput {
    email: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    servicingCompany: String!
  }

  type Mutation {
    insertClientAndInsertCompanyToClient(input: ClientInput!): Client!
  }

  type Query {
    getAllClients(id: ID): [Client]
    clientById(id: String!): [Client!]!
    clientsByCompanyId(companyId: String!): [Client!]!
  }
`;
