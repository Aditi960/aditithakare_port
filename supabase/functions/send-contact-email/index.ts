import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form request");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();
    
    console.log(`Processing contact from: ${name} (${email})`);
    
    // Validate inputs
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email to Aditi
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["aditithakare02@gmail.com"],
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #1a0a24; color: #f0f0f0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #2d1a3d 0%, #1a0a24 100%); border-radius: 16px; padding: 32px; border: 1px solid rgba(0, 209, 178, 0.2); }
              .header { text-align: center; margin-bottom: 24px; }
              .header h1 { color: #00d1b2; margin: 0; font-size: 24px; }
              .badge { display: inline-block; background: rgba(245, 158, 11, 0.2); color: #f59e0b; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
              .field { margin-bottom: 20px; }
              .label { color: #00d1b2; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
              .value { background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 8px; border-left: 3px solid #00d1b2; }
              .message-box { background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6; }
              .footer { text-align: center; margin-top: 24px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ New Contact Message</h1>
                <span class="badge">Portfolio Inquiry</span>
              </div>
              
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #00d1b2;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                Sent from your portfolio
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const notificationData = await notificationRes.json();
    console.log("Notification email response:", notificationData);

    if (!notificationRes.ok) {
      throw new Error(notificationData.message || "Failed to send notification email");
    }

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aditi Thakare <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out! 🚀",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #1a0a24; color: #f0f0f0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #2d1a3d 0%, #1a0a24 100%); border-radius: 16px; padding: 32px; border: 1px solid rgba(0, 209, 178, 0.2); }
              .header { text-align: center; margin-bottom: 24px; }
              .header h1 { color: #f59e0b; margin: 0; font-size: 28px; }
              .content { line-height: 1.8; font-size: 16px; }
              .highlight { color: #00d1b2; font-weight: 600; }
              .links { margin-top: 24px; text-align: center; }
              .links a { color: #00d1b2; text-decoration: none; margin: 0 12px; }
              .footer { text-align: center; margin-top: 24px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Hi ${name}! 👋</h1>
              </div>
              
              <div class="content">
                <p>Thank you so much for reaching out through my portfolio!</p>
                
                <p>I've received your message and I'm excited to connect with you. I'll review your inquiry and get back to you as soon as possible – usually within <span class="highlight">24-48 hours</span>.</p>
                
                <p>In the meantime, feel free to:</p>
                <ul>
                  <li>Check out my <a href="https://github.com/Aditi960" style="color: #00d1b2;">GitHub projects</a></li>
                  <li>Connect with me on <a href="https://www.linkedin.com/in/aditi-thakare-9aa5831b0/" style="color: #00d1b2;">LinkedIn</a></li>
                  <li>Try out <a href="https://skillbuddy0.netlify.app/" style="color: #00d1b2;">SkillBuddy</a>, my latest project!</li>
                </ul>
                
                <p>Looking forward to our conversation!</p>
                
                <p>Best regards,<br><span class="highlight">Aditi Thakare</span><br>Web Developer</p>
              </div>
              
              <div class="links">
                <a href="https://github.com/Aditi960">GitHub</a>
                <a href="https://www.linkedin.com/in/aditi-thakare-9aa5831b0/">LinkedIn</a>
              </div>
              
              <div class="footer">
                This is an automated response
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const confirmationData = await confirmationRes.json();
    console.log("Confirmation email response:", confirmationData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
