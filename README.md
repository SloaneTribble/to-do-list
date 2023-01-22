# to-do-list

This assignment from The Odin Project is designed to offer a bit more practice with Javascript fundamentals, along with modules and Webpack, before moving on to more advanced topics.

Live Preview (using local storage): https://sloanetribble.github.io/to-do-list/

Notable features of this app:

- Create projects and assign tasks to those projects
- Projects and tasks are color coded by priority
- Projects and tasks are sorted by due date
- User can edit and remove projects and tasks
- Toggle between light and dark themes
- User tasks and theme setting are managed with local storage

Work in Progress:

Add BaaS with Firebase. Sign in features have already been implemented.

Remaining tasks:

- Prompt user to sign in (allow guest option)
- Render app with user object as an argument, allowing easy access to user data throughout project
- Retrieve user data from firestore using uid
- Store edits to firestore using uid
