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

    FONT_AWESOME_KIT: '',
    LINKED_IN_URL: '',
    GIT_HUB_URL: '',
    EMAIL: '',
    PHONE: '',
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@Public'] = path.resolve(__dirname, 'public');
    return config;
  },
};

export default nextConfig;
