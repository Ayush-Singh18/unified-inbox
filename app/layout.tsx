export const metadata = {
    title: "Unified Inbox",
    description: "SMS unified inbox"
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  