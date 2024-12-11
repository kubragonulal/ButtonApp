import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary Button', () => <Button type="primary">Primary Button</Button>)
  .add('Default Button', () => <Button type="default">Default Button</Button>)
  .add('Dashed Button', () => <Button type="dashed">Dashed Button</Button>)
  .add('Text Button', () => <Button type="text">Text Button</Button>)
  .add('Link Button', () => <Button type="link">Link Button</Button>);
