export default function handler(request, response) {
    response.status(200)
    response.json({ counter: '1' });
}