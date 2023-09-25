import { NextResponse } from "next/server";
import mailchimp from "@/service/mailchimp";

const md5 = require("md5")
const listID = 'e35023e932';

export async function POST(request: Request) {
    const { email } = await request.json();

    // Check email status
    const subscriberHash = md5(email.toLowerCase());
    let status:any = null;

    try {
        const response = await mailchimp.lists.getListMember(
          listID,
          subscriberHash
        );
    
        console.log(`This user's subscription status is ${response.status}.`);
        
      } catch (e:any) {
        status = e.status;
        if (e.status === 404) {
            console.log("User is not in audience.");
          
            const addRes = await mailchimp.lists.addListMember(
                listID,{
                    email_address: email.toLowerCase(),
                    status: "subscribed",
                    merge_fields: {}
                }
            )
        } 
      }

    return NextResponse.json({ 'status': status});
}