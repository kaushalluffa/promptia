import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDb();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify("Failed to fetch prompts"), {
      status: 500,
    });
  }
};
