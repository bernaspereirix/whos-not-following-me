# Who's Not Following Me

This a small script meant to be used inside the DevTools of your browser.

It works best on small/medium sized accounts, since it requires you to manually open up your follower list and scroll all the way to the bottom of it.

## Usage

### Saving your follower list to LocalStorage

- Open your personal instagram profile and click on the Followers button, and scroll down all the way to the bottom of your follower list.
- Copy the contents of `main.js` to your DevTools console.
- Replace both `<your_ig_username_here>` placeholders with your actual Instagram username, as a `String`.
- Uncomment the call to the `listAndSaveUsers` function.
- Run the script.

This will print all the users that are following you to the console and save them as a list to LocalStorage.

### Seeing who doesn't follow you back

- Open your personal instagram profile and click on the Following button, and scroll down all the way to the bottom of your folloing list.
- Copy the contents of `main.js` to your DevTools console.
- Replace both `<your_ig_username_here>` placeholders with your actual Instagram username, as a `String`.
- Uncomment the call to the `findUsersThatDontFollowBack` function.
- Run the script.

This will print a list of the users that you are following as well as a list of the users you're following but that don't follow you back.

## License

This project is licensed under the MIT license.