import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div>
      <div role="tablist" class="tabs tabs-lift">
        <NavLink to={'/'} role="tab" class="tab">
          Tab 1
        </NavLink>
        <NavLink to={'/hani'} NavLink role="tab" class="tab tab-active">
          Tab 2
        </NavLink>
        <NavLink to={'/mani'} role="tab" class="tab">
          Tab 3
        </NavLink>
      </div>
    </div>
  );
};

export default Tabs;

