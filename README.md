# Yak Prototype

## Goals:

* Model clicking on a friend's userName to get to their profile.
* Also check out the "Sample Directory Tree" directory for an example of React directory structure and naming conventions.

## Instructions:

1. cd to ./yak-prototype/src/data
1. Run JSON Server

```bash
json-server -p 8088 -w db.json
```

1. cd to ./yak-prototype/src

```bash
npm install
npm start
```

## What's Working/Not Working

### Working:

* Navbar with link to message list
* List of messages displays with a userName that is a dynamically created link to the user's profile

### Not Working:

* The userID is not being passed correctly to the Profile component, so the component is not rendering.
