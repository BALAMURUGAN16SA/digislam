// api/notify.js
// Deploy this to Vercel (free). 
// Set RESEND_API_KEY in Vercel project environment variables.

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  const { recipientEmail, recipientName, fromName } = req.body;
  if (!recipientEmail || !recipientName) {
    return res.status(400).json({ error: "missing fields" });
  }

  const firstName = recipientName.split(" ")[0];
  const senderLabel = fromName || "someone who cares 🤫";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "slambook <noreply@yourdomain.com>", // 🔧 replace with your verified Resend domain
        to: [recipientEmail],
        subject: `📒 you got a slam, ${firstName}!`,
        html: `
          <div style="font-family:'Georgia',serif;max-width:480px;margin:0 auto;background:#f5f0e8;padding:40px 32px;border-radius:12px;">
            <div style="font-size:48px;text-align:center;margin-bottom:16px;">📒</div>
            <h1 style="font-size:28px;color:#1e4d2b;text-align:center;font-style:italic;margin-bottom:8px;">
              hey ${firstName}!
            </h1>
            <p style="font-size:16px;color:#4a443a;text-align:center;line-height:1.7;margin-bottom:28px;">
              <strong>${senderLabel}</strong> just wrote a slam for you in the<br>
              <strong>P Batch CEG '26 Slambook</strong> 🌿
            </p>
            <div style="background:#fff;border:1.5px solid #d6ccb4;border-radius:10px;padding:20px;text-align:center;margin-bottom:28px;">
              <p style="font-family:'Courier New',monospace;font-size:14px;color:#8c826e;margin:0;">
                🔒 open the slambook to read it —<br>
                only you can see what's written for you.
              </p>
            </div>
            <div style="text-align:center;">
              <a href="https://slam-dbe6f.web.app"
                 style="display:inline-block;background:#1e4d2b;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.05em;">
                open slambook →
              </a>
            </div>
            <p style="font-size:11px;color:#8c826e;text-align:center;margin-top:32px;">
              p batch ceg '26 · this is an automated message
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return res.status(500).json({ error: "email failed", detail: err });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error("handler error:", e);
    return res.status(500).json({ error: e.message });
  }
}