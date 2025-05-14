'use client';

import React from 'react';
import { Card } from '@/components/ui/card'; // or use relative path if needed

export default function ContentPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Educational Content</h1>
      <Card>
        <p>This is the content inside a card.</p>
      </Card>
    </main>
  );
}
