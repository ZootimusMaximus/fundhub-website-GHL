# FundHub Website (GHL Integration)

This is the frontend website for FundHub, including the Credit Analyzer pages.

---

## Prerequisites

Before you start, make sure you have:

1. **Node.js** installed - [Download here](https://nodejs.org/)

To check:
```bash
node --version    # Should show a version number
```

---

## Running Locally

### Step 1: Start the API Backend

Open a **new Terminal window** and run:

```bash
cd /Users/darwin1/Documents/projects/fundhub/underwrite-iq-lite
npm run dev
```

Keep this running. You should see:
```
> Ready! Available at http://localhost:3000
```

### Step 2: Start the Website

Open a **second Terminal window** and run:

```bash
cd /Users/darwin1/Documents/projects/fundhub/fundhub-website-GHL
npx serve . -p 8080
```

You should see:
```
Serving!
- Local: http://localhost:8080
```

### Step 3: Open in Browser

Go to: **http://localhost:8080/credit-analyzer.html**

---

## Quick Start (Copy & Paste)

**Terminal 1 - API:**
```bash
cd /Users/darwin1/Documents/projects/fundhub/underwrite-iq-lite && npm run dev
```

**Terminal 2 - Website:**
```bash
cd /Users/darwin1/Documents/projects/fundhub/fundhub-website-GHL && npx serve . -p 8080
```

**Browser:**
```
http://localhost:8080/credit-analyzer.html
```

---

## How Local vs Production Works

The website automatically detects where it's running:

| Environment | API Used |
|-------------|----------|
| `localhost:8080` | `localhost:3000` (your local API) |
| `fundhub.ai` | `underwrite-iq-lite.vercel.app` (production API) |

You don't need to change any code - it switches automatically!

---

## Important Pages

| Page | Local URL | Production URL |
|------|-----------|----------------|
| Credit Analyzer | `localhost:8080/credit-analyzer.html` | `fundhub.ai/analyzer` |
| Fix My Credit Results | `localhost:8080/fix-my-credit-analyzer.html` | `fundhub.ai/fix-my-credit-analyzer` |
| Funding Approved Results | `localhost:8080/funding-approved-analyzer.html` | `fundhub.ai/funding-approved-analyzer` |
| Referral Dashboard | `localhost:8080/referral-dashboard.html` | `fundhub.ai/referral-dashboard` |

---

## Testing the Analyzer

1. Start both servers (see above)
2. Go to `http://localhost:8080/credit-analyzer.html`
3. Fill in the form with test data
4. Upload a **real credit report PDF**
5. Click "Analyze My Report"

The request will hit your local API at `localhost:3000`.

---

## Troubleshooting

### "npx serve" not found
Run: `npm install -g serve`

### Page loads but API calls fail
Make sure the API is running in Terminal 1 (`npm run dev` in underwrite-iq-lite)

### Browser shows old version
Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

### Navigation links go to fundhub.ai
This is expected! Navigation links point to production. For local testing, open pages directly by URL.

---

## File Structure

```
fundhub-website-GHL/
├── config.js                      # Auto-detects local vs production
├── credit-analyzer.html           # Main analyzer page
├── fix-my-credit-analyzer.html    # Results page (needs credit repair)
├── funding-approved-analyzer.html # Results page (approved for funding)
├── referral-dashboard.html        # Affiliate dashboard
├── start-here.html                # Landing page
├── repair.html                    # Credit repair info
└── results.html                   # Success stories
```

---

## Deploying Changes

Changes are deployed via Git:

```bash
# Commit your changes
git add .
git commit -m "your message here"

# Push to staging
git push origin staging

# When ready for production, merge staging to main
```
