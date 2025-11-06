# Nuever

Welcome to the official repository for Neuver, a visionary fashion brand blending modern aesthetics with innovative technology. Our mission is to offer a personalized and sustainable fashion experience, empowering individuals to craft their unique style journey.

## Tech Stack

This project is built on a robust and modern tech stack designed for performance, scalability, and an exceptional developer experience:

*   **Frontend Framework:** [Next.js](https://nextjs.org/) (React)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Backend (API):** Next.js API Routes (initially)
*   **Database:** MySQL (via a managed service like PlanetScale or AWS RDS) -
*   **Authentication:** NextAuth.js (planned)
*   **Deployment:** Vercel

# Project Summary: Building the NEUVER E-commerce Frontend & MySQL Backend Integration

This document summarizes the development journey of the NEUVER e-commerce application, focusing on the frontend build with Next.js and its integration with a MySQL database. It covers setup, key features implemented, and common deployment and development challenges encountered and resolved.

## 1. Initial Frontend Structure & Design Implementation

**Goal:** Create the visual components for the landing page and the product listing page based on provided designs.

*   **Pages Created:**
    *   `pages/index.js`: For the main landing page, featuring hero sections and product highlights.
    *   `pages/products.js`: For the product display, including a search bar, filter options, and product cards.
*   **Styling:**
    *   `styles/Home.module.css`: Specific styles for the landing page.
    *   `styles/Products.module.css`: Specific styles for the product listing page, including responsive design.
*   **Static Assets:** `public/images/` directory was created to store necessary background and placeholder images for the frontend design.

## 2. Core Frontend Functionality Development

**Goal:** Make the frontend interactive, allowing navigation and preparing for dynamic data.

*   **Navigation:** The "SHOP NOW" buttons on the landing page were linked to the `/products` page using Next.js's `Link` component.
*   **Product Cards (Initial):** Placeholder product cards were created on the `/products` page, initially displaying static "PRODUCT" text, ready to be replaced by dynamic data.

## 3. Database Schema & Local Setup Preparation

**Goal:** Prepare the local environment and MySQL database for backend integration.

*   **Database Schema:** A detailed `neuve-sql.txt` file was provided, outlining the SQL `CREATE TABLE` statements for Customer, Product, Category, Brand, Gender, Size, Color, Orders, OrderItems, Payment, Delivery, Cart, and Review tables.
*   **MySQL Workbench:** Used to manage and inspect the local MySQL database.
*   **`mysql2` library:** Installed locally (`npm install mysql2`) as the Node.js driver for connecting to MySQL from the backend.
*   **Environment Variables (`.env.local`):** Created to securely store MySQL connection credentials (host, user, password, database) locally, ensuring they are not committed to Git. This file is added to `.gitignore`.

## 4. Next.js API Route for Product Data

**Goal:** Create a backend endpoint to fetch product data from MySQL.

*   **`pages/api/products.js`:** An API route was created to handle `GET` requests for product data.
*   **Database Connection Pool:** Implemented using `mysql2/promise` for efficient management of database connections.
*   **Dynamic SQL Query:** The API route constructs a SQL query with `LEFT JOIN`s across `Product`, `Category`, `Brand`, `Gender`, `Size`, and `Color` tables to retrieve comprehensive product details.

## 5. Search & Filter Implementation

**Goal:** Enable users to search for products and filter them by various attributes.

*   **API Route Enhancement (`pages/api/products.js`):**
    *   The API route was updated to extract `search`, `gender`, `color`, `size`, `minPrice`, and `maxPrice` parameters from the request query.
    *   Dynamic `WHERE` clauses were added to the SQL query, allowing filtering based on these parameters using prepared statements for security.
*   **Frontend UI & Logic (`pages/products.js`):**
    *   `useState` hooks were introduced to manage search terms and selected filter values.
    *   `useEffect` and `useCallback` were used to debounce search input and trigger API calls efficiently when search terms or filters change.
    *   Dropdowns for `Gender`, `Color`, `Size` and input fields for `Min Price`/`Max Price` were added to the UI.
    *   A "Clear Filters" button was implemented to reset all filter states.
    *   Product cards were updated to display more details from the database and an "Out of Stock" / "In Stock" indicator based on the `P.stock` value.

## 6. Deployment Challenges & Resolutions

Throughout the process, several common issues were encountered, especially during Vercel deployments and Git operations.

*   **Empty `package.json` on Vercel:**
    *   **Problem:** Vercel build failed due to an empty `package.json` file.
    *   **Resolution:** Populated `package.json` with standard Next.js dependencies and scripts, ran `npm install` locally, and committed/pushed the updated `package.json` and `package-lock.json`.
*   **Git `non-fast-forward` / `divergent branches` Error:**
    *   **Problem:** Local branch history diverged from remote, preventing `git push`.
    *   **Resolution:** Used `git pull --rebase origin main` (or `git pull origin main --no-rebase`) to integrate remote changes, followed by resolving merge conflicts (by choosing local changes as authoritative), and then `git push -u origin main`.
*   **React `Error #130` (Image not found) on Vercel:**
    *   **Problem:** Next.js build failed during prerendering, indicating missing or incorrectly referenced images.
    *   **Resolution:** Meticulously verified all image filenames in `public/images` against their paths in `pages/index.js`, `pages/products.js`, and CSS files (`styles/*.module.css`) for exact **case-sensitive** matches.
*   **Empty `pages/_app.js`:**
    *   **Problem:** Next.js build failed with "default export is not a React Component in page: '/_app'".
    *   **Resolution:** Added the standard `_app.js` boilerplate, including global CSS import and rendering of `Component` with `pageProps`.
*   **`mysql2/promise` Module Not Found on Vercel:**
    *   **Problem:** Vercel build failed because the `mysql2` package was not found.
    *   **Resolution:** Ensured `npm install mysql2` was run locally, and the updated `package.json` and `package-lock.json` files were committed and pushed to GitHub.
*   **"No Products Found" (API returning empty array):**
    *   **Problem:** Despite data existing in MySQL Workbench, the API route returned an empty array.
    *   **Resolution:** Changed `INNER JOIN`s to `LEFT JOIN`s in `pages/api/products.js`.
    *   **Reasoning:** `INNER JOIN` only returns rows where there's a match in *all* joined tables. Inconsistent or missing foreign key references for some products in the lookup tables (Category, Brand, etc.) caused them to be filtered out. `LEFT JOIN` ensures all products are returned, showing `NULL` for missing associated data.
*   **Localhost Database Not Accessible from Vercel (Upcoming/Discussed):**
    *   **Problem:** A MySQL database running on `localhost` cannot be accessed by a cloud-hosted application like Vercel.
    *   **Resolution:** Migrated the MySQL database to a free, publicly accessible cloud provider. **Railway.app** was chosen as the recommended solution due to its generous free tier and ease of setup. This involves:
        1.  Creating a MySQL database on Railway.
        2.  Obtaining Railway MySQL credentials (host, port, user, password, database).
        3.  Updating `.env.local` locally and `pages/api/products.js` (to include `port`) with Railway credentials.
        4.  Importing the SQL schema and data into the Railway database using a client like DBeaver.
        5.  Adding these Railway credentials as environment variables in Vercel project settings.
        6.  Committing and pushing the updated code to GitHub for Vercel deployment.

## 7. Current Status

The frontend is fully designed with search and filter UI. The backend API route is functional, retrieving data from a MySQL database with search and filter logic. The primary remaining step is to complete the migration to a publicly hosted MySQL database (Railway.app) and deploy the integrated application to Vercel.

---

This `SUMMARY.md` provides a concise yet comprehensive overview. Let me know if you'd like any additions or adjustments!
