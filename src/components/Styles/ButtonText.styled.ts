import { css } from 'styled-components';
import { getColor } from '../../theme/utils/getColors';
import { getTextProps } from '../../theme/utils';
import { ButtonProps } from '../Button/Button.types';

export const StyledButtonText = css<ButtonProps>`
  letter-spacing: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button2').letterSpacing
      : getTextProps('button1').letterSpacing};
  font-weight: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button2').weight
      : getTextProps('button1').weight};
  font-size: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button3').size
      : size === 'xl'
      ? getTextProps('button1').size
      : getTextProps('button2').size};
  color: ${({ varient, backgroundColor }) =>
    varient === 'contained' ? getColor('white') : getColor(backgroundColor)};
  color: ${({ disabled, varient }) =>
    disabled
      ? varient !== 'contained'
        ? getColor('paper', 800)
        : getColor('white')
      : undefined};
  text-align: ${({ textAlign }) => textAlign};
  text-align-last: ${({ textAlignLast }) => textAlignLast};
  text-anchor: ${({ textAnchor }) => textAnchor};
  text-combine-upright: ${({ textCombineUpright }) => textCombineUpright};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-decoration-color: ${({ textDecorationColor }) => textDecorationColor};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine};
  text-decoration-skip: ${({ textDecorationSkip }) => textDecorationSkip};
  text-decoration-skip-ink: ${({ textDecorationSkipInk }) =>
    textDecorationSkipInk};
  text-decoration-style: ${({ textDecorationStyle }) => textDecorationStyle};
  text-decoration-thickness: ${({ textDecorationThickness }) =>
    textDecorationThickness};
  text-emphasis: ${({ textEmphasis }) => textEmphasis};
  text-underline-position: ${({ textUnderlinePosition }) =>
    textUnderlinePosition};
  text-emphasis-color: ${({ textEmphasisColor }) => textEmphasisColor};
  text-emphasis-position: ${({ textEmphasisPosition }) => textEmphasisPosition};
  text-emphasis-style: ${({ textEmphasisStyle }) => textEmphasisStyle};
  text-indent: ${({ textIndent }) => textIndent};
  text-justify: ${({ textJustify }) => textJustify};
  text-orientation: ${({ textOrientation }) => textOrientation};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-rendering: ${({ textRendering }) => textRendering};
  text-shadow: ${({ textShadow }) => textShadow};
  text-size-adjust: ${({ textSizeAdjust }) => textSizeAdjust};
  text-transform: ${({ textTransform }) => textTransform};
  text-underline-offset: ${({ textUnderlineOffset }) => textUnderlineOffset};
  font: ${({ font }) => font};
  font-family: ${({ fontFamily }) => fontFamily};
  font-feature-settings: ${({ fontFeatureSettings }) => fontFeatureSettings};
  font-kerning: ${({ fontKerning }) => fontKerning};
  font-language-override: ${({ fontLanguageOverride }) => fontLanguageOverride};
  font-optical-sizing: ${({ fontOpticalSizing }) => fontOpticalSizing};
  font-size-adjust: ${({ fontSizeAdjust }) => fontSizeAdjust};
  font-smooth: ${({ fontSmooth }) => fontSmooth};
  font-stretch: ${({ fontStretch }) => fontStretch};
  font-style: ${({ fontStyle }) => fontStyle};
  font-synthesis: ${({ fontSynthesis }) => fontSynthesis};
  font-variant: ${({ fontVariant }) => fontVariant};
  font-variant-alternates: ${({ fontVariantAlternates }) =>
    fontVariantAlternates};
  font-variant-caps: ${({ fontVariantCaps }) => fontVariantCaps};
  font-variant-east-asian: ${({ fontVariantEastAsian }) =>
    fontVariantEastAsian};
  font-variant-ligatures: ${({ fontVariantLigatures }) => fontVariantLigatures};
  font-variant-numeric: ${({ fontVariantNumeric }) => fontVariantNumeric};
  font-variant-position: ${({ fontVariantPosition }) => fontVariantPosition};
  font-variation-settings: ${({ fontVariationSettings }) =>
    fontVariationSettings};
  word-break: ${({ wordBreak }) => wordBreak};
  word-spacing: ${({ wordSpacing }) => wordSpacing};
`;
