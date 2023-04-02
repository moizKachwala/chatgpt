import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()

import { JsonParser } from "./parsers/index.js";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const PORT = process.env.PORT || 3000;

const prompt = 'Hello, I am a chatbot.';
const model = 'text-davinci-002';
const temperature = 0.5;
const maxTokens = 100;

const sampleResponse = "{\n  \"questions\": [\n    {\n      \"question\": \"What is a noun?\",\n      \"answer\": \"A noun is a person, place, thing, or idea.\",\n      \"explanation\": \"Nouns are words that name people, places, things, or ideas. For example, 'dog', 'house', 'teacher', and 'love' are all nouns.\"\n    },\n    {\n      \"question\": \"What is a verb?\",\n      \"answer\": \"A verb is an action word or a word that shows a state of being.\",\n      \"explanation\": \"Verbs are words that express an action or a state of being. For example, 'run', 'jump', 'swim', and 'is' are all verbs.\"\n    },\n    {\n      \"question\": \"What is an adjective?\",\n      \"answer\": \"An adjective is a word that describes a noun or pronoun.\",\n      \"explanation\": \"Adjectives are words that describe or modify nouns or pronouns. For example, 'happy', 'red', 'tall', and 'smart' are all adjectives.\"\n    },\n    {\n      \"question\": \"What is a pronoun?\",\n      \"answer\": \"A pronoun is a word that takes the place of a noun.\",\n      \"explanation\": \"Pronouns are words that take the place of nouns in a sentence. For example, instead of saying 'John went to the store', you could say 'He went to the store', using the pronoun 'he' instead of repeating 'John'.\"\n    },\n    {\n      \"question\": \"What is an adverb?\",\n      \"answer\": \"An adverb is a word that describes a verb, an adjective, or another adverb.\",\n      \"explanation\": \"Adverbs are words that modify verbs, adjectives, or other adverbs. For example, 'quickly', 'very', 'often', and 'happily' are all adverbs.\"\n    }\n  ]\n}";

app.get('/', async (req, res) => {
  // const completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages : [{"role": "user", "content": "Grade 3 english grammar questions in JSON format along with answers and explanation"}],
  //   temperature: 0.7
  // });
  res.send(JsonParser(sampleResponse));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));