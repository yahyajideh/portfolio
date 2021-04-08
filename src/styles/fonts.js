import { css } from '@emotion/react';

import GreycliffBoldeot from '../fonts/GreyCliff/greycliffcf-bold-webfont.eot';
import GreycliffBoldsvg from '../fonts/GreyCliff/greycliffcf-bold-webfont.svg';
import GreycliffBoldttf from '../fonts/GreyCliff/greycliffcf-bold-webfont.ttf';
import GreycliffBoldwoff from '../fonts/GreyCliff/greycliffcf-bold-webfont.woff';
import GreycliffBoldwoff2 from '../fonts/GreyCliff/greycliffcf-bold-webfont.woff2';
import GreycliffDemiBoldeot from '../fonts/GreyCliff/greycliffcf-demibold-webfont.eot';
import GreycliffDemiBoldsvg from '../fonts/GreyCliff/greycliffcf-demibold-webfont.svg';
import GreycliffDemiboldttf from '../fonts/GreyCliff/greycliffcf-demibold-webfont.ttf';
import GreycliffDemiboldwoff from '../fonts/GreyCliff/greycliffcf-demibold-webfont.woff';
import GreycliffDemiboldwoff2 from '../fonts/GreyCliff/greycliffcf-demibold-webfont.woff2';
import GreycliffExtraboldeot from '../fonts/GreyCliff/greycliffcf-extrabold-webfont.eot';
import GreycliffExtraboldsvg from '../fonts/GreyCliff/greycliffcf-extrabold-webfont.svg';
import GreycliffExtraboldttf from '../fonts/GreyCliff/greycliffcf-extrabold-webfont.ttf';
import GreycliffExtraboldwoff from '../fonts/GreyCliff/greycliffcf-extrabold-webfont.woff';
import GreycliffExtraboldwoff2 from '../fonts/GreyCliff/greycliffcf-extrabold-webfont.woff2';
import GreycliffHeavyeot from '../fonts/GreyCliff/greycliffcf-heavy-webfont.eot';
import GreycliffHeavysvg from '../fonts/GreyCliff/greycliffcf-heavy-webfont.svg';
import GreycliffHeavyttf from '../fonts/GreyCliff/greycliffcf-heavy-webfont.ttf';
import GreycliffHeavywoff from '../fonts/GreyCliff/greycliffcf-heavy-webfont.woff';
import GreycliffLighteot from '../fonts/GreyCliff/greycliffcf-light-webfont.eot';
import GreycliffLightsvg from '../fonts/GreyCliff/greycliffcf-light-webfont.svg';
import GreycliffLightttf from '../fonts/GreyCliff/greycliffcf-light-webfont.ttf';
import GreycliffLightwoff from '../fonts/GreyCliff/greycliffcf-light-webfont.woff';
import GreycliffLightwoff2 from '../fonts/GreyCliff/greycliffcf-light-webfont.woff2';
import GreycliffMediumeot from '../fonts/GreyCliff/greycliffcf-medium-webfont.eot';
import GreycliffMediumsvg from '../fonts/GreyCliff/greycliffcf-medium-webfont.svg';
import GreycliffMediuimttf from '../fonts/GreyCliff/greycliffcf-medium-webfont.ttf';
import GreycliffMediumwoff from '../fonts/GreyCliff/greycliffcf-medium-webfont.woff';
import GreycliffMediumwoff2 from '../fonts/GreyCliff/greycliffcf-medium-webfont.woff2';
import GreycliffRegulareot from '../fonts/GreyCliff/greycliffcf-regular-webfont.eot';
import GreycliffRegularsvg from '../fonts/GreyCliff/greycliffcf-regular-webfont.svg';
import GreycliffRegularttf from '../fonts/GreyCliff/greycliffcf-regular-webfont.ttf';
import GreycliffRegularwoff from '../fonts/GreyCliff/greycliffcf-regular-webfont.woff';
import GreycliffRegularwoff2 from '../fonts/GreyCliff/greycliffcf-regular-webfont.woff2';

const greycliffFont = {
  fontname: 'Greycliff',
  weights: [
    'Light',
    'Regular',
    'Medium',
    'Heavy',
    'Demibold',
    'Bold',
    'Extrabold',
  ],
  extensions: ['woff', 'woff2', 'svg', 'ttf'],
};

const createFontFace = family => {
  let font = '';

  font += `
    @font-face {
      font-family: ${family.fontname};
      src: url(../fonts/GreyCliff/greycliffcf-bold-webfont.woff) format('woff');
      font-weight; bold;
      font-style: normal;
    }
  `;

  return font;
};

const greycliff = createFontFace(greycliffFont);

const Fonts = css`
  ${greycliff}
`;

export default Fonts;
