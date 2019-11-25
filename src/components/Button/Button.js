import React from 'react';
import injectSheet from 'react-jss';
/**
 * OVERVIEW: 
 *  CSS is written as a Javascript object
 *  We wrap our component in a higher-order-component (HOC)
 *  The HOC compiles the CSS object into actual css and injects it into the <head> section as <style></style> elements
 *  The HOC also provides our component with a classes prop, which contains any class names we wrote in our CSS object earlier
 *  We then apply class names to our components using the classes object
 */


// CSS file in a js object
const styles = theme => ({

    // All top level object keys are different class names
    defaultButton: {
        // Global color applied from theme
        color: theme.text.color,
        margin: {
            top: 5, // jss-default-unit makes this 5px
            right: 0,
            bottom: 5,
            left: "1rem"
        },

        // Using jss gives us SASS-like qualities like nested &
        "& span": {
            // jss nested applies this to span child of button
            fontWeight: "bold" // similar to react in camel casing of class names
        }
    },
    defaultLabel: {
        fontStyle: "italic"
    }
});

// Define the component using these styles and pass it to the classes prop
// use this to assign scoped class names
const Button = ({classes, children, handleClick}) => (
    <button className={classes.defaultButton} onClick={() => handleClick()}>
        <span className={classes.defaultLabel}>{children}</span>
    </button>
);

// export component with HOC (higher order component) to apply styles from above
export default injectSheet(styles)(Button);