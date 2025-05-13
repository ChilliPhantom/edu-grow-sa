'use client';

import React from "react";

export default function RegisterPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Register</h1>
      <p className="mt-2">Create an account to access the platform.</p>

      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </main>
  );
}