# Online Compiler

An online compiler built using **React.js** for the frontend and **FastAPI** with Docker for the backend. The compiler supports multiple programming languages, including Python, C, C++, and Java. It allows users to write, compile, and execute code directly from their browser.

## Features

✅ Supports Python, C, C++, and Java
✅ Real-time code execution with input support
✅ Displays program output or error messages
✅ User-friendly interface built with React.js
✅ Backend containerized with Docker for secure execution
✅ Hosted frontend on **GitHub Pages** and backend on **Heroku**

## Technologies Used

### Frontend:
- **React.js** (with functional components and hooks)
- **Axios** for API communication
- **CSS** for styling

### Backend:
- **FastAPI** (Python web framework)
- **Docker** (Containerized code execution)
- **Gunicorn & Uvicorn** (For deploying FastAPI on Heroku)

## Setup and Installation

### Prerequisites
- Node.js & npm
- Python (3.8 or higher)
- Docker
- Heroku CLI (for deployment)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/{your-username}/{repository-name}.git
cd {repository-name}
```

### 2️⃣ Run the Frontend (React.js)
```bash
cd frontend
npm install
npm start
```
The frontend will be accessible at `http://localhost:3000`.

### 3️⃣ Run the Backend (FastAPI with Docker)
```bash
cd backend
pip install -r requirements.txt
docker build -t online-compiler .
docker run -p 8000:8000 online-compiler
```
The backend will be accessible at `http://localhost:8000`.

## Deployment

### Deploy Frontend (React) to GitHub Pages
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Deploy Backend (FastAPI) to Heroku
```bash
heroku create your-app-name
git push heroku master
heroku open
```

## API Endpoints

### **Submit Code** (POST `/submit`)
```json
{
  "language": "python",
  "code": "print('Hello, World!')",
  "stdin": ""
}
```

### **Response Example**
```json
{
  "output": "Hello, World!"
}
```

## Future Enhancements
- Add user authentication
- Provide code execution time and memory usage
- Improve UI with a rich code editor (e.g., Monaco Editor)

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

