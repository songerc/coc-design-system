import { configure } from "@storybook/react";
import { setOptions } from '@storybook/addon-options';

// Option defaults
setOptions({
    /**
     * Name to display
     * @type {String}
     */
    name: 'COC Design System',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/songerc/coc-design-system',
    /**
     * Show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * Dsplay left panel that shows a list of stories
     * @type {Boolean}
     */
    showLeftPanel: true,
    /**
     * Display horizontal panel that show addon config
     * @type {Boolean}
     */
    showDownPanel: false,
    /**
     * Display floating search box to search stories
     * @type {Boolean}
     */
    showSearchBox: true,
    
})