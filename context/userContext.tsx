import { createContext, useContext, useState } from 'react';

export interface ModalData {
  backdrop_path: string;
  title: string;
  overview: string;
  original_language: string;
  release_date: string;
  vote_average: number;
}
interface userContextI {
  isModal: boolean;
  setIsModal: (value: boolean) => void;
  ModalData?: ModalData;
  setModalData: (value: ModalData) => void;
}
const UserContext = createContext({} as userContextI);
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModal, setIsModal] = useState(false);
  const [ModalData, setModalData] = useState<ModalData | undefined>();

  const contextValue = {
    isModal,
    setIsModal,
    ModalData,
    setModalData,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
