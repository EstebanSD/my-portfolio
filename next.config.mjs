/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  env: {
    // ------------------------- local -------------------------
    BASE_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:8080',
    // ------------------------- deployment -------------------------
    // BASE_URL: '',
    // API_URL: '',

    FONT_AWESOME_KIT: 'https://kit.fontawesome.com/d9be01d6fb.js',
    LINKED_IN_URL: 'https://www.linkedin.com/in/esteban-salvay-dilena',
    GIT_HUB_URL: 'https://github.com/EstebanSD',
    EMAIL: 'estebansalvaydilena@gmail.com',
    PHONE: '3584904406',
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@Public'] = path.resolve(__dirname, 'public');
    return config;
  },
};

export default nextConfig;
