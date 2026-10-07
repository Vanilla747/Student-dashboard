# Student Dashboard

A modern responsive student dashboard built with **HTML, CSS, and
vanilla JavaScript**.

## Features

-   Responsive dashboard for desktop, tablet, and mobile
-   Student information and current semester
-   GPA summary card
-   Course cards with course code, grade, and progress
-   Weekly class schedule
-   Add, complete, and delete to-do items
-   To-do items saved with `localStorage`
-   Dark/light mode toggle
-   Theme preference saved with `localStorage`
-   Smooth hover effects and simple animations
-   No backend, database, framework, or external dependencies

## Project Files

``` text
student-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

No installation is required.

1.  Download or clone this project.
2.  Open the `student-dashboard` folder.
3.  Double-click `index.html`.
4.  The dashboard will open in your browser.

You can also use a local development server if you prefer. For example,
with Python:

``` bash
python -m http.server 8000
```

Then open:

``` text
http://localhost:8000
```

## Deploy to GitHub Pages

### Option 1: GitHub website

1.  Create a new repository on GitHub.
2.  Upload `index.html`, `style.css`, `script.js`, and `README.md`.
3.  Open the repository's **Settings**.
4.  Select **Pages**.
5.  Under **Build and deployment**, choose:
    -   Source: **Deploy from a branch**
    -   Branch: **main**
    -   Folder: **/ (root)**
6.  Save the settings.
7.  Wait for GitHub Pages to publish the site.
8.  Your website will be available at:

``` text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

### Option 2: Git command line

From inside the project folder:

``` bash
git init
git add .
git commit -m "Create student dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then enable GitHub Pages from the repository's **Settings → Pages**.

## Customization

### Change the student name

Open `index.html` and change:

``` html
<h2>Hi, Ananda 👋</h2>
```

### Change courses

Edit the course cards in `index.html`. Each course contains:

-   Course code
-   Course name
-   Description
-   Grade
-   Progress percentage

### Change the schedule

Edit the schedule items in the `#schedule` section of `index.html`.

### Change the starting to-do items

The first time the page loads, `script.js` uses the `defaultTodos`
array. After that, items are stored in browser `localStorage`.

## Notes

-   The website is fully frontend-only.
-   To-do data is stored only in the user's browser.
-   Theme preference is also stored only in the user's browser.
-   Clearing browser site data will remove saved to-do items and the
    saved theme.
