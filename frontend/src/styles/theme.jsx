import React from 'react';
import '../font.css'

export const theme = {
  global: {
    font: {
      family: "windows",
      size: "20px",
      height: "20px",
    },
    colors: {
      brand: 'white',
      background: 'black',
      'background-contrast': {
        light: 'white',
        dark: 'white',
      },
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      black: '#000000',
      'text-strong': {
        dark: 'white',
        light: 'white',
      },
      'text-weak': {
        dark: '#E2F914',
        light: '#555555',
      },
      'text-xweak': {
        dark: 'white',
        light: 'white',
      },
      icon: {
        dark: 'white',
        light: 'white',
      },
    },
  },
};
