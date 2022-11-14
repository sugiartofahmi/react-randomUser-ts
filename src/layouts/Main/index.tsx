import { ReactNode, FC } from "react";

type MainLayoutType = {
  children: ReactNode;
};
const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div className="App">
      <main className="w-full h-screen flex flex-col bg-[#3B3486] items-center justify-center">
        <div className="w-[30%] bg-[#7743DB] p-5 text-[#FFE9B1] rounded-lg flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-bold text-2xl">Random User Generator</h1>
          {children}
        </div>
      </main>
    </div>
  );
};
export default MainLayout;
