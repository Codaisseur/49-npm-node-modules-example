After cloning me, try running

```
node index.js
```

You'll see an error `MODULE_NOT_FOUND`.

To fix the error, you have to run

```
npm install
```

That way, npm will download dependencies into the `node_modules` folder, and you can run the code without errors. npm knows which dependencies to download because they are defined in `package.json` (and also in `package-lock.json`, but that's a whole other story...)
