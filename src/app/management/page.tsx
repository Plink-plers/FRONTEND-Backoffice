// 3. [관리자]회원 관리 페이지 - 회원 승인 요청 탭

"use client";

import Pagination from "@/shared/Pagination";

export default function Management(){

    return(
        <>
            회원 관리 페이지 : )
            <Pagination 
                current_page={3} 
                total_page={10}

                onPageChange = {()=>console.log('click!')}
            />
        </>
    )
}