#!/bin/bash

# Create directories
echo "Creating project directories..."
mkdir -p src/app
echo "Directories created."

# Create package.json
echo "Creating package.json..."
cat << EOF > package.json
{
  "name": "arizonacommercialroofing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^10.16.5",
    "lucide-react": "^0.292.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.4"
  }
}
EOF
echo "package.json created."

# Create next.config.mjs
echo "Creating next.config.mjs..."
cat << EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
EOF
echo "next.config.mjs created."

# Create postcss.config.js
echo "Creating postcss.config.js..."
cat << EOF > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF
echo "postcss.config.js created."

# Create tailwind.config.ts
echo "Creating tailwind.config.ts..."
cat << EOF > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
EOF
echo "tailwind.config.ts created."

# Create tsconfig.json
echo "Creating tsconfig.json..."
cat << EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF
echo "tsconfig.json created."

# Create .eslintrc.json
echo "Creating .eslintrc.json..."
cat << EOF > .eslintrc.json
{
  "extends": ["next/core-web-vitals"]
}
EOF
echo ".eslintrc.json created."

# Create src/app/layout.tsx
echo "Creating src/app/layout.tsx..."
cat << EOF > src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arizona Commercial Roofing",
  description: "High-quality commercial roofing services in Arizona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
EOF
echo "src/app/layout.tsx created."

# Create src/app/page.tsx
echo "Creating src/app/page.tsx..."
cat << EOF > src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Arizona Commercial Roofing</h1>
      <p className="text-lg">Your trusted partner for commercial roofing services.</p>
    </main>
  );
}
EOF
echo "src/app/page.tsx created."

# Create src/app/globals.css
echo "Creating src/app/globals.css..."
cat << EOF > src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
echo "src/app/globals.css created."

# Install dependencies
echo "Installing npm dependencies. This might take a moment..."
npm install
echo "NPM dependencies installed."

echo "Project setup complete!"
