const compressor = require("compress-images");

const inputPath = `./images/main/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}`;
// const inputPath = `./images/main/all-movies-1.png`;
const outputPath = './images/minified/';

compressor(inputPath, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=1-1", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
