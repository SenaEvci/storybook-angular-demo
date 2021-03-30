import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinkComponent } from 'src/components/link/link.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    }
  },
};


const Template: Story<LinkComponent> = () => ({
  component: LinkComponent,
  props: {
    // we use the select knob to set the color value
    color: select('Color', ['primary', 'secondary'], 'primary'),
    // we use the text knob to set the ngContent value
    content: text('Text', 'Visit Storybooks'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphonex'
    },
    a11y: {
      element: '#root',
      config: {},
      options: {},
      manual: true,
    },
  },

  template: `
      <app-link
        [color]="color"
        [href]="href"
        [target]="target"
      >
        {{ content }}
      </app-link>`,
});
export const Base = Template.bind({});
