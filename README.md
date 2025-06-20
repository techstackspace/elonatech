

## Summary Comparison

| Method               | Runs On                    | When It Runs                           | Use Case                                  |
| -------------------- | -------------------------- | -------------------------------------- | ----------------------------------------- |
| `getStaticProps`     | **Server at build time**   | **Build time (static generation)**     | Static content, blog posts, docs          |
| `getServerSideProps` | **Server at request time** | **Every request**                      | Dynamic data that changes often           |
| `getInitialProps`    | **Client + Server**        | Server (on first request), then client | Legacy usage, works on pages and \_app.js |

---

## 1. `getStaticProps` – Static Site Generation (SSG)

* Runs **at build time**
* Good for pages that don’t change often
* Page is generated **once** and reused for all users

```js
// pages/blog.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
```

### Use When:

* Data doesn’t change frequently
* SEO is important (fast loading, pre-rendered)

---

## 🌐 2. `getServerSideProps` – Server-Side Rendering (SSR)

* Runs **on the server on every request**
* Ensures fresh data
* Slower than static props because it runs on every load

```js
// pages/dashboard.js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/user');
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
```

### ✅ Use When:

* Data must always be up-to-date (e.g. auth, dashboards)
* You need request-specific data (e.g., cookies, headers)

---

## 🧳 3. `getInitialProps` – (Legacy, Not Recommended)

* Runs **on server during SSR** and **on client during navigation**
* Works in both `pages/_app.js` and individual pages
* Not supported in **Static Site Generation**
* Increases bundle size

```js
// pages/profile.js
Profile.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.example.com/profile');
  const data = await res.json();

  return { profile: data };
};
```

### ⚠️ Avoid When Possible

Use `getStaticProps` or `getServerSideProps` instead—they are more efficient and better for modern Next.js.

---

## ✅ When to Use Each (Quick Guide)

| Situation                                   | Use                        |
| ------------------------------------------- | -------------------------- |
| Blog post, product page, content site       | `getStaticProps`           |
| Authenticated dashboard, user-specific data | `getServerSideProps`       |
| Shared layout data in `_app.js` (rare)      | `getInitialProps` (legacy) |

---

### 🧠 Tip

If you're using Next.js 13+ with the **App Router**, you'll use **`fetch()` inside `async` components or server actions** instead of these functions.
