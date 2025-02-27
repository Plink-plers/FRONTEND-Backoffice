"use client";

import { useState, useEffect } from 'react';
import Gnb from "@/shared/Gnb";
import TabMenu from "@/shared/TabMenu";
import Dashboard from "@/shared/Dashboard";
import Pagination from "@/shared/Pagination";

import { Container } from '@/styles/approval-request/style';

export default function Management() {

  return (
    <Container>
      <Dashboard selectedTab={"회원 승인 요청"} />
      <Pagination current_page={5} total_page={13}
        onPageChange={()=>console.log('click')}
      />
    </Container>
  );
}
