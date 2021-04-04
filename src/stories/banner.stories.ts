import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { BannerComponent } from 'src/components/banner/banner.component';

export default {
    title: 'Image Components/Banner',
    component: BannerComponent,
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

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
    component: BannerComponent,
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

/*
export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
    figCaptionTxt: '',

};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt: 'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards, named on French streets beginning with "rue", numerous parks and charming cafés.'
};*/

export const NoImageAltTxt = Template.bind({});
NoImageAltTxt.args = {
    altTxt: '',

};

export const WithImageAltTxt = Template.bind({});
WithImageAltTxt.args = {
    altTxt: 'Banner Exist',

};

export const WithFullHeight = Template.bind({});
WithFullHeight.args = {
    imgHeight: "500px"
};

export const WithHalfHeight = Template.bind({});
WithHalfHeight.args = {
    imgHeight: "250px"
};


