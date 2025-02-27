// 3. [관리자]회원 관리 페이지 - 관리 상세 페이지

"use client";

import { useState, useEffect } from "react";

import Category from "@/shared/Category";

export default function ManagementPage(){
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
            회원 관리 페이지 - 관리 상세 페이지 :)
            <Category 
                onClick={handleFileCategory}
                selectedFiled={fileClick}
            />
        </>
    )
}