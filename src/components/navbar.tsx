import * as React from 'react';
import Link from 'next/link';

import { PAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto text-center">
      <h1 className="text-4xl font-semibold">WWW Cosmin Ilie</h1>
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
