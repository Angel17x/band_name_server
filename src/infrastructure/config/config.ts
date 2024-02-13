import fs from 'fs';
import yaml from 'js-yaml';
import { Config } from '../../domain/entities/config.entity';

const loadConfig = (filePath: string): Config  =>{
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const config = yaml.load(fileContents) as Config;
        return config;
    } catch (e) {
        console.error(`No se pudo cargar o analizar el archivo de configuración: ${filePath}`, e);
        process.exit(1);
    }
}


export default loadConfig;