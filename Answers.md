- [ ] What problem does the context API help solve?

  It helps in keeping your state immutable, which helps prevent errors.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  actions store the things you do - like calling axios, posting to a server, etc.
  reducers are all the logic of what is changing in your state. each time you do an action, it updates the store as indicated in the reducer
  the store is a single source of truth, which means that all the state is stored there and cannot be changed, but rather overwritten each time you add/remove state. redux provides the store, and that is why we use it.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  App state is like redux, having the state saved in a single store and passed around, while component state is saving the state just in the component. In this project the list of smurfs was app state because it was used all over the app, while add smurf was just in the one component because it was only needed there.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Thunk lets us use redux asyncronously. The action creators now return functions rather than objects, which allows us to input the dispatch as the first argument and use it multiple times within the function.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

  I like redux - it's easy to set up once you've learned the syntax. It's also widely used so I'm glad I know how it works now.