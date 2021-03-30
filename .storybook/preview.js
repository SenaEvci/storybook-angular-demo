
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);

setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports:  { 
    ...MINIMAL_VIEWPORTS,
    ...customViewports}, // newViewports would be an ViewportMap. (see below for examples)
    //instead minimal able to add customViewvports
    
  },
}

//for add new devices

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

