# Next.js Template with Google Authentication

This template provides a quick start for building web applications with Next.js, featuring Google Authentication out of the box. It's designed to be a solid foundation for your side projects, allowing you to focus on building features rather than setting up the basics.

## Tech Stack

- **Frontend Framework**: Next.js (using the App Router)
- **Styling**: Shadcn
- **Database**: SQLite with Prisma as ORM
- **Authentication**: NextAuth.js
- **ORM**: Prisma
- **Language**: TypeScript

## Features

- Pre-configured Google Authentication
- Modern, responsive UI with Shadcn components
- Type-safe database operations with Prisma
- Built with TypeScript for enhanced developer experience

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/nextjs-google-auth-template.git
   cd nextjs-google-auth-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Google OAuth credentials and other necessary variables

4. Set up the database:
   ```
   npx prisma migrate dev
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Google Authentication Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" and select "OAuth client ID"
5. Choose "Web application" as the application type
6. Add `http://localhost:3000` to the Authorized JavaScript origins
7. Add `http://localhost:3000/api/auth/callback/google` to the Authorized redirect URIs
8. Copy the Client ID and Client Secret
9. Paste these values into your `.env.local` file:
   ```
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   ```

## Customization

- Modify the Prisma schema in `prisma/schema.prisma` to fit your data model
- Adjust the authentication options in `pages/api/auth/[...nextauth].ts`
- Customize the UI components in the `components` directory

## Deployment

This template is ready for deployment on platforms like Vercel or Netlify. Make sure to set up your environment variables in your deployment platform's settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
