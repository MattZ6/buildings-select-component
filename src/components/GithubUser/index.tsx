import { useEffect } from "react";
import { useUser } from "../../services/github/getUser";

export function GithubUser() {
  const { isLoading, hasError, user, loadUser } = useUser();

  useEffect(() => {
    loadUser({ user: 'DeboraMiyake' });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (hasError) {
    return (
      <div>
        <p>Ops... deu pau!</p>
        <button onClick={() => loadUser({ user: 'DeboraMiyake' })}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div>
      <img src={user?.avatar_url} alt="Profile avatar" />

      <small>{ user?.login }</small>
      <strong>{user?.name}</strong>
    </div>
  );
}
