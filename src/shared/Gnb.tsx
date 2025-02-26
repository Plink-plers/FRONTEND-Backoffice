"use client";

import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";


const Gnb = () => {

    const router = useRouter();

    return(
        <Container>
            <NavigationArea>
                <img src="/Logo.svg" onClick={()=>router.push('/')}/>
            </NavigationArea>
            <IconArea>
                <Button>
                    <Icon src="/icons/Logout.svg" />
                </Button>
            </IconArea>
        </Container>
    )
};

export default Gnb;

const Container = styled.div`
    z-index: 10;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 5rem;
    width: 100%;
`;

const NavigationArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img{
        width: 5.25rem;
        height: 2.5rem;
        aspect-ratio: 21/10;
    }

    gap: 2.5rem;
`;

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;

    background-color: transparent;
`;


const IconArea=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

const Icon = styled.div<{src:string;}>`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--gray-scale-70);

    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image:url(${({ src }) => src});

    :hover{
        background-color: var(--gray-scale-80);
        transition: all 0.3s;
    }
    :active{
        background-color: var(--gray-scale-80);
        transition: all 0.3s;
    }
`;