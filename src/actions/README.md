# Server Side Actions

Para ser ejecutados en servidor desde un componente cliente, por el momento funciona solamente con metodos post(mutaciones de información)

dentro de cada accion se puede correr codigo necesario para comunicarse con la base de datos, ya sea  crear un nuevo post en un schema existe de prisma
```typescript
const res= await prisma.post.create({data:{
    tittle:"abc",
    description:"",
}})
```
o proximamente hacerlo con apolloclient con graphQl.

To be executed on server-side from a client-side component, for the moment it only works with post(data mutations).

Inside each action you can run any code needed to handle database operations, as a creating a new post with a existing prisma schema with the above mentioned code snippet or with a graphQL apolloClient .