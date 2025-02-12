// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/index.css"],
    modules: ["@nuxt/ui", "nuxt-auth-sanctum"],

    sanctum: {
        baseUrl: "http://localhost:80",
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        public: {
            accessKey: process.env.VITE_ACCESS_KEY
        },
    },
});
