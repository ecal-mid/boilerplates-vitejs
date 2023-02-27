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

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                page2: resolve(__dirname, 'page2/index.html')
            }
        }
    }
}