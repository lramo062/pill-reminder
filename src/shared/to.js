export default async function to(promise) {
    try {
        const data = await promise;
        return [null, data];
    }
    catch (err) {
        return [err];
    }
}