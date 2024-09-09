# Payload and Next App Prototype
In order to be able to run this project make sure:
1. payload-backend: The .env. file should contain the MongoDB connection string and your secret (which can be anything).
2. main: The .env.local should contain http://localhost:4000

Then, just needed to run `pnpm run dev` inside each folder and the backend can be accesses in 4000 port and the frontend in 3000.

## To create a block, content type...
First go to payload-backend, create the block inside blocks folder and add the block to the pages folder
Then, go to main, create the component inside blocks folder and add the component to the blockList

This is just a basic prototype, current functionality involves:
- Locales 2
- User Roles 2
- Versioning (Draft and Published)
- Pages

Created by: Ana Rivera Faraco :)