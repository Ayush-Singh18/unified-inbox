# unified-inbox
## Project Explanation

### Problem Statement
Sales and customer support teams often waste time switching between platforms like **WhatsApp**, **SMS**. 
This project solves that problem by **combining all messages into a single unified inbox**, where teams can read, respond, schedule, and analyze customer conversations — in real time.
### Architecture Overview
The system is built with a modular, modern stack:

- **Frontend (Next.js + Tailwind + ShadCN UI):**
  - Displays inbox, messages, and analytics dashboard.
  - Real-time updates via React Query.
  - Authentication via Better Auth or NextAuth (configurable).

- **Backend (Next.js API routes):**
  - Twilio Webhook receives incoming SMS/WhatsApp messages.
  - Webhook handler writes each message to **PostgreSQL** via Prisma ORM.
  - Ngrok tunnel exposes localhost for testing webhook responses.

- **Database (PostgreSQL + Prisma):**
  - Message model tracks sender, receiver, and message content.
  - Prisma used for migrations, validation, and type safety.

- **Third-Party Integrations:**
  - Twilio for SMS/WhatsApp messaging.
  - Future expansion: Twitter/X and Facebook Graph APIs.
### Key Features Implemented
1.  Real-time inbound SMS capture via Twilio webhook  
2.  Messages stored securely in PostgreSQL  
3.  Working `curl` and ngrok verification for webhook testing  
4.  Next.js API route handling + Prisma ORM integration  
5.  TailwindCSS and ShadCN UI setup for clean, responsive design  
6.  GitHub repo with CI-ready structure and documentation  
### Challenges & Solutions
| Challenge | Solution |
| Prisma connection issues | Fixed by reconfiguring `.env` and validating Postgres URL |
| 500 Internal Server Errors | Adjusted formData handling and Prisma schema |
| Ngrok + Twilio webhook sync | Configured correct `https://...ngrok.io/api/webhook` |
| GitHub push failure | Cleaned `.gitignore` and reinitialized repo |
| 404 page errors | Added proper Next.js `layout.tsx` and `page.tsx` structure |
### Testing Process
1. Tested `/api/webhook` manually using `curl`  
2. Confirmed incoming messages were stored in DB using:
   ```sql
   SELECT * FROM "Message";
