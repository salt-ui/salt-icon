const fs = require('fs');
const to = require('to-case');

const list = fs.readdirSync('./src/svg/');
const message = `${list.map((comp) => {
  const CompName = to.pascal(comp.split('.')[0]);
  return `import ${CompName} from '../lib/${CompName}';`;
}).join('\n')}

export default {
  ${list.map((comp) => {
    const CompName = to.pascal(comp.split('.')[0]);
    return `${CompName},`;
  }).join('\n  ')}
};
`;

fs.writeFileSync('./src/iconMap.js', message);

console.log('###### ICON MAP GENERATED ######');
console.warn('重要！！！发布后必须让乐高重新打包，否则会造成线上故障！')
