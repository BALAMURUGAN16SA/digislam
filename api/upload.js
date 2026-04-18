// api/upload.js
// Proxies image uploads to ImgBB — keeps API key server-side, handles CORS.
// Set IMGBB_API_KEY in Vercel environment variables.

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://digislam-f2fd5.web.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  const { image } = req.body;
  if (!image) return res.status(400).json({ error: "no image provided" });

  // basic size check — base64 of 5MB compressed = ~6.7MB string
  if (image.length > 10 * 1024 * 1024) {
    return res.status(400).json({ error: "image too large" });
  }

  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      { method: "POST", body: formData }
    );

    const data = await response.json();
    if (!data.success) {
      return res.status(500).json({ error: data.error?.message || "imgbb upload failed" });
    }

    return res.status(200).json({ url: data.data.url });
  } catch (e) {
    console.error("upload error:", e);
    return res.status(500).json({ error: e.message });
  }
}