# 🚌 Buscomfy+ Navigation Guide

## ✅ Fully Wired Navigation

### 🏠 **Index Page (`/`)**

- Links to all major screens for testing
- Central hub for development and testing

### 🔐 **Authentication Flow**

- **Login (`/login`)** ➜ **Home** (success) or error states
  - "Create Account" ➜ **Register** (`/register`)
  - "Forgot Password?" ➜ **Forgot Password** (`/forgot-password`)
- **Register (`/register`)** ➜ **Verification** (`/verification`)
  - "Sign In" ➜ **Login** (`/login`)
- **Forgot Password (`/forgot-password`)** ➜ **Verification** (`/verification`)
- **Reset Password (`/reset-password`)** ➜ **Login** (`/login`)
- **Verification (`/verification`)** ➜ **Home** (`/`)

### 👤 **Account Management**

- **My Account (`/my-account`)**:

  - "Personal Info" ➜ **Personal Info** (`/personal-info`)
  - "Change Password" ➜ **Reset Password** (`/reset-password`)
  - "Notification Preferences" ➜ **Notifications** (`/notifications`)
  - "Privacy Settings" ➜ **Help Center** (`/help-center`)

- **Personal Info (`/personal-info`)**:
  - Save ➜ **My Account** (`/my-account`) with success message
  - Back ➜ Previous page

### 📢 **Notifications (`/notifications`)**

- **Notification Types**:
  - Delay notifications ➜ **Trip Details** (`/trip-details`)
  - Reminder notifications ➜ **Trip Details** (`/trip-details`)
  - Booking notifications ➜ **Luggage Check-In** (`/luggage-check-in`)
  - Service notifications ➜ **Help Center** (`/help-center`)
  - Feature notifications ➜ **Help Center** (`/help-center`)

### 🚌 **Trip Management**

- **Trip Details (`/trip-details`)**:

  - "View all stops" ➜ **Trip Stops** (`/trip-stops`)
  - Back ➜ Previous page

- **Trip Stops (`/trip-stops`)**:
  - Back ➜ **Trip Details** (`/trip-details`)

### 🧳 **Services**

- **Luggage Check-In (`/luggage-check-in`)**:

  - Submit ➜ **Home** (`/`) with success message
  - Back ➜ Previous page

- **Feedback (`/feedback`)**:

  - Submit ➜ **Home** (`/`) with success message
  - Back ➜ Previous page

- **Report Problem (`/report-problem`)**:
  - Submit ➜ **Home** (`/`) with success message
  - Back ➜ Previous page

### 🗺️ **Bottom Navigation** (Available on account screens)

- **🏠 Home** ➜ **Index** (`/`)
- **📅 Calendar** ➜ **Trip Details** (`/trip-details`)
- **📋 Bookings** ➜ **Trip Stops** (`/trip-stops`)
- **👤 Profile** ➜ **My Account** (`/my-account`)

### 🆘 **Help & Support**

- **Help Center (`/help-center`)** - Standalone page
- **Chat Support Button** - Available on most screens (visual only)

### 🎯 **Onboarding Flow**

- **Splash (`/splash`)** - App introduction
- **Onboarding (`/onboarding`)** - Single screen with Skip/Continue
- **Onboarding Flow (`/onboarding-flow`)** - Multi-screen flow

## 🎨 **Active Navigation States**

### Bottom Navigation Icons:

- **Home screens**: Home icon is orange
- **Account/Profile screens**: Profile icon is orange
- **Other screens**: All icons gray

### Responsive Design:

- All screens adapt to mobile with appropriate background images
- Forms scale down appropriately on smaller screens
- Navigation remains consistent across all device sizes

## 🔄 **Navigation Patterns**

### Success Flows:

1. **Form Success** ➜ Redirect with success message
2. **Back Navigation** ➜ Previous page or logical parent
3. **Authentication** ➜ Appropriate next step in flow

### Error Handling:

- Form validation errors stay on current page
- Invalid credentials redirect to error pages
- Missing pages redirect to 404 (**Not Found** `/404`)

## 🧪 **Testing Navigation**

Start from **Index** (`/`) and follow any path:

- All links work properly
- Back buttons go to correct pages
- Forms submit to appropriate destinations
- Bottom navigation works across all screens
- Authentication flow is complete
- Success messages appear correctly

---

_All navigation has been tested and verified to work correctly! 🎉_
