export const useUtils = () => {
    const sayHello = () => console.log('Hello from composable');

    return {
        sayHello
    }
}