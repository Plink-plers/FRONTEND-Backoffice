"use client";

import styled from '@emotion/styled';

/* 네비게이션 요소 불러옴 */
import Filed from './Filed';
import { ApprovalFile } from '../constant/ApprovalRequestList';


interface CategoryProps {
    selectedFiled : string;
    onClick : (category: string)=>void;
}

const Category:React.FC<CategoryProps>=({onClick,selectedFiled})=>{

    return(
        <Container>
            {ApprovalFile.map((tag,index)=>(
                <Filed 
                    key={index} 
                    tag={tag}
                    state={selectedFiled === tag} // 선택된 filed만 active 상태 유지
                    onClick={()=>{onClick(tag)}}
                />
            ))}
        </Container>
    )
}

export default Category;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    /* margin: 0 5rem; */
    
`;