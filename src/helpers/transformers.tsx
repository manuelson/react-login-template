import { User } from "src/compiler/types";

export const transformers = () => {

  const transformUserResponse = (user: any) : User => {
    return {
      email: user.data.email,
      token: user.data.token,
      firstname: user.data.firstname,
      lastname: user.data.lastname,
    }
  }

  return { transformUserResponse }
};
