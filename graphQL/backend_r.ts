// Explain what a resolver is in a GQL sense

// What is parent, args and context going to be in these resolvers

const resolvers = {
    Mutation: {
      insertCompany: async (parent, args, context) => {
        const { input } = args;
        const savedCompany = await companyService.insertCompany(input);
        return savedCompany;
      },
    },
    Query: {
      companyByBusinessOwnerId: async (parent, args, context) => {
        const { businessOwnerId } = args;
        return await companyService.companyByBusinessOwnerId({
          businessOwnerId,
        });
      },
    },
  };