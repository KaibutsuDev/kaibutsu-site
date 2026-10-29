'use client';

import React, { useState } from 'react';
import { ProjectDetail } from '@/lib/types/site';
import { ViewMode } from './ProjectModeToggle';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectUserView from './ProjectUserView';
import ProjectTechView from './ProjectTechView';
import ProjectDetailCTA from './ProjectDetailCTA';

interface ProjectDetailClientProps {
  project: ProjectDetail;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [currentMode, setCurrentMode] = useState<ViewMode>('user');

  return (
    <div className="space-y-16">
      {/* Dynamic Hero with Mode Toggle */}
      <ProjectDetailHero
        project={project}
        currentMode={currentMode}
        onModeChange={setCurrentMode}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {currentMode === 'user' ? (
          <ProjectUserView userSection={project.userSection} />
        ) : (
          <ProjectTechView techSection={project.techSection} />
        )}

        {/* Dynamic Contextual CTA */}
        <ProjectDetailCTA
          projectName={project.name}
          projectHref={project.href}
          currentMode={currentMode}
        />
      </div>
    </div>
  );
}
