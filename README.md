# bhaveshsoni.ch — Personal Portfolio

Personal portfolio website for Bhavesh Soni, hosted on GitHub Pages at [bhaveshsoni.ch](https://bhaveshsoni.ch).

---

## How to publish this site (step-by-step)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and log in as **bsoni08**
2. Click the **+** icon (top-right) → **New repository**
3. Name it exactly: `bsoni08.github.io`
4. Set it to **Public**
5. Do NOT initialise with a README (we'll push our own files)
6. Click **Create repository**

### Step 2 — Push the site files

Open Terminal in this folder (`github-site/`) and run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/bsoni08/bsoni08.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repo on GitHub, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → click **Save**
4. Your site will be live at `https://bsoni08.github.io` within a minute or two

### Step 4 — Connect your custom domain (bhaveshsoni.ch)

GitHub Pages side:
1. In **Settings → Pages → Custom domain**, enter `bhaveshsoni.ch` and click **Save**
2. The `CNAME` file in this repo already contains your domain — GitHub uses it automatically

Domain registrar side (wherever you bought bhaveshsoni.ch):
1. Log in to your domain registrar
2. Go to **DNS settings** for `bhaveshsoni.ch`
3. Add these **A records** (pointing to GitHub's IPs):
   ```
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153
   @ → 185.199.111.153
   ```
4. Add a **CNAME record**:
   ```
   www → bsoni08.github.io
   ```
5. DNS changes can take up to 24 hours to propagate

### Step 5 — Enable HTTPS (optional but recommended)

Once your custom domain is verified in GitHub Pages settings, check the box:
**"Enforce HTTPS"** — your site will be served securely at `https://bhaveshsoni.ch`

---

## File structure

```
github-site/
├── index.html      # Main portfolio page
├── project.html    # Project page (placeholder)
├── style.css       # All styles
├── CNAME           # Custom domain config for GitHub Pages
└── README.md       # This file
```

## Updating the site

Edit `index.html` or `style.css`, then push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically redeploy within ~60 seconds.
