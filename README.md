# Frontend React

This repository contains the admin & customer frontend for the eBike System.

## Start & test the application

### Add your own .env file in the root folder

The only required environment variable is REACT_APP_API_BASE_URL, which should contain the base URL (http://localhost:port/api/v1 for example) for the API you're using.

Feel free to add the optional REACT_APP_API_INTERVAL environment variable, to specify how often bikes should be fetched from the API (in milliseconds).

### Start the backend / API (eBike-backend-laravel) using Docker

```
docker compose up ebike_backend
```

### Start the react app (eBike-frontend-react)

```
yarn start (or npm run start)
```

### Build the react app (eBike-frontend-react)

```
yarn build (or npm run build)
```

### Testing the react app (eBike-frontend-react)
```
yarn test (or npm run test)
```
