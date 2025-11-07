# 🚀 ArulDevfolio: Modern Portfolio Website

This is the code repository for my personal portfolio website, named **ArulDevfolio**. It is built using **React** (via **Vite**) and styled exclusively with **Tailwind CSS** for a highly modular, responsive, and performance-optimized user experience.

---

## ✨ Features

* **Responsive Design:** Fully responsive and accessible on all devices (mobile, tablet, desktop).
* **Component-Based:** Built with modern React Functional Components and Hooks for high reusability and maintainability.
* **Utility-First Styling:** Uses **Tailwind CSS** for rapid styling, resulting in a lean production CSS file.
* **Smooth Scrolling & Animation:** Implements **Lenis** for smooth native-like scrolling and a custom JavaScript **ScrollStack** component for scroll-triggered pinning effects.
* **Performance Optimized:** Utilizes stability techniques (like integer rounding for transforms) to minimize jitter and enhance GPU performance.
* **Animated Counter:** Features a custom `AnimatedCounter` component using `react-countup` to showcase dynamic statistics.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React (Vite)** | UI development and fast module bundling. |
| **Styling** | **Tailwind CSS** | Utility-first, highly configurable CSS framework. |
| **Smooth Scrolling** | Lenis (studio-freight/lenis) | Native-like scroll physics (smooth scrolling is disabled for stability). |
| **Counter Animation** | `react-countup` | Dynamic numerical animations. |

---

## 🏃 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

You need **Node.js** (version 16.x or newer) installed to run the Vite development environment.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd aruldevfolio-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Run Locally:**
    Start the local development server using Vite's command.
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will be accessible at `http://localhost:[PORT]`.

---

## ⚙️ Custom Component Breakdown

The project contains several unique and complex components crucial for the design:

| Component | Description | Key Styling/Logic |
| :--- | :--- | :--- |
| **`ScrollStack`** | Implements the unique "project stacking" visual effect where cards pin and layer on top of each other. | Custom calculation for `translateY`, `scale`, and `rotate` tied to `scrollTop`. Stability achieved by using **`Math.floor()`** and removing conflicting CSS properties. |
| **`ProjectCard`** | Displays individual project/testimonial data in a clean, two-column, dark-mode layout. | Uses Tailwind's **flex utilities** (`w-5/12`, `w-7/12`) for stable column splitting. Styled with `bg-zinc-900`. |
| **`AnimatedCounter`** | Displays dynamic, counting numbers for statistics. | Uses React's `map()` function and requires a **stable `key` prop** on the outermost element for correct rendering. |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

***

**Contact:** [Arul Deshwal / aruldeshwal1@gmail.com / https://www.linkedin.com/in/arul-deshwal-1367b1327/]