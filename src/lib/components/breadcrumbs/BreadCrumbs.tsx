'use client'
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  group : string,
  slug : string,
}

interface ParentInfo {
  url: string;
  label: string;
}

const BreadCrumbs = (props:Props) => {

  const data:ParentInfo[] = [{url:"/",label:"home"},{url:"/"+props.group,label:props.group},{url:"/"+props.group+"/"+props.slug,label:props.slug}];
  return (
    <>
      <BreadCrumbsStyle >
        {data?.map((one,index)=>{
          return <li key={index} className={"item"}><Link href={one.url}>{one.label}</Link></li>
        })}
      </BreadCrumbsStyle>
    </>
  );
};

export default BreadCrumbs;

const BreadCrumbsStyle = styled.ul`
  padding-left : 20px;
  margin-bottom: 20px;
  display: flex;
  .item + .item{
    position: relative;
    padding-left:30px;
  }
  .item + .item:before{
    content: ">";
    position: absolute;
    top:0;
    left:10px;
  }
`;




