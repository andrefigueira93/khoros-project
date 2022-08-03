import { getStoryblokApi } from '@storyblok/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const slug = query.slug as string;
  try {
    const api = getStoryblokApi();
    const story = await api.getStory(slug, {
      version: 'published',
    });
    console.log(`story`);
    console.log(story);
    return res.status(200).json(story);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
}
