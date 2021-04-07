## philly-art
Browse public art projects in Philadelphia

## How to run the project
Install dependencies:
```bash
npm install
cd client && npm install
```

Run the test suite:
```bash
npm run test
```

Start the app:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser if it didn't launch automatically

### Description:
Pulls artist information from [philart](https://www.philart.net/api.html), an API that tracks all public art projects in the city of Philadelphia. I implemented some simple artist filtering and pagination. When you click on an artist it navigates to a second page that shows the artist's projects in a thumbnail gallery. Below each gallery I provide a map of Philadelphia with the art projects displayed as markers.

#### Some obvious limitations of the app:
* No type-checking - In the interest of time I chose not to use TypeScript
* No persistent state - I implemented a simple Router but ran out of time so you keep losing state between route navigation
* Wanted to implement a simple auth flow to save favorites but also ran out of time on that one