import { Assets } from 'react-native-ui-lib';

const petsItems = [
  {
    id: 1,
    label: 'Dog Chain',
    images: [
      { image: Assets.main.dogChain, key: 'dog chain 1' },
      { image: Assets.main.dogChain1, key: 'dog chain 2' },
    ],
    description:
      'Small - Neck Size 12"-15", Width 5/8". Please measure your dog’s neck girth with a soft measuring tape to choose a correct size.\n' +
      'Reflective dog collar is made of high quality thick yet soft nylon with reflective thread. Equipped with lockable plastic side release buckle and stainless steel chain and O-rings.\n' +
      'Martingale style collars for dogs are handmade with great attention to detain. Reflection is added for extra pet safety. Perfect for dog training as well as daily use.\n' +
      'Training dog collars are available in 8 vibrant colors: black, blue, red, orange, lime green, pink, purple and mint green. It is a great combination of style, quality and comfort.\n' +
      'Browse our store to find matching dog leashes for our adjustable martingale collars for dogs.',
  },
  {
    id: 2,
    label: 'Dog Chain 1',
    images: [
      { image: Assets.main.dogChain, key: 'dog chain 5' },
      { image: Assets.main.dogChain1, key: 'dog chain 6' },
    ],
    description: 'Dog 1 chain silver Dog chain silver Dog chain silver',
  },
  {
    id: 3,
    label: 'Dog Chain 1',
    images: [
      { image: Assets.main.dogChain, key: 'dog chain 7' },
      { image: Assets.main.dogChain1, key: 'dog chain 8' },
    ],
    description: 'Dog 1 chain silver Dog chain silver Dog chain silver',
  },
  {
    id: 4,
    label: 'Dog Chain 1',
    images: [
      { image: Assets.main.dogChain, key: 'dog chain 9' },
      { image: Assets.main.dogChain1, key: 'dog chain 10' },
    ],
    description: 'Dog 1 chain silver Dog chain silver Dog chain silver',
  },
];

export { petsItems };
