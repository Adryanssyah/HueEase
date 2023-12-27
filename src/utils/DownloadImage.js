import * as htmlToImage from 'html-to-image';

export const DownloadImage = (imageEl, fileName) => {
     htmlToImage.toPng(imageEl.current, { pixelRatio: 8, quality: 1 }).then((imageData) => {
          const downloadLink = document.createElement('a');

          downloadLink.download = fileName;
          downloadLink.href = imageData;
          downloadLink.click();
     });
};
