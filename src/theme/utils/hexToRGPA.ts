export const hexToRGPA = (hexcol?: string, passedOpacity?: string) => {
  var c: any;
  const hex = hexcol || '';
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )},${passedOpacity})`;
  } else if (/^#([A-Fa-f0-9]{8}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 8) {
      c = [c[0], c[1], c[2], c[3], c[4], c[5]];
      c = '0x' + c.join('');
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
        ','
      )},${passedOpacity})`;
    }
  }
  throw new Error('Bad Hex');
};
