import { css } from '@emotion/react';

import GreycliffBoldwoff from '@fonts/GreyCliff/Greycliffcf-bold-webfont.woff';
import GreycliffBoldwoff2 from '@fonts/GreyCliff/Greycliffcf-bold-webfont.woff2';

import GreycliffDemiboldwoff from '@fonts/GreyCliff/Greycliffcf-demibold-webfont.woff';
import GreycliffDemiboldwoff2 from '@fonts/GreyCliff/Greycliffcf-demibold-webfont.woff2';

import GreycliffExtraboldwoff from '@fonts/GreyCliff/Greycliffcf-extrabold-webfont.woff';
import GreycliffExtraboldwoff2 from '@fonts/GreyCliff/Greycliffcf-extrabold-webfont.woff2';

import GreycliffHeavywoff from '@fonts/GreyCliff/Greycliffcf-heavy-webfont.woff';

import GreycliffLightwoff from '@fonts/GreyCliff/Greycliffcf-light-webfont.woff';
import GreycliffLightwoff2 from '@fonts/GreyCliff/Greycliffcf-light-webfont.woff2';

import GreycliffMediumwoff from '@fonts/GreyCliff/Greycliffcf-medium-webfont.woff';
import GreycliffMediumwoff2 from '@fonts/GreyCliff/Greycliffcf-medium-webfont.woff2';

import GreycliffRegularwoff from '@fonts/GreyCliff/Greycliffcf-regular-webfont.woff';
import GreycliffRegularwoff2 from '@fonts/GreyCliff/Greycliffcf-regular-webfont.woff2';

const GreyclifNormalWeights = {
  300: [GreycliffLightwoff, GreycliffLightwoff2],
  400: [GreycliffRegularwoff, GreycliffRegularwoff2],
  500: [GreycliffMediumwoff, GreycliffMediumwoff2],
  600: [GreycliffDemiboldwoff, GreycliffDemiboldwoff2],
  700: [GreycliffBoldwoff, GreycliffBoldwoff2],
  800: [GreycliffExtraboldwoff, GreycliffExtraboldwoff2],
  900: [GreycliffHeavywoff],
};

const greycliff = {
  name: 'GreyCliff',
  normal: GreyclifNormalWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            ${typeof woff2 == 'undefined' ? `` : `url(${woff}) format('woff')`};
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const greycliffNormal = createFontFaces(greycliff);

const Fonts = css`
  ${greycliffNormal}
`;

export default Fonts;
