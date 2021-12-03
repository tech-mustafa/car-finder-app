import gql from "graphql-tag";

const query = gql`
  {
    getAllMakes {
      Make_ID
      Make_Name
    }
  }
`;

export default query;
