import gql from "graphql-tag";

const query = gql`
  query($makeID: Int!) {
    getCarModels(makeId: $makeID) {
      Make_Name
      Model_ID
      Model_Name
    }
  }
`;

export default query;
