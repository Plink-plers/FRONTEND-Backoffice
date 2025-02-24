import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 8. [관리자]PT 심사 페이지 - 프레젠테이션 승인 요청 탭 */}
      {children}
    </div>
  )
}