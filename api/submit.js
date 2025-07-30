export default async function handler(request, response) {
    if (request.method === 'POST') {
    return response.status(200).json({ message: 'Form submission received by Vercel Forms.' });
  }
  return response.status(405).json({ message: 'Method Not Allowed' });
}
