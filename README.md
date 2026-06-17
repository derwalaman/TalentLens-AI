# 🚀 TalentLens AI

<p align="center">

AI-Powered Recruitment Intelligence Platform

Analyze • Match • Compare • Rank • Shortlist Candidates Using AI

</p>

<p align="center">

<a href="http://51.20.56.187">🌐 Live Demo</a> •
<a href="https://github.com/derwalaman/TalentLens-AI">📂 Repository</a>

</p>

---

## 📌 Overview

TalentLens AI is a full-stack AI-powered recruitment platform designed to automate resume screening, candidate evaluation, ATS scoring, semantic matching, candidate comparison, and intelligent hiring recommendations.

The platform helps recruiters significantly reduce manual screening efforts by leveraging:

- Resume Parsing
- Semantic Search
- Vector Embeddings
- FAISS Similarity Matching
- AI Candidate Insights
- ATS Scoring
- Candidate Ranking
- Recruiter Analytics Dashboard

Instead of manually reviewing hundreds of resumes, recruiters can upload resumes and job descriptions to instantly identify the most suitable candidates.

---

# 🌐 Live Deployment

### Public URL

```txt
http://51.20.56.187
```

### Deployment Stack

```txt
AWS EC2
Ubuntu 24.04
PM2
Nginx Reverse Proxy
FastAPI
Next.js
```

---

# ✨ Core Features

---

## 📄 Resume Parser

Upload a resume and extract:

- Candidate Information
- Education
- Experience
- Projects
- Technical Skills
- Soft Skills
- Tools & Technologies

### Extracted Sections

```txt
Name
Education
Experience
Projects
Skills
Technical Skills
Soft Skills
Tools
Responsibilities
```

---

## 🎯 ATS Resume Matcher

Compare a resume against a Job Description.

### Generated Metrics

- ATS Score
- Semantic Match Score
- Skill Match Score
- Missing Skills
- Skill Coverage
- Recommendations

### Benefits

- Faster screening
- Objective candidate evaluation
- Better candidate shortlisting

---

## ⚖️ Resume Comparison System

Compare two resumes side-by-side.

### Comparison Metrics

- ATS Score
- Semantic Match
- Skill Match
- Experience
- Education
- Projects
- Candidate Strengths
- Skill Gaps

### Additional Features

- Winner Detection
- Head-to-Head Analysis
- Skill Matrix
- Skill Gap Analysis
- AI Summary

---

## 🏆 Candidate Ranking System

Upload multiple resumes simultaneously.

The platform automatically:

- Scores each candidate
- Ranks candidates
- Generates recommendations
- Creates hiring insights

### Ranking Output

```txt
Rank #1
Rank #2
Rank #3
...
```

### Generated Data

- ATS Score
- Semantic Score
- Skill Score
- Recommendation
- Candidate Summary

---

## 📊 Recruiter Dashboard

A recruiter-focused analytics dashboard.

### Dashboard Features

- Candidate Leaderboard
- Top Candidate Identification
- Skill Distribution Analysis
- Candidate Statistics
- ATS Analytics
- Hiring Insights

---

## 🤖 AI Candidate Summary

TalentLens generates recruiter-friendly summaries.

### Summary Includes

- Overall Fit
- Recommendation Level
- Experience Strength
- Project Strength
- Skill Strength
- Suitable Roles

Example:

```txt
Overall Fit:
Strong

Recommendation:
Strongly Recommended

Suitable Roles:
Full Stack Developer
Backend Developer
AI Engineer
```

---

# 🧠 AI & NLP Pipeline

TalentLens follows a complete AI recruitment workflow.

```txt
Resume Upload
        ↓
PDF Parsing
        ↓
Resume Text Extraction
        ↓
Resume Information Extraction
        ↓
Job Description Parsing
        ↓
Skill Extraction
        ↓
Embedding Generation
        ↓
Semantic Similarity Search
        ↓
ATS Scoring
        ↓
AI Insights
        ↓
Recommendations
        ↓
Ranking / Comparison
```

---

# 🏗️ System Architecture

## Frontend Layer

```txt
Next.js
React
Tailwind CSS
Lucide Icons
```

---

## Backend Layer

```txt
FastAPI
Python
Uvicorn
```

---

## AI Layer

```txt
Sentence Transformers
Vector Embeddings
FAISS
Gemini AI
```

---

## Deployment Layer

