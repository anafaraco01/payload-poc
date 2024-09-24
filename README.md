# Payload and Next App Prototype
In order to be able to run this project make sure that:
1. payload-backend: The .env. file contains the MongoDB connection string and your secret (which can be anything).
2. main: The .env.local contains the server_url (eg. http://localhost:4000).

Then, you only need to run `pnpm run dev` inside each folder and everything should work. The backend can be accessed from port 4000 and the frontend from port 3000.

## To create a block, content type...
First go to payload-backend, create the block inside blocks folder and add the block to the pages file.
Then, go to main, create the component inside blocks folder and add the component to the blockList.

## This is just a basic prototype for PoC, current functionality includes:
- Locales 2
- User Roles 2
- Versioning (Draft and Published)
- Pages
- Default columns Displayed
- Block images

Created by: Ana Rivera Faraco :)