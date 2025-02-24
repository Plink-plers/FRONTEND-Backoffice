import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 1.2 [관리자] 회원가입/로그인 페이지 */}
      {children}
    </div>
  )
}