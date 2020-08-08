import React from 'react';
import { panelStyles } from "../materialui/styles/panelStyles";

const NotificationPanel = props => {
  const classes = panelStyles();

  return (
    <div className={classes.notificationMenu}>
      <div className={classes.icon} />
      <div className={classes.icon} />
      <div className={classes.icon} />
      <div className={classes.icon} />
    </div>
  )
}

export default NotificationPanel;