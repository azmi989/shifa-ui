import { css } from 'styled-components';
import { getColor } from '../../theme/utils/getColors';
import { getTextProps } from '../../theme/utils';
import { TextType } from '../../../types';

export const StyledText = css<TextType>`
  ${props => css`
    text-align: ${props.textAlign ?? props.textAlign};
    text-align-last: ${props.textAlignLast ?? props.textAlignLast};
    text-anchor: ${props.textAnchor ?? props.textAnchor};
    text-combine-upright: ${props.textCombineUpright ??
      props.textCombineUpright};
    text-decoration: ${props.textDecoration ?? props.textDecoration};
    text-decoration-color: ${props.textDecorationColor ??
      props.textDecorationColor};
    text-decoration-line: ${props.textDecorationLine ??
      props.textDecorationLine};
    text-decoration-skip: ${props.textDecorationSkip ??
      props.textDecorationSkip};
    text-decoration-skip-ink: ${props.textDecorationSkipInk ??
      props.textDecorationSkipInk};
    text-decoration-style: ${props.textDecorationStyle ??
      props.textDecorationStyle};
    text-decoration-thickness: ${props.textDecorationThickness ??
      props.textDecorationThickness};
    text-emphasis: ${props.textEmphasis ?? props.textEmphasis};
    text-underline-position: ${props.textUnderlinePosition ??
      props.textUnderlinePosition};
    text-emphasis-color: ${props.textEmphasisColor ?? props.textEmphasisColor};
    text-emphasis-position: ${props.textEmphasisPosition ??
      props.textEmphasisPosition};
    text-emphasis-style: ${props.textEmphasisStyle ?? props.textEmphasisStyle};
    text-indent: ${props.textIndent ?? props.textIndent};
    text-justify: ${props.textJustify ?? props.textJustify};
    text-orientation: ${props.textOrientation ?? props.textOrientation};
    text-overflow: ${props.textOverflow ?? props.textOverflow};
    text-rendering: ${props.textRendering ?? props.textRendering};
    text-shadow: ${props.textShadow ?? props.textShadow};
    text-size-adjust: ${props.textSizeAdjust ?? props.textSizeAdjust};
    text-transform: ${props.textTransform ?? props.textTransform};
    text-underline-offset: ${props.textUnderlineOffset ??
      props.textUnderlineOffset};
    font: ${props.font ?? props.font};
    font-family: ${props.fontFamily ?? props.fontFamily};
    font-feature-settings: ${props.fontFeatureSettings ??
      props.fontFeatureSettings};
    font-kerning: ${props.fontKerning ?? props.fontKerning};
    font-language-override: ${props.fontLanguageOverride ??
      props.fontLanguageOverride};
    font-optical-sizing: ${props.fontOpticalSizing ?? props.fontOpticalSizing};
    font-size-adjust: ${props.fontSizeAdjust ?? props.fontSizeAdjust};
    font-smooth: ${props.fontSmooth ?? props.fontSmooth};
    font-stretch: ${props.fontStretch ?? props.fontStretch};
    font-style: ${props.fontStyle ?? props.fontStyle};
    font-synthesis: ${props.fontSynthesis ?? props.fontSynthesis};
    font-variant: ${props.fontVariant ?? props.fontVariant};
    font-variant-alternates: ${props.fontVariantAlternates ??
      props.fontVariantAlternates};
    font-variant-caps: ${props.fontVariantCaps ?? props.fontVariantCaps};
    font-variant-east-asian: ${props.fontVariantEastAsian ??
      props.fontVariantEastAsian};
    font-variant-ligatures: ${props.fontVariantLigatures ??
      props.fontVariantLigatures};
    font-variant-numeric: ${props.fontVariantNumeric ??
      props.fontVariantNumeric};
    font-variant-position: ${props.fontVariantPosition ??
      props.fontVariantPosition};
    font-variation-settings: ${props.fontVariationSettings ??
      props.fontVariationSettings};
    word-break: ${props.wordBreak ?? props.wordBreak};
    word-spacing: ${props.wordSpacing ?? props.wordSpacing};
    word-wrap: ${props.wordWrap ?? props.wordWrap};
  `}
  ${({ textProps, fontWeight, fontSize }) =>
    textProps
      ? css`
          font-weight: ${getTextProps(textProps).weight};
          font-size: ${getTextProps(textProps).size};
          letter-spacing: ${getTextProps(textProps).letterSpacing};
        `
      : css`
          font-weight: ${fontWeight};
          font-size: ${fontSize};
        `}
  color: ${({ textColor }) =>
    textColor ? getColor(textColor) : getColor('mainTextColor')};
`;
