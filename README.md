# todoList
Todo List Application
This is a simple Todo List application built with Angular and .NET.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js (latest version recommended)
Angular CLI (latest version recommended)
.NET SDK 8.0 or higher
SQL Server (any version compatible with .NET 8.0)
Installation
Clone this repository to your local machine:
bash
Copy code
git clone <repository_url>
Navigate to the project directory:
bash
Copy code
cd todo-list
Install frontend dependencies:
bash
Copy code
npm install
Install backend dependencies:
bash
Copy code
cd backend
dotnet restore
Database Setup
Create a new SQL Server database for the application.
Update the database connection string in the appsettings.json file in the backend directory with your SQL Server credentials.
Run database migrations to create the necessary tables:
bash
Copy code
dotnet ef database update
Running the Application
Start the backend server:
bash
Copy code
cd backend
dotnet run
Start the frontend development server:
bash
Copy code
ng serve
Open your web browser and navigate to http://localhost:4200 to view the application.
Usage
Use the application to manage your todo list by adding, updating, and deleting tasks.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
