const ghpages = require('gh-pages');
const fs = require('fs-extra');
console.log('Publishing Please Wait...');
const { parseAngularRoutes } = require('guess-parser');
const routes = parseAngularRoutes('tsconfig.app.json');
routes.filter(route=>route.path).forEach(route=>{
if(!fs.existsSync(`dist/ud${route.path}`)){
fs.mkdirSync(`dist/ud${route.path}`,{ recursive: true });
}
fs.copyFileSync('dist/ud/index.html',`dist/ud${route.path}/index.html`);
});
ghpages.publish('./dist/ud',{
message: 'Auto-generated commit'
},function(){
console.log('Successfully published! Have a nice day!');
fs.unlinkSync('dist');
});