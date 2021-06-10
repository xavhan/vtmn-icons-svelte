const { generateFromFolder, generateIndex } = require('svg-to-svelte');
const fs = require('fs');

const { name, devDependencies } = JSON.parse(fs.readFileSync('package.json'));

(async () => {
  const lib = "@vtmn/icons";
  
  const { moduleNames } = await generateFromFolder(
    `node_modules/${lib}/dist/vitamix/svg`
  );

  await generateIndex({
    moduleNames,
    pkgName: name,
    pkgVersion: devDependencies[lib],
    outputFile: "ICON_INDEX.md",
  });
})();