import * as React from 'react';
import { Metadata } from 'next';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Cosmin Ilie, Frontend Engineer based in Bucharest. Available for freelance projects, full-time opportunities, and collaborations. Contact via email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Contact - Cosmin Ilie',
    description: 'Get in touch with Cosmin Ilie, Frontend Engineer based in Bucharest. Available for freelance projects, full-time opportunities, and collaborations. Contact via email, LinkedIn, or GitHub.',
    url: 'https://cosmin.zip/contact',
  },
  twitter: {
    title: 'Contact - Cosmin Ilie',
    description: 'Get in touch with Cosmin Ilie, Frontend Engineer based in Bucharest. Available for freelance projects, full-time opportunities, and collaborations. Contact via email, LinkedIn, or GitHub.',
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@cosmin.zip',
    href: 'mailto:contact@cosmin.zip',
    description: 'Send me an email'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/cosmeeeen',
    href: 'https://github.com/cosmeeeen',
    description: 'Check out my code'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/cosmin8',
    href: 'https://www.linkedin.com/in/cosmin8/',
    description: 'Connect professionally'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Based in Bucharest',
    href: null,
    description: 'Available for remote work'
  }
];

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to bring your web application ideas to life? I&apos;m available for freelance projects, 
            full-time opportunities, and collaborations. Reach out via email, connect on LinkedIn, 
            or check out my code on GitHub - I&apos;d love to discuss how we can work together.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          const isClickable = method.href !== null;

          const CardWrapper = isClickable ? 'a' : 'div';
          const cardProps = isClickable
            ? { href: method.href, className: "block hover:shadow-md transition-shadow" }
            : {};

          return (
            <CardWrapper key={method.label} {...cardProps}>
              <Card className={isClickable ? "cursor-pointer hover:border-primary/20 transition-colors" : ""}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.label}</CardTitle>
                      <CardDescription>{method.value}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{method.description}</p>
                </CardContent>
              </Card>
            </CardWrapper>
          );
        })}
      </div>

      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Start a Project?</CardTitle>
          <CardDescription className="text-base">
            I&apos;m currently available for freelance work and full-time opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild size="lg" className="font-medium">
            <a href="mailto:contact@cosmin.zip">
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </a>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
