import { NextApiRequest, NextApiResponse } from 'next';
import { getStoryblokApi } from '@storyblok/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storyblokApi = getStoryblokApi();
  const { query } = req;
  const slug = query.slug;
  const sbParams = {
    version: 'published', // or 'published'
  };

  if (!!slug) {
    const { data: sbData } = await storyblokApi.get(
      `cdn/stories/${slug}`,
      sbParams
    );
    return res.status(200).json(sbData);
  }

  const { data } = await storyblokApi.get('cdn/links/');

  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    const pageSlug = data.links[linkKey].slug;
    const splittedSlug = pageSlug.split('/');
    paths.push({ params: { slug: splittedSlug } });
  });
  return res.status(200).json(paths);
}
