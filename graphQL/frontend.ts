
// Please explain what this is... how it is used, what it takes and what it returns

const GET_ALL_CLIENTS = gql`
  query GetAllTeamMembers($id: ID) {
    getAllCLIENTS(id: $id) {
      id
      firstName
      lastName
      phoneNumber
      email
    }
  }
`;