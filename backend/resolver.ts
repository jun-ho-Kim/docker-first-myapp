import { PrismaClient, Prisma } from '.prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    visitorBooks: async (): Promise<any> => 
      await prisma.$queryRaw`
        SELECT * 
        FROM do_visitorbook
      `
  },
  Mutation: {
    createVisitorBook: async (_: unknown, args: any): Promise<any> => {
      const {text} = args
      
      return await prisma.do_visitorbook.create({
        data: {
          text,
        }
      })
    }
  }
}