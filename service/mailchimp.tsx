const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "fe8acbebd22a2e6aa81287f195d4ce42-us8",
  server: "us8",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

export default mailchimp;