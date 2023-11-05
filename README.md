# Sciflare-React-CRUD

## API Endpoint Notice

Please Note: This project relies on an external API provided by [crudcrud.com](https://crudcrud.com/) for backend support. The current API endpoint is [https://crudcrud.com/api/926f7a02056e456eac575c5ab924bf55](https://crudcrud.com/api/926f7a02056e456eac575c5ab924bf55).

## Important Information

API endpoints from external services like CrudCrud may have a limited lifespan, and it's possible that this endpoint could expire after a certain period. To ensure that the project functions correctly, you should take the following steps when you clone this repository:

1. Visit [crudcrud.com](https://crudcrud.com/) and create your own account.
2. Obtain a new API endpoint for your usage.
3. Replace the existing API endpoint in the project. You can find the endpoint in the `src/utils/axiosutils` file.

## How to Replace the API Endpoint

To replace the API endpoint, open the `axiosutils.js` file located in the `src/utils` directory. Look for the following line of code:

```javascript
const API_ENDPOINT = "https://crudcrud.com/api/926f7a02056e456eac575c5ab924bf55";
