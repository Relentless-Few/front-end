import React from 'react';
import { panelStyles } from "../materialui/styles/panelStyles";

const NotificationPanel = props => {
  const classes = panelStyles();

  return (
    <div className={classes.notificationMenu}>
      This is the Notification Panel
    </div>
  )
}

export default NotificationPanel;