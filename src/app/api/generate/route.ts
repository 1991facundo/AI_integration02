import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ text: 'Query is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  console.log('API Key:', apiKey);

  if (!apiKey) {
    return NextResponse.json({ text: 'API key is missing' }, { status: 500 });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    console.log('OpenAI Response:', response.data);
    const text = response.data.choices[0].message.content;
    return NextResponse.json({ text }, { status: 200 });
  } catch (error) {
    console.error('Error generating response:', error.response?.data || error.message);
    return NextResponse.json({ text: `Error generating response: ${error.response?.data?.error?.message || error.message}` }, { status: 500 });
  }
}
