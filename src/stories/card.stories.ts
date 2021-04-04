
import { Meta, storiesOf, Story } from "@storybook/angular";
import { CardComponent } from "src/components/card/card.component";
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


/*

storiesOf('Image Components/Card', module)
    .add('empty', () => ({
        component: CardComponent,
        props: {
            imgSrc: ''
        }
    }))

    .add('without photo', () => ({
        component: CardComponent,
        props: {
            imgSrc: '',
            title: 'Hello card!',
            subtitle: 'Well hello there 👋'
        }
    }))
    .add('with title', () => ({
        component: CardComponent,
        props: {
            title: 'Hello card!'
        }
    }))
    .add('with title and subtitle', () => ({
        component: CardComponent,
        props: {
            title: 'Hello card!',
            subtitle: 'Well hello there 👋'
        }
    }))
    .add('with Width', () => ({
        component: CardComponent,
        props: {
            imgWidth: '200px',
        }
    }))

    .add(
        'with notes',
        withNotes('Just a few notes about this story...')(() => ({
            component: CardComponent,
            props: {}
        }))
    )
    .add('with action', () => ({
        component: CardComponent,
        props: {
            title: 'A card...',
            subtitle: 'Waiting to be clicked-on',
            btnClicked: action('👊 Button was clicked')
        }
    }));*/


export default {
    title: 'Image Components/Card',
    component: CardComponent,
    import: [CommonModule],
    decorators: [
        withKnobs,
    ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    component: CardComponent,
    props: args,
    parameters: {
        a11y: {
            element: '#root',
            config: {},
            options: {},
            manual: true,
        },
    }
});

export const empty = Template.bind({});
empty.args = {
    imgSrc: '',
    title: ''

};

export const withoutPhoto = Template.bind({});
withoutPhoto.args = {
    imgSrc: '',
    title: 'Hello card!',
    subtitle: 'Well hello there 👋'
};
export const withTitle = Template.bind({});
withTitle.args = {
    title: 'Hello card!',
};
export const WithFull = Template.bind({});
WithFull.args = {
    title: 'Hello card!',
    subtitle: 'Well hello there 👋'
};


export const WithWidth = Template.bind({});
WithWidth.args = {
    imgWidth: "500px"
};