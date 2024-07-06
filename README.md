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

# Runtime ENV Variables

```properties
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
NEXT_PUBLIC_BASE_URL=mydomain.com
```