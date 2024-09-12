import nodemailer from "nodemailer";

export async function POST(request) {
  const {
    name,
    email,
    totalFamilyMembers,
    currentAddress,
    projectAddress,
    areaInSqft,
    possession,
    vastu,
    budgetConsideration,
    comments,
  } = await request.json();

  let vastuValue = "";

  if (vastu === "vastuYes") {
    vastuValue = "Yes";
  } else if (vastu === "vastuNo") {
    vastuValue = "No";
  } else if (vastu === "vastuMaybe") {
    vastuValue = "Maybe";
  }

  // Set up the Nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email
      pass: process.env.SMTP_PASSWORD, // Your email password or app password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #0056b3;">New Contact Form Submission</h2>
            <p>You have received a new form submission with the following details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="background-color: #f5f5f5;">
                <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Field</th>
                <th style="text-align: left; padding: 10px; border: 1px solid #ddd;">Details</th>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Total Family Members</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${totalFamilyMembers}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 10px; border: 1px solid #ddd;">Current Address</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${currentAddress}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Project Address</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${projectAddress}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 10px; border: 1px solid #ddd;">Area in Sqft</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${areaInSqft}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Possession</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${possession}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 10px; border: 1px solid #ddd;">Vastu Considerations</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${vastuValue}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Budget Consideration</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${budgetConsideration}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 10px; border: 1px solid #ddd;">Comments</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${comments}</td>
              </tr>
            </table>
            <p style="margin-top: 20px;">Thank you for submitting the form. We will review the details and get back to you soon.</p>
          </div>
        `,
    });

    return new Response(JSON.stringify({ status: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
