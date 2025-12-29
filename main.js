/**
 * Logs in the console output all the followers for the current user and stores the list in LocalStorage.
 * @param personalUserName the username for your account.
 * @param toSave whether to save users to LocalStorage or not.
 * 
 * @returns list of the found users.
 */
function listAndSaveUsers(
  personalUserName,
  toSave
) {
  const users = new Set();
  const wordsToExclude = ["accountsedit", "archivestories", "legalprivacy", "legalterms", "weblite", "accountsmeta_verified?entrypoint=web_footer", "reels", "directinbox", "explore", "explorelocations"]
  
  document
    .querySelectorAll('a[href^="/"][role="link"]')
    .forEach(a => {
      const username = a.getAttribute("href")?.replace(/\//g, "");
      if (
        username &&
          !username.includes(personalUserName) &&
            !wordsToExclude.includes(username)
        ) {
        users.add(username);
      }
    });

  console.log(`Found ${users.size} followers`);
  console.log([...users]);

  if (toSave) {
    saveToLocalStorage(users);
  }

  return users;
}

function saveToLocalStorage(users) {
  const STORAGE_KEY = "ig_followers_snapshot";

  const snapshot = {
    timestamp: new Date().toISOString(),
    count: users.size,
    users: [...users]
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));

  console.log(
    `Saved ${snapshot.count} followers to localStorage under "${STORAGE_KEY}"`
  );
}

function findUsersThatDontFollowBack() {
  const followers = localStorage.getItem("ig_followers_snapshot");
  const following = listAndSaveUsers("<your_ig_username_here>", false);

  const usersNotFollowingBack = new Set();
  following.forEach(user => {
      if (!followers.contains(user)) {
        usersNotFollowingBack.add(user);
      }
    }
  )

  console.log("Users that don't follow you back:\n" + [...usersNotFollowingBack]);
}

//listAndSaveUsers(<your_ig_username_here>, true);
//findUsersThatDontFollowBack();