import { Payload } from "payload";
import { User, Page } from "./payload-types";

export const seed = async (payload: Payload): Promise<void> => {
  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create<User>({
    collection: 'users',
    data: {
      email: 'ana@porsche.digital',
      password: '123',
      firstName: 'Ana',
      lastName: 'Rivera',
      roles: ['admin']
    }
  })

  // This user will be created with the default role of `editor`
  await payload.create<User>({
    collection: 'users',
    data: {
      email: 'editor@porsche.digital',
      password: '123',
      firstName: 'Mateja',
      lastName: 'Roberts',
    }
  })
}