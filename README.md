# Using tailwind with fresh

### Usage

Make sure you have `tailwindcss` installed, e.g. 

```
npm install -g tailwindcss
```

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary. 

### Details

`deno.json` defines the `start` command to run both the fresh server and 
the Tailwind CLI on file change. Tailwind will rebuild `static/main.css` which 
is linked into every page via `routes/_app.tsx`. 

