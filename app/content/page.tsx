'use client';

import { Card } from '@/components/ui/card'; // Adjust path if needed

console.log('Card component:', Card); // 👈 Add this line here

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
