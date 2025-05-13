export default function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">Register Your School</h1>
        <p className="text-gray-600 mb-6">
          Complete this form to register your nursery school with EDU GROW SA.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter school name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter email address"
            />
          </div>
          <div className="pt-4">
            <button
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Continue Registration
            </button>
          </div>
          <div className="text-center">
            <a 
              href="/"
              className="text-sm text-purple-600 hover:underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}