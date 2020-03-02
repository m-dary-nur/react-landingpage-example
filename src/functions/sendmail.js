const sgMail = require('@sendgrid/mail')
const { SG_API_KEY, SG_CC_EMAIL, SG_TO_EMAIL, SG_SENDER_EMAIL } = process.env

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, subject } = payload

    sgMail.setApiKey(SG_API_KEY)

    // const body = Object.keys(payload).map((k) => {
    //     return `${k}: ${payload[k]}`
    // }).join("<br><br>");

    // const msg = {
    //     to: SENDGRID_TO_EMAIL,
    //     from: email,
    //     subject: subject ? subject : 'Contact Form Submission',
    //     html: body,
    // };

    const msg = {
        to: SG_TO_EMAIL,
        cc: SG_CC_EMAIL,
        from: SG_SENDER_EMAIL,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>and easy to do anywhere, even with Node.js</strong><br /> your submitted data is "${JSON.stringify(payload)}"`,
      };

    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};