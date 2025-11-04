"use client"
export default function SignUpPage() {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xl w-96 space-y-4">
          <h1 className="text-2xl font-semibold text-center">Create account</h1>
  
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />
  
  <button
  className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800"
  onClick={async () => {
    const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[type="password"]') as HTMLInputElement).value;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);
    alert("User created ✅");
  }}
>
  Sign Up
</button>
        </div>
      </div>
    );
  }
  