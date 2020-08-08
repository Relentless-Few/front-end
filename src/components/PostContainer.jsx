import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS } from "../queries/userQueries";
import CommentContainer from "./CommentContainer";

const PostContainer = props => {
  const { loading, error, data } = useQuery(QUERY_USERS);
  // Will need another query for posts
  // will most likely need another query for retreiving post's comments

  // const onSubmit = () => {
  //     if (!loading) {
  //       console.log(data);
  //   props.userLogon(props);
  //     }
  // };

  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
  }, [data])

  return (
    <div style={{ width: "450px", padding: "10px", marginTop: "20px", borderRadius: "10px", backgroundColor: "lightgray"}}>
      <h3>Tiffany Simionescu</h3>
      {/* <p>{!loading ? data : ''}</p> */}
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.</h4>
      <h3>Comments:</h3>
      <div>
      <CommentContainer />
      </div>
    </div>
  )
};

export default PostContainer;