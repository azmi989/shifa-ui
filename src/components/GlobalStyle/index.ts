import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '../../theme';
import { getColor } from '../../theme/utils';

const GlobalStyle = createGlobalStyle`
:root{
	font-size:${defaultTheme.rootFontSize}px;
}
* {
	text-decoration: none;
	outline: none;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	}
code, kbd, samp, pre, tt, var, textarea, 
input, select, isindex, listing, xmp, plaintext {
	white-space: normal;
	font-size: 1em;
	font: inherit;
	}
dfn, i, cite, var, address, em { 
	font-style: normal; 
	}
th, b, strong, h1, h2, h3, h4, h5, h6 { 
	font-weight: normal; 
	}
a, img, a img, iframe, form, fieldset, 
abbr, acronym, object, applet, table {
	border: none; 
	}
table {
	border-collapse: collapse;
	border-spacing: 0;
	}
caption, th, td, center { 
	vertical-align: top;
	text-align: left;
	}
body { 
	min-height:100vh;
	line-height: 1; 
	color: ${getColor('mainTextColor')};
	padding-bottom:10rem;
	background-color: ${getColor('mainBgColor')};
	padding:0 1rem;
}
#root{
		position:relative;
		min-height:100vh;
		max-width:${defaultTheme.screens['2xl']};
	}
q { 
	quotes: "" ""; 
	}
ul, ol, dir, menu { 
	list-style: none; 
	}
sub, sup { 
	vertical-align: baseline; 
	}
a { 
	color: inherit; 
	}
hr { 
	all: unset; 
	}
font { 
	color: inherit !important; 
	font: inherit !important; 
	color: inherit !important; /* editor's note: necessary? */ 
	}
marquee {
	overflow: inherit !important;
	-moz-binding: none;
	}
blink { 
	text-decoration: none; 
	}
nobr { 
	white-space: normal; 
	}
button {
	border-color: transparent;
	border-style: none;
	border-width: 0px;
	border-image-outset: 0;
	border-image-repeat: unset;
	border-image-slice: 0%;
	border-image-source: none;
	border-image-width: 0;
	}
	input[type="file"] {
		display:none;
	}

`;

export default GlobalStyle;
