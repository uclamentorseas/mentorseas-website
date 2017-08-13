import { randomSort } from 'utilities/sort';

import ucla1 from './ucla1.jpg';
import ucla2 from './ucla2.jpg';
import ucla3 from './ucla3.jpg';

const genericImageList = [
  ucla1,
  ucla2,
  ucla3,
];

export const getSomeRandomUclaImages = (howMany) => (
  genericImageList.sort(randomSort).slice(0, howMany + 1)
);

export const getSomeUclaImages = (howMany) => (
  genericImageList.slice(0, howMany + 1)
);
