# Express.js Admin and User Routes

## Admin Routes

### Test Route
- **Endpoint:** `/api/admin/test`
- **Method:** `GET`
- **Controller:** `adminController.test`
- **Description:** Test endpoint for admin.
- **Response - 200:** `{message: "Hello from admin controller"}`

### Register Admin
- **Endpoint:** `/api/admin/register`
- **Method:** `POST`
- **Controller:** `adminController.registerAdmin`
- **Description:** Register a new admin.
- **Request:** `username, password`
- **Response - 200:** `{ message: "Admin created successfully" }`

### Login Admin
- **Endpoint:** `/api/admin/login`
- **Method:** `POST`
- **Controller:** `adminController.loginAdmin`
- **Description:** Login for admin.
- **Request:** `username, password`
- **Response - 200:** `{ message: "Login successful", id: admin._id }`
- **Response - 400:** `{ message: "Invalid password"}`
- **Response - 500:** `{ message : error.message}`

### Logout Admin
- **Endpoint:** `/api/admin/logout`
- **Method:** `POST`
- **Controller:** `adminController.logoutAdmin`
- **Description:** Logout for admin.
- **Request:** `username, password`
- **Response - 200:** `{ message: "Logout successful"}`
- **Response - 500:** `{ message : error.message}`

### Dashboard
- **Endpoint:** `/api/admin/dashboard`
- **Method:** `GET`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.dashboard`
- **Description:** Access admin dashboard.
- **Response - 200:** `{ message: "Hello from admin dashboard"}`
- **Response - 500:** `{ message : error.message}`

### Create Content
- **Endpoint:** `/api/admin/dashboard/content`
- **Method:** `POST`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.createContent`
- **Description:** Create new content in the admin dashboard.
- **Request:** `title, thumbnail, description`
- **Response - 200:** `{ message: "Content created successfully"}`
- **Response - 400:** `{ message: "Content not created"}`
- **Response - 500:** `{ message : error.message}`

### Get Content
- **Endpoint:** `/api/admin/dashboard/content`
- **Method:** `GET`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.getContent`
- **Description:** Get all content in the admin dashboard.
- **Query:** `offset, limit`
- **Limit:** `20`
- **Response - 200:** `Content json`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

### Get Content By Id
- **Endpoint:** `/api/admin/dashboard/content/:id`
- **Method:** `GET`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.getContent`
- **Description:** Get all content in the admin dashboard.
- **Parameter:** id content
- **Response - 200:** `Content json`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

### Update Content
- **Endpoint:** `/api/admin/dashboard/content/:id`
- **Method:** `PUT`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.updateContent`
- **Description:** Update specific content in the admin dashboard.
- **Parameter:** id content
- **Request:** `title, thumbnail, description`
- **Response - 200:** `{ message: "Content updated successfully"}`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

### Delete Content
- **Endpoint:** `/api/admin/dashboard/content/:id`
- **Method:** `DELETE`
- **Middleware:**
  - `authJwt.verifyToken`
  - `authJwt.isAdmin`
- **Controller:** `adminController.deleteContent`
- **Description:** Delete specific content in the admin dashboard.
- **Parameter:** id content
- **Request:** `title, thumbnail, description`
- **Response - 200:** `{ message: "Content deleted successfully"}`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

## User Route

### Get Content
- **Endpoint:** `/api/user/content`
- **Method:** `GET`
- **Controller:** `adminController.getContent`
- **Description:** Get content for regular users.
- **Response - 200:** `Content json`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

### Get Content
- **Endpoint:** `/api/user/content/:id`
- **Method:** `GET`
- **Controller:** `adminController.getContentById`
- **Description:** Get spesific content for regular users.
- **Parameter:** id content
- **Response - 200:** `Content json`
- **Response - 400:** `{ message: "Content not found"}`
- **Response - 500:** `{ message : error.message}`

Feel free to modify or enhance the routes according to your application's requirements. Make sure to implement proper security measures and error handling based on your project needs.