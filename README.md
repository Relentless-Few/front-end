Once you have cloned the repository run npm -i to install all the packages
There are 2 configuration options in VS Code you need to set for prettier to work properly

Set VS Code Preferences for Prettier

Go to File-->Preferences-->Settings
Search for format on save and select the radio button
Search for Prettier:Require Config and select the radio button

The following VS Code Extensions should be installed

Prettier- Code formatter
ESLint

Material-UI has been setup (in case we use this method).  There is a materialui folder that contains the theme- theme/theme.js that sets the primary and secondary colors.  There is a styles/styles.js were you can create CSS styles so that the components are not polluted with CSS-in-JS.  You can create as many files for styles as you want.
