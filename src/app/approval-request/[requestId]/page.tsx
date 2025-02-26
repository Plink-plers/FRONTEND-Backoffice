// 8. [관리자]PT 심사 페이지 - 심사 상세 페이지

"use client";

import { useState,useEffect } from "react";
import Category from "@/shared/Category";


export default function ApprovalPage() {
    const [fileClick, setFileClick]=useState<string>('1분 프레젠테이션');
    const handleFileCategory=(file:string)=>{
        setFileClick(file);
        console.log('📝 선택한 파일명 : ', file);
    }

    useEffect(()=>{
        setFileClick('1분 프레젠테이션');
    },[])
    return(
        <>
            PT 심사 페이지 - 상세 심사 페이지 :)
            <Category 
                onClick={handleFileCategory}
                selectedFiled={fileClick}
            />
        </>
    )
}

