export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold text-purple-600">School Dashboard</h1>
      </header>
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to EDU GROW SA</h2>
          <p className="text-gray-600 mb-4">
            Your weekly educational content and resources will appear here once you've registered your school.
          </p>
          <a 
            href="/"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}