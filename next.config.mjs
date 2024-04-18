/** @type {import('next').NextConfig} */
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
  },
};

export default nextConfig;
