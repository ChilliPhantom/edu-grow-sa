export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">EDU GROW SA</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Early Childhood Development Platform for South African nursery schools
      </p>
      <div className="grid gap-4">
        <a 
          href="/dashboard" 
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          View Dashboard
        </a>
        <a 
          href="/register" 
          className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
        >
          Register Your School
        </a>
      </div>
    </div>
  );
}