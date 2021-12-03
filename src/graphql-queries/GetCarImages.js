import gql from "graphql-tag";

const query = gql`
  query($carName: String!, $offset: Int) {
    getCarImages(carName: $carName, offset: $offset) {
      thumbnail
      publishedDate
      imageUrl
      imageFormat
      imageId
    }
  }
`;

export default query;
