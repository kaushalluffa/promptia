import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDb();
    const newPrompt = new Prompt({ creator: userId, tag, prompt });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to create a new prompt"), {
      status: 500,
    });
  }
};
