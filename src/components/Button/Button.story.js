import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'react-jss';
import theme from '../../theme/theme';

import Button from './Button';

export default {
    title: 'Components|Input/Button',
    component: Button
};

export const story = () => (
    <ThemeProvider theme={theme}>
        <div style={{width: '100%', textAlign: 'center'}}>
        <Button handleClick={action('clicked')} variant='outline' size="sm" root='blue'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} variant='outline' size="md" root='blue'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} variant='outline' size="lg" root='blue'>Large</Button><br/><br/>
        <Button handleClick={action('filled clicked')} size="sm" root='blue'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('filled clicked')} size="md" root='blue'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('filled clicked')} size="lg" root='blue'>Large</Button><br/><br/>
        <Button handleClick={action('text button')} size="sm" root='blue' variant='text'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('text button')} size="md" root='blue' variant='text'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('text button')} size="lg" root='blue' variant='text'>Large</Button><br/><br/>
        <Button handleClick={action('clicked')} variant='disabled' size="sm" root='blue'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} variant='disabled' size="md" root='blue'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} variant='disabled' size="lg" root='blue'>Large</Button>
        </div>
        <hr/>
            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{width: '75%', margin: 'auto', textAlign: 'left'}}>
                    <p style={{fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`, fontSize: '1rem', lineHeight: 1.6}}>
                        Above are four different types of buttons: Outlined, Filled, Text, and Disabled. <br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>variant</span> tag specifies which button will be rendered.<br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>root</span> tag specifies which color button will be rendered.<br/>
                        The <span style={{color: 'DeepSkyBlue'}}>size</span> tag specifies what size the button will be.<br/>
                    </p>
                </div>
                <div style={{width:'75%', margin: 'auto', backgroundColor: 'rgba(0,0,0,.7)'}}>
                <pre style={{marginTop: 15, marginBottom: 10}}><br/>
                    <code className="language-js">
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'blue'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                    </code>
                    <br/>
                </pre>
                </div>
            </div>
    </ThemeProvider>
);
story.story = { name: 'Blue Base' };

export const story2 = () => (
    <ThemeProvider theme={theme}>
        <div style={{width:'100%', textAlign: 'center'}}>
        <Button handleClick={action('clicked')} size="sm" variant='outline' root='orange'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} size="md" variant='outline' root='orange'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('clicked')} size="lg" variant='outline' root='orange'>Large</Button><br/><br/>
        <Button handleClick={action('filled clicked')} size="sm" root='orange'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('filled clicked')} size="md" root='orange'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('filled clicked')} size="lg" root='orange'>Large</Button><br/><br/>
        <Button handleClick={action('Orange button')} size="sm" root='orange' variant='text'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('Orange button')} size="md" root='orange' variant='text'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('Orange button')} size="lg" root='orange' variant='text'>Large</Button><br/><br/>
        <Button handleClick={action('Orange button')} size="sm" root='orange' variant='disabled'>Small</Button>&nbsp;&nbsp;
        <Button handleClick={action('Orange button')} size="md" root='orange' variant='disabled'>Medium</Button>&nbsp;&nbsp;
        <Button handleClick={action('Orange button')} size="lg" root='orange' variant='disabled'>Large</Button>
        </div>
        <hr/>
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{width: '75%', margin: 'auto', textAlign: 'left'}}>
                <p style={{fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`, fontSize: '1rem'}}>
                    Above are four different types of buttons: Outlined, Filled, Text, and Disabled. <br/> 
                    The <span style={{color: 'DeepSkyBlue'}}>variant</span> tag specifies which button will be rendered.<br/> 
                    The <span style={{color: 'DeepSkyBlue'}}>root</span> tag specifies which color button will be rendered.<br/>
                    The <span style={{color: 'DeepSkyBlue'}}>size</span> tag specifies what size the button will be.<br/>
                </p>
            </div>
            <div style={{width:'75%', margin: 'auto', backgroundColor: 'rgba(0,0,0,.7)'}}>
            <pre style={{marginTop: 15, marginBottom: 10}}><br/>
                <code className="language-js">
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Small</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Medium</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Large</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Small</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Medium</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Large</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Small</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Medium</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Large</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Small</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Medium</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                    <span>
                        <span style={{color: 'white'}}>&lt;</span>
                        <span style={{color: 'aquamarine'}}>Button </span>
                        <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                        <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                        size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                        variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                        root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'orange'</span>
                        </span>
                        <span style={{color: 'white'}}>&gt;Large</span>
                        <span style={{color: 'white'}}>&lt;/</span>
                        <span style={{color: 'aquamarine'}}>Button</span>
                        <span style={{color: 'white'}}>&gt;</span>
                    </span><br/>
                </code>
                <br/>
            </pre>
            </div>
        </div>
    </ThemeProvider>
);
story2.story = { name: 'Orange Base' };

