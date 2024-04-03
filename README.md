# React Login Template

This document describes a login template in React that connects to a custom API to authenticate users.

## Project Structure

The project is structured as follows:

- `src/`
	- `components/`
		- Loader.tsx: This component handles loaders
		- LogoutButton.tsx: This component handles the logout functionality
		- Router.tsx: This component handles routers
	- `layout/`
		- Index.tsx: Contains the layout structure.
	- `hooks/`
		- useAuth.tsx: Hook for authenticate or logout the user
		- useLocalStorage.tsx: Hook for manage localStorage
		- useUser.tsx: Hook for manage User
	- `context/`
		- AuthContext.tsx: This module provides the authentication context for the application.
	- `compiler/`
		- types.tsx: This TypeScript file defines all interfaces
	- App.tsx: This is the main component of the application.

## Usage

To use this template, simply clone the repository, install the dependencies with `npm install` or `yarn install`, and then start the application with `npm start` or `yarn start`. Be sure to configure the URL of your custom API in `.env` file.

## Versions

- React 18.2
- Vite 5.2
- Vite react swc 3.5

## Contributing

We welcome contributions to this project! Here are the steps to get started:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page and clone your forked repository to your local machine.

2. **Create a Branch**: Create a new branch on your local repository. The branch name should be descriptive of the changes you'll be making.
<code>git checkout -b your-branch-name</code>

3. **Make Your Changes**: Make the changes you want to contribute. These could be adding new features, fixing bugs, or improving documentation.

4. **Commit Your Changes**: Commit your changes with a descriptive commit message.
<code>git commit -m "Your descriptive commit message"</code>

5. **Push to Your Fork**: Push your changes to your forked repository.
<code>git push origin your-branch-name</code>

6. **Create a Pull Request**: Go to your forked repository on GitHub and click the 'New pull request' button. Fill out the form and then submit the pull request.

Before submitting your pull request, please make sure your changes do not break the project. You can do this by running the project and checking if everything works as expected.

Thank you for your contribution!
