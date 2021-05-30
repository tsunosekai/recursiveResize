const jimp = require('jimp');
const fs = require('fs').promises;

const folderName = './images';
const resizeRate = 0.75;

const main = async ()=>{
    let files = await readdirRecursively(folderName, []);
    console.log(files.length+'ファイル');
    for (const file of files) {
        console.log('処理中 => '+file);
        let image = await jimp.read(file);
        image.scale(resizeRate).write(file);
    }
}

const readdirRecursively = async (dir, files = []) => {
    const paths = await fs.readdir(dir);
    const dirs = [];
    for (const path of paths) {
        const stats = await fs.stat(`${dir}/${path}`);
        if (stats.isDirectory()) {
            dirs.push(`${dir}/${path}`);
        } else {
            files.push(`${dir}/${path}`);
        }
    }
    for (const d of dirs) {
        files = await readdirRecursively(d, files);
    }
    return files;
};

main();