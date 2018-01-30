const kFullContentLines = 5;
const kContentLinesWithHeader = 3;
const kTitleLines = 2;

const kTotalHeightFactor = 0.5;

const kHeaderHeightFactor = 0.35;

function computeArgs(width, height, title, image) {
  const header = title || image;
  const H = Math.floor(Math.min(width, height) * kTotalHeightFactor);
  if (header) {
    var headerHeight = Math.floor(H * kHeaderHeightFactor);
    var titleLineHeight = Math.floor(headerHeight / (2 * kTitleLines + 1));
    var titleLineWidth = width - 2 * titleLineHeight;

    var contentHeight = H - headerHeight;
    var textLines = kContentLinesWithHeader;
  } else {
    var contentHeight = H;
    var textLines = kFullContentLines;
  }

  const textLineHeight = Math.floor(contentHeight / (2 * textLines + 1));
  return {
    totalHeight: H,
    contentHeight: contentHeight,
    textLines: textLines,
    textLineHeight: textLineHeight,
    textLineWidth: width - 2 * textLineHeight,
    headerHeight: headerHeight,
    titleLines: kTitleLines,
    titleLineHeight: titleLineHeight,
    titleLineWidth: titleLineWidth,
  }
}

function toPixel(num) {
  return num + 'px';
}

export {
  computeArgs,
  toPixel,
}
