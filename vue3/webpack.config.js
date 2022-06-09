// 使用 unplugin-element-plus

import ElementPlus from 'unplugin-element-plus/webpack'

export default defineConfig({
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        ElementPlus({
            useSource: true,
        }),
    ],
})