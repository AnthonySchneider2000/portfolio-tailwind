const Item = ({ children }) => {
    return (
        <div className="sidebarItem">
          {children}
        </div>
    );
};


const SidebarMobile = () => {
  return (
    <div
      className="sidebar"
    >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        
    </div>
  );
};

export default SidebarMobile;
