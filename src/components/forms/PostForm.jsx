import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { sharedStyles } from "../../materialui/styles/styles";
import { connect } from "react-redux";
import { createPost } from "../../actions/actions";
import { useQuery } from "@apollo/react-hooks";
import { USER_ORGS } from "../../queries/userQueries";
import axios from "axios";
import { useState } from "react";

const PostForm = props => {
  //const { loading, error, data } = useQuery(USER_ORGS);
  const classes = sharedStyles();

  const [post, setPost] = useState("")

  const onSubmit = () => {
    // Need to code createPost in actions
    props.createPost();
  };

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };


  return (
      <div>
        <textarea 
          value={post}
          onChange={handleChange}
          rows={15}
          cols={60}
          placeholder="What's on your mind?..."
        />
        <div>
          <Button
            variant="contained"
            onClick={onSubmit}
            className={classes.standardButton}
          >
            Create Post
          </Button>
          <Button
            variant="contained"
            onClick={() => props.history.push('/posts')}
            className={classes.standardButton}
          >
            Cancel
          </Button>
        </div>
      </div>
  );
};
const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, { createPost })(PostForm));
