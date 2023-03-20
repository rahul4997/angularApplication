const ghpages = require('gh-pages');
const fs = require('fs-extra');
console.log('Publishing Please Wait...');
const { parseAngularRoutes } = require('guess-parser');
const routes = parseAngularRoutes('tsconfig.app.json');
routes.filter(route=>route.path).forEach(route=>{
if(!fs.existsSync(`dist/css_animation${route.path}`)){
fs.mkdirSync(`dist/css_animation${route.path}`,{ recursive: true });
}
fs.copyFileSync('dist/css_animation/index.html',`dist/css_animation${route.path}/index.html`);
});
ghpages.publish('./dist/css_animation',{
message: 'Auto-generated commit'
},function(){
console.log('Successfully published! Have a nice day!');
fs.unlinkSync('dist');
});