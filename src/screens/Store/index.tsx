import React from 'react';
import AnimatedTabs from '../../components/Tabs';

function Store({ navigation: { goBack, navigate } }) {
  return <AnimatedTabs goBack={goBack} navigate={() => navigate('Cart')} />;
}

export default Store;
