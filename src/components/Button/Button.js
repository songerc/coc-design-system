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
    'blue-default': theme.button.blue.default,
    'blue-outline': theme.button.blue.outline,
    'blue-text': theme.button.blue.text,
    'orange-default': theme.button.orange.default,
    'orange-outline': theme.button.orange.outline,
    'orange-text': theme.button.orange.text,
    'danger-default': theme.button.danger.default,
    'danger-outline': theme.button.danger.outline,
    'danger-text': theme.button.danger.text,
    'success-default': theme.button.success.default,
    'success-outline': theme.button.success.outline,
    'success-text': theme.button.success.text,
    'link-blue-default': theme.button.link.blue.default,
    'link-blue-outline': theme.button.link.blue.outline,
    'link-blue-text': theme.button.link.blue.text,
    'link-orange-default': theme.button.link.orange.default,
    'link-orange-outline': theme.button.link.orange.outline,
    'link-orange-text': theme.button.link.orange.text,
    'link-danger-default': theme.button.link.danger.default,
    'link-danger-outline': theme.button.link.danger.outline,
    'link-danger-text': theme.button.link.danger.text,
    'link-success-default': theme.button.link.success.default,
    'link-success-outline': theme.button.link.success.outline,
    'link-success-text': theme.button.link.success.text,
});

// Define the component using these styles and pass it to the classes prop
// use this to assign scoped class names
const Button = ({classes, children, handleClick, variant, root, url}) => (
    (url === undefined ? (
        <button className={variant ? classes[root + '-' + variant] : classes[root + '-default']} onClick={() => handleClick()}>
            {children}
        </button>
    ) : (
        <a href={url} className={variant ? classes['link-' + root + '-' + variant] : classes['link-' + root + '-default']}>
            {children}
        </a>
    ))
);

// export component with HOC (higher order component) to apply styles from above
export default injectSheet(styles)(Button);