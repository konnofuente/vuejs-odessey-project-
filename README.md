
# Fuente Music 🎶- Online Music Platform

## Overview

Fuente Music is an online music platform built with Vue.js. The platform allows users to upload their songs and enables others to listen to them.

### View Project Life
**Link** : [Fuente Music 🎶](musicapp.konnomelifuente.online)

## Concepts Applied

### 1. Form Validation
- Enforced rules to prevent invalid data submission.
- File: [Validation Utils](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/utils/validation.js)

### 2. Authentication
- Firebase used for user authentication and registration.
- Files: [AppAuth](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/components/module/auth/AppAuth.vue), [LoginForm](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/components/module/auth/LoginForm.vue), [RegisterForm](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/components/module/auth/RegisterForm.vue)

### 3. Routing
- Vue Router library used for navigation and route guarding.
- File: [Router Config](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/router/index.js)

### 4. Uploading Files
- Firebase used for file storage with validation rules.
- File: [UploadFile Component](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/components/module/manage/UploadFile.vue)

### 5. Playing Music
- Implemented audio player with basic controls.
- File: [PlayerView Component](https://github.com/konnofuente/vuejs-odessey-project-/blob/fuente-music/fuente%20music/src/components/module/players/PlayerView.vue)

### 6. Directives
- Custom directives used for extending element properties and methods.

## Architecture and Code Quality

- **State Management**: Vuex used for state management.
- **Clean Code**: The project is structured into modules and components for better maintainability.
- **Reusable Components**: Components like `SongItem`, `CompositionItem`, and `UploadFile` are designed to be reusable.

## Setup

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run serve` to start the development server.

## Author
- Name: konomelifuente@gmail.com
- Portfolio: konnomelifuente.online