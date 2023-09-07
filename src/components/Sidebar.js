import { styles } from "styles/styles";

const Item = ({ children }) => {
    return (
        <div className={`flex justify-center items-center 
        h-16 w-16 rounded-3xl text-2xl`+ styles.iconBackground + styles.iconTextStyle + styles.transition} >
            {children}
        </div>
    );
};


const Sidebar = () => {
  return (
    <div
      className="fixed top-4 left-4 h-1/2 w-20
      flex flex-col justify-start items-center gap-4
      m-0 pt-10
      bg-gray-900 text-white rounded-3xl"
    >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        
    </div>
  );
};

export default Sidebar;
