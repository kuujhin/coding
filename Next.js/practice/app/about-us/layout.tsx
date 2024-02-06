// 해당 폴더 및 하위 폴더 페이지에 모두 레이아웃 적용
// 여러 레이아웃 파일들은 서로 상쇄되지 않고 중첩됨

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}
