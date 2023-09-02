# Ruislan.com

* Framework: NextJS
* Database: Sqlite
* ORM: Prisma
* Styling: Tailwind CSS

## Running Locally

```shell
cd homepage
pnpm install
pnpm prisma db push
pnpm dev:turbo
```

Rename .env.example to .env

## Add Post

* create a html file, save it in the dir '/content/posts'。
* add an item in the lib/database.js => Post => data, e.g. { slug: 'test', title: 'test', summary: 'test', date: 'yyyy-MM-dd' }。
