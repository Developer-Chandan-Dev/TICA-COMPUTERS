import { configureStore } from "@reduxjs/toolkit";
import EnquiryDataSlice from "./features/admin/EnquiryData/enquiryDataSlice";
import sidebarToggleSlice from "./features/admin/SidebarToggle/sidebarToggleSlice";
import DashboardNavbarDataSlice from "./features/admin/DashboardNavbarData/DashboardNavbarDataSlice";
import contactDataSlice from "./features/admin/ContactData/contactDataSlice";
import materialHeadingSlice from "./features/admin/MaterialHeading/materialHeadingSlice";

// Create and configure the store
const store = configureStore({
  reducer: {
    enquiryData: EnquiryDataSlice,
    contactData: contactDataSlice,
    toggleSidebar: sidebarToggleSlice,
    dashboardNavbarData: DashboardNavbarDataSlice,
    materialHeading: materialHeadingSlice,
  },
});

export default store;