export const story3 = () => (
    <ThemeProvider theme={theme}>
        <div style={{width: '100%', textAlign: 'center'}}>
            <Button handleClick={action('clicked')} size="sm" variant='outline' root='danger'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('clicked')} size="md" variant='outline' root='danger'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('clicked')} size="lg" variant='outline' root='danger'>Large</Button><br/><br/>
            <Button handleClick={action('filled clicked')} size="sm" root='danger'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('filled clicked')} size="md" root='danger'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('filled clicked')} size="lg" root='danger'>Large</Button><br/><br/>
            <Button handleClick={action('Orange button')} size="sm" root='danger' variant='text'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="md" root='danger' variant='text'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="lg" root='danger' variant='text'>Large</Button><br/><br/>
            <Button handleClick={action('Orange button')} size="sm" root='danger' variant='disabled'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="md" root='danger' variant='disabled'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="lg" root='danger' variant='disabled'>Large</Button>
        </div>
        <hr/>
            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{width: '75%', margin: 'auto', textAlign: 'left'}}>
                    <p style={{fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`, fontSize: '1rem'}}>
                        Above are four different types of buttons: Outlined, Filled, Text, and Disabled. <br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>variant</span> tag specifies which button will be rendered.<br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>root</span> tag specifies which color button will be rendered.<br/>
                        The <span style={{color: 'DeepSkyBlue'}}>size</span> tag specifies what size the button will be.<br/>
                    </p>
                </div>
                <div style={{width:'75%', margin: 'auto', backgroundColor: 'rgba(0,0,0,.7)'}}>
                <pre style={{marginTop: 15, marginBottom: 10}}><br/>
                    <code className="language-js">
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'danger'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                    </code>
                    <br/>
                </pre>
                </div>
            </div>
    </ThemeProvider>
);
story3.story = { name: 'Danger Base' };

export const story4 = () => (
    <ThemeProvider theme={theme}>
        <div style={{width: '100%', textAlign: 'center'}}>
            <Button handleClick={action('clicked')} size="sm" variant='outline' root='success'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('clicked')} size="md" variant='outline' root='success'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('clicked')} size="lg" variant='outline' root='success'>Large</Button><br/><br/>
            <Button handleClick={action('filled clicked')} size="sm" root='success'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('filled clicked')} size="md" root='success'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('filled clicked')} size="lg" root='success'>Large</Button><br/><br/>
            <Button handleClick={action('Orange button')} size="sm" root='success' variant='text'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="md" root='success' variant='text'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="lg" root='success' variant='text'>Large</Button><br/><br/>
            <Button handleClick={action('Orange button')} size="sm" root='success' variant='disabled'>Small</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="md" root='success' variant='disabled'>Medium</Button>&nbsp;&nbsp;
            <Button handleClick={action('Orange button')} size="lg" root='success' variant='disabled'>Large</Button>
            </div>
        <hr/>
            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{width: '75%', margin: 'auto', textAlign: 'left'}}>
                    <p style={{fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`, fontSize: '1rem'}}>
                        Above are four different types of buttons: Outlined, Filled, Text, and Disabled. <br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>variant</span> tag specifies which button will be rendered.<br/> 
                        The <span style={{color: 'DeepSkyBlue'}}>root</span> tag specifies which color button will be rendered.<br/>
                        The <span style={{color: 'DeepSkyBlue'}}>size</span> tag specifies what size the button will be.<br/>
                    </p>
                </div>
                <div style={{width:'75%', margin: 'auto', backgroundColor: 'rgba(0,0,0,.7)'}}>
                <pre style={{marginTop: 15, marginBottom: 10}}><br/>
                    <code className="language-js">
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'outline' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'text' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'sm' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Small</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'md' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Medium</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                        <span>
                            <span style={{color: 'white'}}>&lt;</span>
                            <span style={{color: 'aquamarine'}}>Button </span>
                            <span style={{color: 'DeepSkyBlue'}}>handleClick<span style={{color: 'white'}}>=</span>&#123;
                            <span style={{color: 'beige'}}>action(<span style={{color: 'coral'}}>'clicked'</span>)</span>&#125; 
                            size<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'lg' </span> 
                            variant<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'disabled' </span> 
                            root<span style={{color: 'white'}}>=</span><span style={{color: 'coral'}}>'success'</span>
                            </span>
                            <span style={{color: 'white'}}>&gt;Large</span>
                            <span style={{color: 'white'}}>&lt;/</span>
                            <span style={{color: 'aquamarine'}}>Button</span>
                            <span style={{color: 'white'}}>&gt;</span>
                        </span><br/>
                    </code>
                    <br/>
                </pre>
                </div>
            </div>
    </ThemeProvider>
);
story4.story = { name: 'Success Base' };
