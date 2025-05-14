'use client';

import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border p-4 shadow bg-white">
      {children}
    </div>
  );
}
