export default defineNuxtPlugin((nuxtApp) => {

    return {
        provide: {
            myPlugin: (msg: string) => console.log(`Hello ${msg}`)
        }
    }
})