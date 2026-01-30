const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('api', {
  getRobots: () => {
    const filePath = path.join(__dirname, 'robots.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
});