```txt
AWS EC2
Ubuntu
PM2
Nginx
```

---

# ⚙️ ATS Scoring Methodology

Final score is generated using:

```txt
70% Semantic Matching

+

30% Skill Matching
```

### Semantic Matching

Uses:

```txt
Sentence Transformers
Embeddings
FAISS Similarity Search
```

### Skill Matching

Uses:

```txt
JD Skills
vs
Resume Skills
```

to determine:

```txt
Matched Skills
Missing Skills
Skill Coverage
```

---

# 🔥 Major Modules

---

## Resume Parsing Module

### Input

```txt
PDF Resume
```

### Output

```json
{
  "education": [],
  "experience": [],
  "projects": [],
  "skills": []
}
```

---

## Job Description Parsing Module

Extracts:

```txt
Job Title
Technical Skills
Tools
Responsibilities
Soft Skills
```

---

## Semantic Matching Engine

Uses:

```txt
Sentence Transformers
```

to generate:

```txt
Resume Embedding
JD Embedding
```

and computes similarity.

---

## Skill Matching Engine

Identifies:

```txt
Matched Skills
Missing Skills
Skill Coverage
```

---

## Recommendation Engine

Generates:

```txt
Candidate Recommendations
Learning Suggestions
Hiring Insights
```

---

# 📂 Project Structure

```txt
TalentLens-AI/

├── talentlens-frontend/
│
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── public/
│   └── styles/
│
├── talentlens-backend/
│
│   ├── app/
│   │
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── main.py
│
│   ├── requirements.txt
│   └── venv/
│
└── README.md
```

---

# 💻 Tech Stack

## Frontend

- Next.js 16
- React
- Tailwind CSS
- JavaScript
- Lucide React

## Backend

- FastAPI
- Python
- Uvicorn

## AI / ML

- Sentence Transformers
- FAISS
- Google Gemini
- Embeddings
- Semantic Search

## Deployment

- AWS EC2
- Ubuntu 24.04
- PM2
- Nginx

---

# 🚀 Local Installation

## Clone Repository

```bash
git clone https://github.com/derwalaman/TalentLens-AI.git

cd TalentLens-AI
```

---

# Backend Setup

```bash
cd talentlens-backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt
```

Create:

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

Run:

```bash
uvicorn app.main:app --reload
```

Backend:

```txt
http://localhost:8000
```

---

# Frontend Setup

```bash
cd talentlens-frontend

npm install
```

Create:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

Run:

```bash
npm run dev
```

Frontend:

```txt
http://localhost:3000
```

---

# ☁️ AWS Deployment

TalentLens AI is deployed on AWS EC2.

---

## EC2 Configuration

```txt
Ubuntu 24.04
t2.micro
18 GB Storage
```

---

## Backend Deployment

```bash
pm2 start \
"venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000" \
--name talentlens-backend
```

---

## Frontend Deployment

```bash
npm run build

pm2 start npm \
--name talentlens-frontend \
-- start
```

---

## PM2 Persistence

```bash
pm2 save

pm2 startup
```

---

## Nginx Reverse Proxy

```nginx
server {

    listen 80;

    server_name _;

    location / {

        proxy_pass http://127.0.0.1:3000;

    }

    location /api/ {

        proxy_pass http://127.0.0.1:8000/;

    }

}
```

---

# 📈 Performance Benefits

TalentLens AI helps recruiters:

✅ Reduce resume screening time

✅ Improve candidate matching

✅ Automate candidate ranking

✅ Identify skill gaps

✅ Make data-driven hiring decisions

✅ Improve recruitment efficiency

---

# 🔮 Future Enhancements

### Phase 2

- User Authentication
- Recruiter Accounts
- Candidate Database
- Resume History

### Phase 3

- PostgreSQL Integration
- Candidate Tracking System
- Email Notifications
- Team Collaboration

### Phase 4

- Docker
- GitHub Actions CI/CD
- Kubernetes
- SSL & Custom Domain

---

# 👨‍💻 Developer

## Aman Derwal

B.Tech Computer Science & Engineering

National Institute of Technology Delhi

### GitHub

https://github.com/derwalaman

### Repository

https://github.com/derwalaman/TalentLens-AI

### Live Demo

http://51.20.56.187

---

# ⭐ Support

If you found this project useful, please consider giving it a star ⭐.

It helps improve visibility and supports future development.

---

## License

This project is licensed under the MIT License.