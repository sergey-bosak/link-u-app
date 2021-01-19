import React from 'react';
import AnimatedTabs from '../../components/Tabs';
import { petsItems } from './content';

function Store({ navigation: { goBack } }) {
  return <AnimatedTabs goBack={goBack} />;
}

export default Store;
