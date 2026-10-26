# Om Salkar — Portfolio Website

A responsive, minimal-light personal portfolio built with plain HTML, CSS, and JavaScript. No framework or build step is required. It is structured for GitHub Pages hosting.

## Included

- Responsive layout for desktop, tablet, and mobile
- Accessible navigation with mobile menu
- About, skills, projects, education, and contact sections
- Interactive project-detail dialogs
- Contact links configured from one place
- Reduced-motion support and keyboard focus states
- Search-engine title and description metadata

## Run locally

1. Extract the ZIP.
2. Open `index.html` in your browser.

For a more realistic local server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

Your GitHub profile, LinkedIn profile, and contact email are already configured in `script.js`. Review the `SITE_CONFIG` object before publishing:

- `email`: `omsalkar15@gmail.com`
- `github`: `https://github.com/Omsalkar`
- `linkedin`: `https://www.linkedin.com/in/om-salkar`
- `projects.complaint.repository`: verified repository URL for Complaint Service Management
- `projects.recovery.repository`: `https://github.com/Omsalkar/ransomware-recovery-orchestrator` (verify the repository structure and public access before sharing)

Do not publish placeholder URLs or links to repositories you do not own or have permission to share.

### Resume PDF (optional)

If you want a resume link later, add your PDF to this folder named `resume.pdf`. Only add it once the document is ready and safe to publish. The current site does not display a resume download button because no resume file has been provided.

### Project details

The project descriptions are a starting point based on the project scope. Review them against your final implementation, and edit `script.js` if any feature or technology listed does not accurately describe your work.

### Skills

The portfolio distinguishes your primary web-development focus from broader learning areas. Keep the skill list honest: remove any technology you cannot comfortably discuss in an interview. Listing a technology does not imply professional proficiency.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `om-salkar-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root. Do not upload the ZIP as the only file.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then click **Save**.
6. Wait for GitHub Pages to finish publishing. The site URL will usually look like `https://YOUR-USERNAME.github.io/om-salkar-portfolio/`.
7. Open the published URL on desktop and mobile. Test every navigation link, project dialog, and contact link.

If you name the repository exactly `YOUR-USERNAME.github.io`, GitHub Pages can publish it at the root URL `https://YOUR-USERNAME.github.io/`.

## Updating later

Edit the relevant files and push/commit the changes to the configured branch. GitHub Pages will redeploy automatically.

## Before using this in job applications

- Add your real GitHub and LinkedIn URLs and a monitored email address.
- Add repository links to both projects, if you can share them publicly.
- Confirm every listed skill and project detail is accurate.
- Test mobile layout and links.
- Add a resume PDF only if you want it publicly accessible.
- Replace the generic page title/description if your target role changes.
