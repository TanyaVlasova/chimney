import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/`,
        css: `${buildFolder}/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        js: `${srcFolder}/script.js`,
        images: `${srcFolder}/images/*.*`,
        scss: `${srcFolder}/style.scss`,
        html: `${srcFolder}/index.pug`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/images/*.*`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}