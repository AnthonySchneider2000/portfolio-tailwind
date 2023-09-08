const Item = ({ children }) => {
    return (
        <div className="sidebarItem">
          {children}
        </div>
    );
};


const SidebarDesktop = () => {
  return (
    <div
      className="dsidebar"
    >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        
    </div>
  );
};

export default SidebarDesktop;
