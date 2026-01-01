// Temporarily disabled Prisma to get the site live
export const prisma = new Proxy({}, {
  get: () => {
    return () => ({
      findMany: async () => [],
      findUnique: async () => null,
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
    });
  }
}) as any;
