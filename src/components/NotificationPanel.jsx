import React from 'react';
import { panelStyles } from "../materialui/styles/panelStyles";

const NotificationPanel = props => {
  const classes = panelStyles();

  return (
    <div className={classes.notificationMenu}>
      
      <div className={classes.icon} />
      <span className={classes.badge}>3</span>

      <div className={classes.icon} />
      <span className={classes.badge}>3</span>

      <div className={classes.icon} />
      <span className={classes.badge}>1</span>

      <div className={classes.icon} />
      <span className={classes.badge}>1</span>

    </div>
  )
}

export default NotificationPanel;