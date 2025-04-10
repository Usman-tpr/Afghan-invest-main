## Deployed Version Of Afghan Invest Frontend
See here https://afghaninvest.co/

## Recommended Project Flow

- Component Name should be in PascalCase
- Component names will be multi-worded to not conflict with other components
- Single instance components should begin with the prefix The (eg: TheHeader instead of header)
  
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run build
```
##
### Routing Rules
1. **Path Format:**
   - Use kebab-case for route paths.
   - Keep paths all lowercase.
   - Separate words with hyphens for readability.
     ```javascript
     // Good
     { path: '/user-profile', name: 'userProfile', component: UserProfile }

     // Avoid
     { path: '/UserProfile', name: 'UserProfile', component: UserProfile }
     ```

2. **Dynamic Segments:**
   - Use dynamic segments for variable parts of the URL.
   - Keep dynamic segments concise and use camelCase.
     ```javascript
     // Good
     { path: '/user/:userId', name: 'user', component: User }

     // Avoid
     { path: '/user/:user_id', name: 'user', component: User }
     ```

3. **Nested Routes:**
   - Use nested routes for complex UI structures.
   - Reflect the UI hierarchy in the route structure.
     ```javascript
     // Good
     {
       path: '/dashboard',
       name: 'dashboard',
       component: Dashboard,
       children: [
         { path: 'overview', name: 'overview', component: Overview },
         { path: 'stats', name: 'stats', component: Stats }
       ]
     }
     ```
