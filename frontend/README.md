
<<<<<<< HEAD

---

# Fram-Vision AI

**Fram-Vision AI** is a responsive web application built to provide a seamless user experience through a modern UI. It integrates a Django backend with a React frontend to deliver AI-based solutions. This guide will help you set up and run the project locally on your machine.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Setup Instructions](#setup-instructions)
   - [Backend Setup (Django)](#backend-setup-django)
   - [Frontend Setup (React)](#frontend-setup-react)
5. [Usage](#usage)
6. [Contribution Guidelines](#contribution-guidelines)
7. [Commit History](#commit-history)

## Project Overview

Fram-Vision AI combines advanced AI solutions in agriculture and environmental monitoring through an intuitive web interface. Our solution aims to assist users in managing and monitoring their farming needs efficiently, supported by interactive features and dynamic UI enhancements.

## Technologies Used

- **Frontend**: React, JavaScript, CSS
- **Backend**: Django, Django REST Framework, Python
- **Database**: SQLite (default for development)
- **Other Tools**: Axios (for HTTP requests), Git for version control

## Getting Started

To get a local copy up and running, follow the instructions below.

### Prerequisites

- **Python 3.6+**: Required for the Django backend.
- **Node.js and npm**: Required for the React frontend.
- **Git**: To clone the repository.

## Setup Instructions

### 1. Clone the Repository

git clone <repository-url>
cd fram-vision-ai

### 2. Backend Setup (Django)

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Create a virtual environment**:

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:
   - Windows:
     venv\Scripts\activate
   - macOS/Linux:
     source venv/bin/activate
     step:-1
     D:\FramVisionAi\fram-vision-ai>dir (Enter)
     Step:-2
     09-11-2024  09:27    <DIR>          .
06-10-2024  11:43    <DIR>          ..
09-11-2024  08:48    <DIR>          Backend
09-11-2024  08:50    <DIR>          frontend
               0 File(s)              0 bytes
               4 Dir(s)  253,760,598,016 bytes free
** Show This **
    step:-3

    D:\FramVisionAi\fram-vision-ai>cd Backend
    
    step:-4

    D:\FramVisionAi\fram-vision-ai\Backend> env\Scripts\activate (Enter)    ( For  My Case vnb is 'env'  )
    
    step:-5

   
    (env) D:\FramVisionAi\fram-vision-ai\Backend>pip  freeze (Enter)   
    
    asgiref==3.8.1
    Django==5.1.3
    django-cors-headers==4.6.0
    djangorestframework==3.15.2
    sqlparse==0.5.1
    tzdata==2024.2    

** Show This All Modules , When we  Work useing of python we always activate virtual environment ** 
4. **Install dependencies and apply migrations**:
   pip install -r requirements.txt
   python manage.py migrate
5. **Create a superuser (optional)**:
   python manage.py createsuperuser
6. **Start the Django development server**:
   (env) D:\FramVisionAi\fram-vision-ai\Backend>python manage.py runserver (Enter)
   The backend server will now be running on `http://127.0.0.1:8000`.
7. **How To Run This React On Your Mobile Phone**
    Go the Terminal Section And Select Ports, Then Select The Forward Port and Enter The Port No
    3000 , and it  give a link or then it paste it on your Web Browser now you see your website in
    your mobile Browser.
### 3. Frontend Setup (React)

1. **Navigate to the frontend folder**:
   cd ../frontend
2. **Install necessary dependencies**:
   npm install
   npm install axios
3. **Start the React development server**:
   npm start
   The frontend server will now be running on `http://localhost:3000`.

## Usage

- Visit `http://localhost:8000` for the Django backend API.
- Access the React frontend on `http://localhost:3000` to interact with the application.
- Log in with your superuser credentials (if created) to access admin features.

## Contribution Guidelines

We welcome contributions to Fram-Vision AI! Here are some ways you can help:

- Report bugs and suggest features through the Issues tab.
- Contribute to the codebase by following our coding standards and submitting pull requests.
- Ensure to run tests and lint code before submitting.

## Commit History

- **Update 2**: Responsive design adjustments.
- **Update 3 (08.01.2024)**: Revamped UI.
- **Update 4 (07.17)**: Minor UI changes.
- **Update 5 (09.10.2024)**: Pushed new UI enhancements.
- **Update 6 (24.10.2024)**: Tweaked the UI interface.
- **Update 7 (05.11.2024)**: Set up Django framework.
- **Update 8 (09.11.2024)**: Created and moved all files into `frontend` folder.
- **Update 9(17.11.2024)** :  Add  Back Buttons On Card Pages . 
- **Update 10(23.11.2024)** : properly complete The weather Page Or Add The Back Button.
-**Update 11(26.11.2024)** :  Today I Create The  Project About In AboutUs Page.:
-**Update 12(28.11.2024)** :  Today I  Add  Reset Password Button On Login/Register Page .:

---
"# FramVisionAi" 
=======
Hii I am Sayan Majumder , Today I will Make The Ui Part Of This Project.
2 nd update  Responsive .
3rd update Today 8.01.2024 . I Update The old Ui. 
4th update 7.17 changes of ui.
Today Date Is 9.10.2024 . Now I Push New Ui.
Today Date Is 24.10.2024 . I made some changes on ui interface . 
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
