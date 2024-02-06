// Server Side Render vs. Client Side Render
// Backend에서 먼저 컴포넌트와 페이지가 render된 후 JS를 적용한 html을 보내줌

// javascript를 비활성화하고 페이지 이동을 하면 새로고침이 됨
// javascript를 활성화하고 페이지 이동을 하면 새로고침없이 굉장히 빠르게 바뀜
// React가 Hydrated되었다.
// anchors tag가 react component로 변환된 것
// react가 끼어들어 페이지 전체를 reload하지 않음
// Link component가 client side only navigation을 수행함

// /about-us ---> dummy HTML from backend ---> :) ---> initialize react application (make dummy HTML interactive)
// javascript가 load 안되있는 경우 버튼의 eventListener가 연결이 안되어 있는 상태

// Hydration         normal HTML                       React Application
// /about-us ---> <button>0</button> ---> :) ---> <button onClick={}></button>

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
