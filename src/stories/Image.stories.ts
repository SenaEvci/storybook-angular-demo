import { addDecorator, moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageComponent } from '../components/image/image.component';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Image Components/Image',
    component: ImageComponent,
    import: [CommonModule],
    decorators: [
        withKnobs,
    ],
    parameters: {
        // the viewports object from the Essentials addon
        viewport: {
            // the viewports you want to use
            viewports: INITIAL_VIEWPORTS,
            // your own default viewport
            defaultViewport: 'iphone6',
        }
    },

} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
    component: ImageComponent,
    props: args,
    parameters: {
        viewport: {
            defaultViewport: 'iphonex'
        },
        a11y: {
            // optional selector which element to inspect
            element: '#root',
            // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
            config: {},
            // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
            options: {},
            // optional flag to prevent the automatic check
            manual: true,
        },
    }
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
    figCaptionTxt: '',

};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt: 'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards, named on French streets beginning with "rue", numerous parks and charming cafés.'
};

export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};
