import { UserContext } from "./UserContext"

const user = {
    id: 123,
    nom: 'Dani',
    cognom: 'Morales',
    edat: 26
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>
  )
}
