'use client';

import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export type TProject = {
  title: string,
  shortDescription?: string,
  images: string[],
  usedTechnologies?: string[]
  longDescription?: string,
  projectUrl?: string,
}

export function ProjectCard({ project }: {
  project: TProject
}) {
  const {
    images,
    title,
    shortDescription,
    longDescription,
    usedTechnologies,
    projectUrl
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
          <div className="aspect-video overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              alt={`Screenshot displaying the ${title} project.`}
              src={images[0]}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video overflow-hidden rounded-lg border relative">
                    <Image
                      className="object-cover"
                      alt={`Screenshot ${index + 1} displaying the ${title} project.`}
                      src={image}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/20 backdrop-blur-sm hover:bg-black/40 border-white/20" />
            <CarouselNext className="right-4 bg-black/20 backdrop-blur-sm hover:bg-black/40 border-white/20" />
          </Carousel>
          
          {renderUsedTechnologies()}
          {renderLongDescription()}
          
          {projectUrl && (
            <div className="flex justify-end pt-4 border-t">
              <Button asChild>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
