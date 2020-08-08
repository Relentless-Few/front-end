import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS } from "../queries/userQueries";

const CommentContainer = props => {
  const { loading, error, data } = useQuery(QUERY_USERS);
  // Will need another query for comments
  
  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
  }, [data])

  return (
    <div>
      <h3>Sophia Simionescu</h3>
      <h5>Today at 2:35 PM</h5>
      {/* <p>{!loading ? data : ''}</p> */}
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam.</h4>
    </div>
  )
};

export default CommentContainer;