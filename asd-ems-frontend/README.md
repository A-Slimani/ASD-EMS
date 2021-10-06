---
noteId: "1e7cece0242b11ecaa01572af0f4567d"
tags: []

---

# Getting Started with Create React App

## About EMS project
This project is an Employee Management System (EMS) created by ASD-Group 6 using Node.js React. The system aims to provide business employer with an environement to manage their employees. 

There are 2 types of users in the system known as 'Admin' (employer) who is categorise into the HR (Human Resource) employment type, and the other user is 'Employee' who is in the OP (Operation), FN (Finance) and MK (Makerting) employement type.

Within the EMS system, Admin enables to manage, create, view, update, remove and edit employee's information, payroll, applications, complaints and concerns. Whilst, Employee able to update their information, view submitted application, concerns and complaints.

The following instructions instruct user on how to run the project/system:

## Instructions

In the project directory, you can run:

### `cd ASD-EMS/asd-ems-frontend` 

To navigate to the project file/directory

Note: does not need to execute this command if already in the 'asd-ems-frontend' file/directory

### `npm install`

To install the required packages the commands to run the EMS react project

### `npm start`

To runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

A login page can be seen and user will be able to interact with the system after logged into the system

User can use the sample login details to the system:
-- admin
    username: JonJones@EMSHR
    password: jon123

-- employee
    username: JonJones@EMSMK
    password: big99

However, before interacting with the system, ensure to follow the steps below to run the system database

### `npm install json-server`

To install the local database server which will enable to store data after each function is executed

### `npm run server`

Runs the server for the project.
Open [http://localhost:3001](http://localhost:3001) to view the local database in the browser.

It is not necessary to open and view the database in the browser, the purpose of this command is to run the database
for the system to function

### `npm run test`

There are a few input validation test cases for R1 prototype that can be executed using this command
for system's unit testing purpose

