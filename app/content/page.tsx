'use client';

import { Card } from '@/components/ui/card'; // Make sure the path and export match

export default function ContentPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Educational Content</h1>
      <Card>
        <p>This content is wrapped inside a styled Card component.</p>
      </Card>
    </main>
  );
}
