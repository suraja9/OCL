# Admin Dashboard Setup Guide

This document provides instructions for setting up and using the Admin Dashboard feature.

## 🚀 Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```

### 2. Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

### 3. Access the Admin Dashboard
- Open your browser and go to: `http://localhost:8080/admin`
- Use the default credentials:
  - **Email:** `admin@ocl.com`
  - **Password:** `admin123`

## 📋 Features

### ✅ Completed Features

1. **Admin Authentication**
   - JWT-based authentication
   - Secure login with password hashing
   - Session management with token expiration
   - Default admin account creation

2. **Admin Dashboard**
   - Overview with statistics and charts
   - Recent forms display
   - Top states by form submissions
   - Real-time data updates

3. **Address Forms Management**
   - View all address forms in a paginated table
   - Search and filter functionality
   - Expandable rows showing full details
   - Edit forms with modal interface
   - Delete forms with confirmation dialog
   - Export data to CSV

4. **Pincode Management**
   - View all pincodes in a paginated table
   - Add new pincodes
   - Edit existing pincodes
   - Delete pincodes with confirmation
   - Search and filter by state/city
   - Export pincode data to CSV

5. **UI/UX Features**
   - Responsive design matching existing dashboard style
   - Loading states and error handling
   - Pagination for large datasets
   - Confirmation dialogs for destructive actions
   - Toast notifications for user feedback

## 🔐 Admin Routes

### Backend API Routes
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/addressforms` - Get address forms (with pagination/search)
- `PUT /api/admin/addressforms/:id` - Update address form
- `DELETE /api/admin/addressforms/:id` - Delete address form
- `GET /api/admin/pincodes` - Get pincodes (with pagination/search)
- `POST /api/admin/pincodes` - Add new pincode
- `PUT /api/admin/pincodes/:id` - Update pincode
- `DELETE /api/admin/pincodes/:id` - Delete pincode

### Frontend Routes
- `/admin` - Admin login page
- `/admin/dashboard` - Main admin dashboard (protected)

## 🔧 Technical Implementation

### Backend
- **Authentication:** JWT tokens with bcrypt password hashing
- **Database:** MongoDB with Mongoose ODM
- **Models:** Admin model with role-based access
- **Middleware:** JWT verification and admin route protection
- **API:** RESTful endpoints with proper error handling

### Frontend
- **Framework:** React with TypeScript
- **Routing:** React Router with protected routes
- **UI:** Shadcn/ui components with Tailwind CSS
- **State:** Local state management with React hooks
- **API:** Fetch API with proper error handling

## 📊 Database Collections

### Admins Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  role: String (admin|super_admin),
  isActive: Boolean,
  lastLogin: Date,
  loginCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Address Forms Collection (existing)
- Used for managing customer address forms
- Contains sender and receiver information
- Includes shipment and payment data

### Pincodes Collection (existing)
- Contains Indian postal code data
- Includes area, city, district, and state information

## 🛡️ Security Features

1. **Password Security**
   - Passwords hashed with bcrypt (cost factor 12)
   - No plain text password storage

2. **JWT Security**
   - 24-hour token expiration
   - Secure token verification middleware
   - Automatic logout on token expiration

3. **Route Protection**
   - All admin routes require valid JWT token
   - Frontend route protection with redirect to login
   - Backend middleware validates admin status

4. **Input Validation**
   - Server-side validation for all inputs
   - Client-side form validation
   - SQL injection prevention with Mongoose

## 🎯 Usage Instructions

### Managing Address Forms
1. Navigate to the "Address Forms" tab
2. Use search bar to find specific forms
3. Filter by completion status or state
4. Click expand button (▼) to view full details
5. Use Edit button to modify form data
6. Use Delete button to remove forms (with confirmation)
7. Export data using the "Export CSV" button

### Managing Pincodes
1. Navigate to the "Pincode Management" tab
2. Click "Add Pincode" to create new entries
3. Use search to find specific pincodes
4. Filter by state or city
5. Edit existing pincodes using the Edit button
6. Delete pincodes using the Delete button (with confirmation)
7. Export pincode data using "Export CSV"

### Dashboard Overview
- View total forms, completion rates, and statistics
- Monitor recent form submissions
- Track top states by activity
- Real-time data updates

## 🔄 Data Flow

1. **Authentication Flow:**
   Admin Login → JWT Token → Protected Routes → Dashboard Access

2. **Form Management Flow:**
   Dashboard → Address Forms Tab → Search/Filter → View/Edit/Delete

3. **Pincode Management Flow:**
   Dashboard → Pincode Tab → Add/Edit/Delete → Database Updates

## 🐛 Troubleshooting

### Common Issues

1. **Login Issues**
   - Ensure backend server is running on port 5000
   - Check MongoDB connection
   - Verify default admin account was created

2. **Data Loading Issues**
   - Check network connection
   - Verify API proxy configuration in vite.config.ts
   - Check browser console for errors

3. **Permission Issues**
   - Ensure admin token is valid and not expired
   - Check admin account status (isActive = true)

### Environment Variables
Create a `.env` file in the backend directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 📈 Performance Considerations

- Pagination implemented for large datasets (10 items per page)
- Search queries optimized with MongoDB indexes
- CSV export limited to reasonable data sizes
- JWT tokens cached in localStorage for session persistence
- Lazy loading of dashboard components

## 🔮 Future Enhancements

Potential improvements for future versions:
1. Role-based permissions (admin vs super_admin)
2. Audit logging for admin actions
3. Bulk operations for forms and pincodes
4. Advanced filtering and sorting options
5. Dashboard charts and analytics
6. Email notifications for admin actions
7. Two-factor authentication
8. Admin user management interface

## 📞 Support

For technical support or questions about the admin dashboard:
1. Check this documentation
2. Review console logs for error messages
3. Verify database connections and API endpoints
4. Test with default admin credentials first
