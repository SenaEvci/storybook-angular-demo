import { ToolbarComponent } from './../components/toolbar/toolbar.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { color, text, withKnobs } from '@storybook/addon-knobs';
import { Meta, storiesOf, Story } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';


storiesOf('Toolbar', module)
    .add('Basic', () => ({
        component: ToolbarComponent,
        props: {
            title: text('title', 'My App')
        },
        moduleMetadata: {
            imports: [MatToolbarModule, MatIconModule]
        }
    }))

    .add('color', () => ({
        component: ToolbarComponent,
        props: {
            toolColor: color('toolColor', 'purple')
        },
        moduleMetadata: {
            imports: [MatToolbarModule, MatIconModule]
        }
    }))

