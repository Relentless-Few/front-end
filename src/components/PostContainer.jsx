import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS } from "../queries/userQueries";
import CommentContainer from "./CommentContainer";
import Button from "@material-ui/core/Button";
import { sharedStyles } from "../materialui/styles/styles";
import computerImg from "../images/computer.jpeg";

const PostContainer = props => {
  const { loading, error, data } = useQuery(QUERY_USERS);

  const classes = sharedStyles();
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
    <div className={classes.mainWindow}>
      <div className={classes.posts}>
      <Button
        variant="contained"
        onClick={() => props.history.push("/createpost")}
        className={classes.standardButton}
      >
        Create Post
      </Button>
      {/* <div className={classes.posts}> */}
        <h3>Tiffany Simionescu</h3>
        {/* <p>{!loading ? data : ''}</p> */}
        <img src={computerImg} alt="computer" className={classes.image} />
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
    </div>
  )
};

export default PostContainer;