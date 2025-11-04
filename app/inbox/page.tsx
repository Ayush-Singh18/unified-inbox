export default function InboxPage() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Unified Inbox
        </h1>
  
        <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
          <p className="text-zinc-400">
            This will show all incoming messages (SMS / WhatsApp).
          </p>
  
          <div className="mt-5 bg-black border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-500 italic">No messages loaded yet…</p>
          </div>
        </div>
      </div>
    )
  }
  