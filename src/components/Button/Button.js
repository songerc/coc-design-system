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
        color: theme.default.buttonColor,
        backgroundColor: 'transparent',
        borderColor: theme.default.buttonColor,
        margin: 0,
        display: 'inline-block',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        border: '1px solid transparent',
        fontSize: '1rem',
        fontWeight: 400,
        padding: '.375rem .75rem'
    }
});

// Define the component using these styles and pass it to the classes prop
// use this to assign scoped class names
const Button = ({classes, children, handleClick}) => (
    <button className={classes.defaultButton} onClick={() => handleClick()}>
        {children}
    </button>
);

// export component with HOC (higher order component) to apply styles from above
export default injectSheet(styles)(Button);