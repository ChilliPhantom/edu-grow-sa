'use client';

import { Card } from '@/components/ui/card';

export default function ContentPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Educational Content</h1>
      <Card>
        <p>This content is inside the Card.</p>
      </Card>
    </main>
  );
}
