import React from 'react'

const App = () => {
  return (
    <div className='sayt'>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">meta it school</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Biz haqimizda</a></li>
      <li>
        <details>
          <summary>Kurslar</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Aloqa uchun</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Kirish</a>
  </div>
</div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.freepik.com/premium-photo/sci-futuristic-fi-abstract-background_1006786-4317.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Meta It School</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Kursni boshlash</button>
    </div>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Biz haqimizda!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Batafsil</button>
    </div>
  </div>
</div>
<div className="stats shadow w-full">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Tajriba</div>
    <div className="stat-value">9+</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Oquvchilar</div>
    <div className="stat-value">4,200</div>
  </div>

  <div className="stat w-full">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">ish topganlar</div>
    <div className="stat-value">500+</div>
  </div>
</div>
<h1 className='text-center text-4xl font-bold mb-10 mt-10'>Kurslarimiz</h1>
<div className='kurslar grid grid-cols-3 gap-5 mb-10 mt-10 justify-items-center'>
  
  <div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.c19QlEHy5wl1Jizu6bUDSQHaD4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Frontend</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://th.bing.com/th?id=OIF.qE3rmKfcfyghj4r%2b%2bLoAiQ&w=318&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Backend</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://th.bing.com/th/id/OIF.6A5Reu4Xd7Lb3D8Zq6U7Og?w=344&h=175&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cyber Security</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://th.bing.com/th/id/OIP.lbDMlFEVsZGZjmJiRnxBuwHaEJ?w=314&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Grafik dezayn</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://th.bing.com/th/id/OIP.oenB-QIFzDZlAdJ3e0dHEwHaEK?w=305&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Smm</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">AI / Machine Learning Engineer</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default App
