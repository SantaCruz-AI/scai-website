const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.NOT_A_KEY,
  server: process.env.NOT_A_SERVER,
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

export default mailchimp;