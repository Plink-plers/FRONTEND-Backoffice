import Gnb from "@/shared/Gnb";
import TabMenu from "@/shared/TabMenu";
import { ReactNode } from "react";

export default function ManagementLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 3. [관리자]회원 관리 페이지 - 회원 승인 요청 탭 */}
      <Gnb />
      <TabMenu />
      {children}
    </div>
  )
}