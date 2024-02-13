import fs from 'fs';
import yaml from 'js-yaml';
const loadConfig = (filePath) => {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const config = yaml.load(fileContents);
        return config;
    }
    catch (e) {
        console.error(`No se pudo cargar o analizar el archivo de configuración: ${filePath}`, e);
        process.exit(1);
    }
};
export default loadConfig;
