const fullContentLines = 5;
const contentAreaFactor = 0.5;

function computeArgs(width, height) {
  const L = Math.floor(Math.min(width, height) * contentAreaFactor);
  const emptyHeight = height - L;
  const lineHeight = Math.floor(L / (2 * fullContentLines + 1));
  return {
    lines: fullContentLines,
    lineHeight: lineHeight,
    lineWidth: width - 2 * lineHeight,
    emptyHeight: emptyHeight,
  }
}

function toPixel(num) {
  return num + 'px';
}

export {
  computeArgs,
  toPixel,
}
