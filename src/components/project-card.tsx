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
    if (!usedTechnologies || usedTechnologies.length === 0) return;
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {
          usedTechnologies?.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))
        }
      </div>
    );
  }, [usedTechnologies]);

  const renderLongDescription = React.useCallback(() => {
    if (!longDescription) return;
    return (
      <p>
        {longDescription}
      </p>
    );
  }, [longDescription]);

  return (
    <Dialog>
      <DialogTrigger>
        <Card
          className='w-64 h-auto py-0 overflow-hidden gap-2'
        >
          <Image
            className="w-full h-48 object-cover"
            alt={`Screenshot displaying the ${title} project.`}
            src={image}
            height={480}
            width={640}
          />
          <h1>{title}</h1>
          <p className="text-sm text-muted-foreground h-[1.5rem] overflow-hidden text-ellipsis whitespace-nowrap px-2">
            {shortDescription}
          </p>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-h-full overflow-scroll">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{shortDescription}</DialogDescription>
        </DialogHeader>
        {/* ?TODO: Potential improvement - image gallery */}
        <Image
          className="w-full h-auto"
          alt={`Screenshot displaying the ${title} project.`}
          src={image}
          width={1024}
          height={1024}
        />
        {renderUsedTechnologies()}
        {renderLongDescription()}
      </DialogContent>
    </Dialog>
  );
}
