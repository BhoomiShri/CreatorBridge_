import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function generateBrief(campaignIdea) {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,

      messages: [
        {
          role: "user",
          content: `
Generate a campaign brief.

Campaign Idea:
${campaignIdea}

Return ONLY JSON:

{
  "objective":"",
  "targetAudience":"",
  "tone":"",
  "deliverables":"",
  "dos":"",
  "donts":""
}
`
        }
      ]
    });

    let text = msg.content[0].text;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");

    return JSON.parse(text);

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMatchScore(brief, creator) {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,

      messages: [
        {
          role: "user",
          content: `
Campaign Brief:

${JSON.stringify(brief)}

Creator:

${JSON.stringify(creator)}

Return ONLY JSON:

{
  "score":0,
  "verdict":"",
  "reasons":"",
  "concerns":"",
  "suggestions":""
}
`
        }
      ]
    });

    let text = msg.content[0].text;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");

    return JSON.parse(text);

  } catch (error) {
    console.error(error);
    throw error;
  }
}
