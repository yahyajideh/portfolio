import { css } from '@emotion/react';

import GreycliffBoldwoff from 'src/fonts/GreyCliff/greycliffcf-bold-webfont.woff';
import GreycliffBoldwoff2 from 'src/fonts/GreyCliff/greycliffcf-bold-webfont.woff2';

import GreycliffDemiboldwoff from 'src/fonts/GreyCliff/greycliffcf-demibold-webfont.woff';
import GreycliffDemiboldwoff2 from 'src/fonts/GreyCliff/greycliffcf-demibold-webfont.woff2';

import GreycliffExtraboldwoff from 'src/fonts/GreyCliff/greycliffcf-extrabold-webfont.woff';
import GreycliffExtraboldwoff2 from 'src/fonts/GreyCliff/greycliffcf-extrabold-webfont.woff2';

import GreycliffHeavywoff from 'src/fonts/GreyCliff/greycliffcf-heavy-webfont.woff';

import GreycliffLightwoff from 'src/fonts/GreyCliff/greycliffcf-light-webfont.woff';
import GreycliffLightwoff2 from 'src/fonts/GreyCliff/greycliffcf-light-webfont.woff2';

import GreycliffMediumwoff from 'src/fonts/GreyCliff/greycliffcf-medium-webfont.woff';
import GreycliffMediumwoff2 from 'src/fonts/GreyCliff/greycliffcf-medium-webfont.woff2';

import GreycliffRegularwoff from 'src/fonts/GreyCliff/greycliffcf-regular-webfont.woff';
import GreycliffRegularwoff2 from 'src/fonts/GreyCliff/greycliffcf-regular-webfont.woff2';

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
