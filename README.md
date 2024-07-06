# NextJs Starter Template
 Ventrue Technologies NextJs Starter Template
 
 Added ShaCdn init


 With react-generate-component for easy path deployment, api route generation and path with different layout

 usage:
 
 For deploying a new path
 -----------------------------------------------------
```
bunx generate-react-cli component index --type=path
```
 For deploying a new path with different layout
 -----------------------------------------------------
```
bunx generate-react-cli component index --type=path-with-layout
```
 
 For deploying a new api route
 -----------------------------------------------------
```
bunx generate-react-cli component route1 --type=api-route
```
remember to configure prisma
 ```
 Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
 ```

Also dont forget to add your domain to next.config.mjs so images load correctly

# Runtime ENV Variables

```properties
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
NEXT_PUBLIC_BASE_URL=mydomain.com
```