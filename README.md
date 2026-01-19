# Rick and Morty Characters Explorer

A full-stack application featuring a **NestJS GraphQL API** and a **Next.js** frontend, allowing users to explore characters from the Rick and Morty universe. 

---

## 🛠️ Tech Stack

### Backend
- **Framework:** NestJS (Node.js)  
- **API:** GraphQL (Code-first approach)  
- **ORM:** Prisma  
- **Database:** PostgreSQL (Hosted on Neon DB)  

### Frontend
- **Framework:** Next.js 16 (App Router)  
- **Data Fetching:** TanStack Query & GraphQL Request  
- **Styling:** Tailwind CSS  

---

## 📦 Installation & Setup

### 1️⃣ Backend Setup

```bash
cd packages/backend/
npm i
npx prisma generate
cd ../../
npm run back-dev
```

### 2️⃣ Frontend Setup

```bash
cd packages/frontend/
npm i
cd ../../
npm run front-build
npm run front-dev
```

---

## 📊 GraphQL Queries

### $\color{LimeBlue}{💠 Get\ All\ Characters}$

```graphql
query {
  characters {
    id
    name
    image
    gender
  }
}
```

### $\color{LimeBlue}{💠 Get\ One\ Character}$

```graphql
query {
  character(id: "string") {
    name
    status
    species
    origin {
      name
    }
    episodes {
      name
      episode
    }
  }
}
```
