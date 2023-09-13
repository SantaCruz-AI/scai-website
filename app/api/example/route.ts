import { NextResponse } from "next/server";

import mailchimp from "@/service/mailchimp";
import { error } from "@material-tailwind/react/types/components/input";

const md5 = require("md5")
const listID = '599479ed32';

export async function POST(request: Request) {
    const { email } = await request.json();
    console.log(email);

    // Check email status
    const subscriberHash = md5(email.toLowerCase());

    try {
        const response = await mailchimp.lists.getListMember(
          listID,
          subscriberHash
        );
    
        console.log(`This user's subscription status is ${response.status}.`);
      } catch (e:any) {
        if (e.status === 404) {
            console.log("User is not in audience.");

            const addRes = await mailchimp.lists.addListMember(
                listID,{
                    email_address: email.toLowerCase(),
                    status: "subscribed",
                    merge_fields: {}
                }
            )

            //console.log(addRes);

          
        }
      }

    return NextResponse.json({ 'hello': 'world'});
}