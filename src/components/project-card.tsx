'use client';

import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

export type TProject = {
  title: string,
  shortDescription?: string,
  image: string,
  usedTechnologies?: string[]
  longDescription?: string,
}

export function ProjectCard({ project }: {
  project: TProject
}) {
  const {
    image,
    title,
    shortDescription,
    longDescription,
    usedTechnologies
  } = project;

  const renderUsedTechnologies = React.useCallback(() => {
    if (!usedTechnologies || usedTechnologies.length === 0) return null;
    return (
      <div className="space-y-2">
        <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {usedTechnologies.map((item, index) => (
            <Badge key={index} variant="secondary">{item}</Badge>
          ))}
        </div>
      </div>
    );
  }, [usedTechnologies]);

  const renderLongDescription = React.useCallback(() => {
    if (!longDescription) return null;
    return (
      <div className="space-y-2">
        <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          About This Project
        </h4>
        <p className="text-foreground leading-relaxed">
          {longDescription}
        </p>
      </div>
    );
  }, [longDescription]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full cursor-pointer hover:shadow-lg hover:border-primary/20 transition-all duration-200 overflow-hidden group">
          <div className="aspect-video overflow-hidden">
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              alt={`Screenshot displaying the ${title} project.`}
              src={image}
              height={400}
              width={600}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
            {shortDescription && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {shortDescription}
              </p>
            )}
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {shortDescription && (
            <DialogDescription className="text-base leading-relaxed">
              {shortDescription}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg border">
            <Image
              className="w-full h-full object-cover"
              alt={`Screenshot displaying the ${title} project.`}
              src={image}
              width={1200}
              height={675}
            />
          </div>
          
          {renderUsedTechnologies()}
          {renderLongDescription()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
