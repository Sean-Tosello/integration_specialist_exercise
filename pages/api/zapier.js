export default async function handler(req, res) {
  if (req.method === 'POST') {
    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    const data = req.body;
    async function postToZapier(data) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData);
        res.status(200).json({ message: 'Data submitted successfully', data: responseData });
      } catch (error) { 
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Error submitting form', error: error.toString() });
      }
    };
    await postToZapier(data);
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};