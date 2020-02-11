/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
/* eslint-disable */
 import data from './data';
 
import Markdown from './Markdown'
import Card from './Card'
import Section from './Section'
import Tag from './Tag'

import React from 'react';


const Col = ({ className, children }) => {
  return <div className={className} style={{border: "1px solid black",
  padding: "5px", display: "flex", "flex-direction": "column"}} >{children}</div>;
};

const Row = ({ valign, className, children }) => {
  return <div className={className} style={{border: "1px solid black",
  padding: "5px", display: "flex", "flex-direction": "row"}} >{children}</div>;
};


export default function HomePage(props) {
  const createRenderList = items => {
    let arr = [],
      cmp = null;
      arr = items.map((item, index) => {
      switch (item.component) {
        case 'Section':
          cmp = (<Section key={index} cmp={item.props}>{item.props.children ?createRenderList(item.props.children) : ""}</Section>);
          break;

        case 'Col':
          cmp = (<Col key={index} cmp={item.props}>{item.props.children ?createRenderList(item.props.children) : ""}</Col>)
          break;
        case 'Row':
          cmp = (<Row key={index} cmp={item.props}>{item.props.children ?createRenderList(item.props.children) : ""}</Row>);
          break;
        case 'Card':
          cmp = (<Card key={index} cmp={item.props}>{item.props.children ?createRenderList(item.props.children) : ""}</Card>);
          break;
        case 'Markdown':
          cmp = (<Markdown key={index} cmp={item.props}></Markdown>);
          break;
        case 'Tag':
          cmp = (<Tag key={index} cmp={item.props}></Tag>);
          break;
        default:
      }
      return cmp;
    })
    return arr;
  }

  return (
    <h1>
      {createRenderList(data)}
    </h1>
  );
}
