import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectDetailClient from '@/components/project-detail/ProjectDetailClient';
import { getProjectDetail, getAllProjectSlugs } from '@/lib/data/projectsDetailData';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return { title: 'Proyecto no encontrado | Kaibutsu' };

  return {
    title: `${project.name} | Kaibutsu`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--ink-bg)] text-[var(--bone)] flex flex-col washi-grain">
      <Navbar />
      <main className="flex-1 pb-24">
        <ProjectDetailClient project={project} />
      </main>
      <Footer />
    </div>
  );
}
