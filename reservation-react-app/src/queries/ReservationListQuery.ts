/**
  * //GraphQL Query for loading reservation list
  * Created by Praveen
  */
import gql from "graphql-tag";

export const ReservationListQuery = gql`
  {
    reservations {
        id
        guest_name
        hotel_name
        arrival
        departure
    }
  }
`;