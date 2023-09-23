const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "2217ef58d9be243b65c09d019153f968-us21",
  server: "us21",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

export default mailchimp;