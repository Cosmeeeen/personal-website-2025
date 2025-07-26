import * as React from 'react';
import Link from 'next/link';

import { PAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <nav className="mx-auto text-center my-4">
      <h1 className="text-4xl font-semibold">Cosmin Ilie</h1>
      {PAGES.map((page, index) => (
        <span key={page.href}>
          <Link
            href={page.href}
            className={cn("mx-1 text-lg font-ligth hover:text-primary hover:underline",)}
          >
            {page.title}
          </Link>
          {index < PAGES.length - 1 && (
            <span className="mx-1 text-lg font-light">|</span>
          )}
        </span>
      ))}
    </nav>
  );
}
