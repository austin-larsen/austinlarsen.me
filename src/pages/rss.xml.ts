import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "Austin Larsen's Blog",
    description: 'Threat intelligence, incident response, and cybersecurity.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: post.data.externalUrl ?? `/blog/${post.id.replace(/\.md$/, '')}`,
    })),
  });
}
