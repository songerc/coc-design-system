import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'react-jss';
import theme from '../../theme/theme';

import Button from './Button';

storiesOf('Button', module)
    .add('Blue Base Outline', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('clicked')} variant='outline' root='blue'>Blue Outline</Button>
        </ThemeProvider>
    ))
    .add('Blue Base Filled', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('filled clicked')} root='blue'>Blue Filled</Button>
        </ThemeProvider>
    ))
    .add('Blue Base Text button', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('text button')} url='https://google.com' root='blue' variant='text'>Blue Text</Button>
        </ThemeProvider>
    ))
    .add('Orange Base Outline', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('clicked')} variant='outline' root='orange'>Orange Outline</Button>
        </ThemeProvider>
    ))
    .add('Orange Base Filled', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('filled clicked')} root='orange'>Orange Filled</Button>
        </ThemeProvider>
    ))
    .add('Orange Base Text button', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('text button')} root='orange' variant='text'>Orange Text</Button>
        </ThemeProvider>
    ))
    .add('Danger Base Outline', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('clicked')} variant='outline' root='danger'>Danger Outline</Button>
        </ThemeProvider>
    ))
    .add('Danger Base Filled', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('filled clicked')} root='danger'>Danger Filled</Button>
        </ThemeProvider>
    ))
    .add('Danger Base Text button', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('text button')} root='danger' variant='text'>Danger Text</Button>
        </ThemeProvider>
    ))
    .add('Success Base Outline', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('clicked')} variant='outline' root='success'>Success Outline</Button>
        </ThemeProvider>
    ))
    .add('Success Base Filled', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('filled clicked')} url='https://www.google.com' root='success'>Success Filled</Button>
        </ThemeProvider>
    ))
    .add('Success Base Text button', () => (
        <ThemeProvider theme={theme}>
            <Button handleClick={action('text button')} root='success' variant='text'>Success Text</Button>
        </ThemeProvider>
    ));