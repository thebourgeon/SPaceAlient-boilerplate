// Path important from webpack config
import path from 'path';

// root/
export const rootPath = path.resolve(__dirname, '..');

// root/build/
export const buildPath = path.resolve(rootPath, 'build');

// root/templates
export const tmpPath = path.resolve(rootPath, 'templates');

// root/application
export const appPath = path.resolve(rootPath, 'application');

// root/application/media
export const mediaPath = path.resolve(appPath, 'media');

// root/application/style
export const stylePath = path.resolve(appPath, 'style');
