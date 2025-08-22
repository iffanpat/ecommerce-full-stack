declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Next.js public environment variables
      NEXT_PUBLIC_API_BASE: string;
      
      // Node environment
      NODE_ENV: 'development' | 'production' | 'test';
      
      // Add other environment variables here as needed
      // Example:
      // DATABASE_URL: string;
      // JWT_SECRET: string;
      // STRIPE_SECRET_KEY: string;
      // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    }
  }
}

export {}; 