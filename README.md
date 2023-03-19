## Task Hive - A Simple and Easy-to-Use Todo List Application

Task Hive is a simple and easy-to-use todo list application built using React, React Beautiful DnD, Tailwind CSS, and Firebase. With Task Hive, you can create tasks, add them to different lists, and drag and drop tasks between lists. The application also includes a login and sign-up feature, allowing users to securely access their tasks from anywhere.

## Features

Task Hive includes the following features:

-  Create, edit, and delete tasks
-  Drag and drop tasks between lists using React Beautiful DnD
-  Login and sign-up using Firebase Authentication
-  Securely store user data using Firebase Firestore
-  Responsive design using Tailwind CSS

## Installation

To install this project, clone the repository and run **'npm install'** to install the required dependencies. This project requires Node.js and NPM to be installed on your machine. If you don't already have them installed, you can download them from the [official website](https://nodejs.org/en).

```bash
git clone https://github.com/amankashyap004/task-hive
cd task-hive
npm install
```

## Usage

To use this project, run **'npm start'** to start the development server and view the project in your browser at **http://localhost:3000**. You can then create an account or log in to an existing one to access your tasks.

```bash
npm start
```

The project uses **React**, **React Beautiful DnD**, and **Tailwind CSS**, making it easy to modify the layout and styling of the application. The code is well-organized and commented, making it easy to understand and modify even for those new to React.

## Deployment

Follow these steps to deploy your Task Hive project to GitHub Pages:

1. Install the **'gh-pages'** package as a development dependency in your project:

```bash
npm install --save-dev gh-pages
```

2. In your **'package.json'** file, add the following scripts:

```bash
{
  "scripts":
  {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Create a new Git branch called **'gh-pages'**:

```bash
git checkout -b gh-pages
```

4. Run the following command to generate a production build of your project:

```bash
npm run build
```

5. Commit and push your changes to the **'gh-pages'** branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

6. Go to your repository's settings and scroll down to the GitHub Pages section.

7. Under "Source", select "gh-pages" as your branch and "root" as your folder.

8. Click "Save" and wait for GitHub to deploy your project.

9. Your Task Hive project is now live at **'https://yourusername.github.io/yourrepositoryname/'**.

## [Demo](https://amankashyap004.github.io/task-hive/)

### 🛠 Skills

**HTML**, **CSS**, **JavaScript**, **React**, **Tailwind CSS**, **Firebase** ...

## Contributing

If you would like to contribute to this project, please submit a pull request with your changes or report any issues. Before submitting a pull request, please make sure your changes are well-documented and tested.

## Credits

This project was built using React, React Beautiful DnD, Tailwind CSS, and Firebase.
