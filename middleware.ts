import { clerkMiddleware } from "@clerk/nextjs/server"; // Corretto

export default clerkMiddleware(); // Semplice chiamata senza opzioni

export const config = {
  matcher: [
    // Escludi i file statici e interni di Next.js, esegui il middleware per tutti gli altri percorsi
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Esegui sempre per le route API
    '/(api|trpc)(.*)',
  ],
 
};
