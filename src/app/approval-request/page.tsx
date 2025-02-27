// 8. [관리자]PT 심사 페이지 - 프레젠테이션 승인 요청 탭

"use client";

import Dashboard from "@/shared/Dashboard";
import Pagination from "@/shared/Pagination";

import { Container } from '../../styles/approval-request/style';

export default function Approval() {

    return (
        <Container>
            <Dashboard selectedTab={"프레젠테이션 승인 요청"} />
            <Pagination current_page={3} total_page={10}
                onPageChange={()=>console.log('click')}
            />
        </Container>
    )
}