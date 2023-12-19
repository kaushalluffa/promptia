import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDb();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response(JSON.stringify("Prompt not found"), { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 201 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify("Failed to fetch prompt"), {
      status: 500,
    });
  }
};
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDb();
    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt) {
      return new Response(JSON.stringify("Prompt not found"), {
        status: 404,
      });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 201 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify("Failed to update prompt"), {
      status: 500,
    });
  }
};
export const DELETE = async (req, { params }) => {
  try {
    await connectToDb();
    const existingPrompt = await Prompt.findByIdAndDelete(params.id).populate(
      "creator"
    );
    if (!existingPrompt) {
      return new Response(JSON.stringify("Prompt not found"), {
        status: 404,
      });
    }
    return new Response(JSON.stringify("Prompt Deleted"), { status: 201 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify("Failed to delete prompt"), {
      status: 500,
    });
  }
};