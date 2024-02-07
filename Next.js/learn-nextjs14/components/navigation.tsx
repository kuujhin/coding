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

//use-client가 없는 컴포넌트들은 hydrate되지 않음. 그럴 필요가 없기 때문 => Server Component
//client에서 interactive해야하는 컴포넌트들은 use-client를 통해 hydrate 시켜야함
//use client의 의미: Render at backend, Hydrate&Interactive at frontend
//다운로드해야하는 JS코드의 양을 줄여줌.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
