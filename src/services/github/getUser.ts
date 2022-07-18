import { useCallback, useState } from "react";
import { githubService } from "./config";

export namespace GetUserService {
  type Request = {
    user: string;
  }

  export type User = {
    id: string;
    avatar_url: string;
    login: string;
    name: string;
  }

  export async function execute({ user }: Request) {
    const { data } = await githubService.get<User>(`/users/${user}`);

    return data;
  }
}

type Input = {
  user: string;
}

export function useUser() {
  const [data, setUser] = useState<GetUserService.User>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(true);

  const loadUser = useCallback(async ({ user }: Input) => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await GetUserService.execute({ user });
      setUser(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, hasError, user: data, loadUser };
}
