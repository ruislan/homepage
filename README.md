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

## Running in Docker

```shell
cd homepage
pnpm prisma db push
cp ./prisma/data.db /path/to/data
docker build -t yourdomain/homepage:latest .
docker run -it --rm --name hp -v /path/to/data:/app/db -e DATABASE_URL=file:/app/db/data.db -p 3000:3000 yourdomain/homepage:latest
```

## Add Post

* create a html file, save it in the dir '/content/posts'。
* add an item in the lib/database.js => Post => data, e.g. { slug: 'test', title: 'test', summary: 'test', date: 'yyyy-MM-dd' }。
