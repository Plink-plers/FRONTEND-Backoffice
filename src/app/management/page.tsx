"use client";

import { useState, useEffect } from 'react';
import Gnb from "@/shared/Gnb";
import TabMenu from "@/shared/TabMenu";
import Dashboard from "@/shared/Dashboard";
import Pagination from "@/shared/Pagination";

export default function Management() {

  return (
    <div>
      <Dashboard selectedTab={"회원 승인 요청"} />
    </div>
  );
}
