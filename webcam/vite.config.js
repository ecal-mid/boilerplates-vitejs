// vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'path'

export default {
    server: {
        host: true,
    },

    base: '/',

    plugins: [
        basicSsl()
    ],
}