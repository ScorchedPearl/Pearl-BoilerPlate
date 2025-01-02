import { GraphqlContext } from "../../interfaces"
import { prismaClient } from "@workspace/prisma/build/index";
const queries={
 getCurrentUser: async(parent:any, args:any, ctx:GraphqlContext)=>{
  const id=ctx.user?.id
  if(!id) return null
  const user= await prismaClient.user.findUnique({ where:{id} })
  console.log(user);
  return user;
},
}
export const resolvers = { queries };