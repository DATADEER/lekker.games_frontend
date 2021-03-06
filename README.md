# lekker.games_frontend

![frontend logo](frontend.png)

This is the frontend of a game recommendation engine. It still in development and currently only usable with mocked data via a [mocked API](https://github.com/DATADEER/lekker.games_mocked_api).

Run the [mocked API](https://github.com/DATADEER/lekker.games_mocked_api) with `node index.js` on http://localhost:4000

And run this repository with `npm run serve` on port http://localhost:8080

or check out the [Live Demo](https://demo.lekker.games) enviroment using mocked data.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Try out Application
#### Possible SteamIDs
The input field on http://localhost:8080/#/mygames takes the follwing **values** to produce certain application states. Like errors and valid results.

* `<anyString>` = [VALID] mocked valid user profile
* `<empty input field>` = [ERROR] no user input
* `1` = [ERROR] profile/games are not public
* `2` = [ERROR] profile is public but user has no games

The frontend runs on http://localhost:8080

# Screenshots

![home page](src/assets/img/screenshots/home.png)

![home page](src/assets/img/screenshots/input.png)

![home page](src/assets/img/screenshots/confirm.png)

![home page](src/assets/img/screenshots/select.png)

![home page](src/assets/img/screenshots/result.png)
