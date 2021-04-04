import { SliderComponent } from 'src/components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { CarouselModule } from 'primeng/carousel';


export default {
    title: 'Image Components/Slider',
    component: SliderComponent,
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

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
    component: SliderComponent,
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


export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};

export const WithWidth = Template.bind({});
WithWidth.args = {
    imgWidth: "500px"
};


