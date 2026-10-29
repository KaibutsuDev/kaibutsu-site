import { MetadataRoute } from 'next';
import { FLAGSHIP_KMARKET, FLAGSHIP_PROFECHILENO, PORTFOLIO_PROJECTS } from '@/lib/data/projectsData';
import { ProjectItem } from '@/lib/types/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kaibutsu.cl';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  const allProjects: ProjectItem[] = [
    FLAGSHIP_KMARKET,
    FLAGSHIP_PROFECHILENO,
    ...PORTFOLIO_PROJECTS,
  ];

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((p: ProjectItem) => ({
    url: `${baseUrl}/proyectos/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
