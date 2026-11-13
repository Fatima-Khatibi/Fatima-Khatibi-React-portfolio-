# FK Portfolio
## Run
npm install && npm run dev

## Images
Put photos in public/images: profile.jpg, about.jpg, oberlo.png.

## Social links
Edit `src/config.js` and fill SOCIAL_URLS (empty by default; icons stay inert until set).

## Contact form (Web3Forms)
1. Go to https://web3forms.com, enter fatimakhatibi20@gmail.com, and create an access key (it is emailed to you; confirm the email if asked).
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY=your_key`.
3. Restart `npm run dev` (Vite reads .env only at start), submit the form, and check your inbox/spam.
4. On Netlify/Vercel, add the same variable in the project's environment settings and redeploy.
Note: Web3Forms access keys are designed to be public (they only deliver to the email they were created for), but keep it in .env, not in code. In the Web3Forms dashboard you can restrict allowed domains.
