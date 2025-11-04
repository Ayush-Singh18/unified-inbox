export default function HomePage() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Unified Inbox</h1>
        <p className="text-gray-500 mt-2">Home page working ✅</p>
  
        <a href="/signup" className="text-blue-600 underline mt-4 block">
          Go to Sign Up →
        </a>
  
        <a href="/inbox" className="text-blue-600 underline mt-2 block">
          Go to Inbox →
        </a>
      </div>
    )
  }
  