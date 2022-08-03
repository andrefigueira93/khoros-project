import Head from 'next/head';
import Layout from '../components/Layout';
import { useStoryblokState, StoryblokComponent } from '@storyblok/react';

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join('/') : 'home';
  const getData = await fetch(
    `http://localhost:3000/api/storyblok?slug=${slug}`
  );
  const data = await getData.json();
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const getPaths = await fetch(`https://khoros-project.vercel.app/api/storyblok`);
  const paths = await getPaths.json();
  return {
    paths,
    fallback: 'blocking',
  };
}
