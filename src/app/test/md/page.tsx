// 'use client'
import React, { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';

export default function test_md() {
  // const [value, setValue] = React.useState("**Hello world!!!**");

  // useEffect(() => {
  //     loadData();
  // })

  // const loadData = async () => {
  //     const res = await axios.get('/page/sample.md');
  //     console.log(res.data);
  //     setValue(res.data);
  // }
  return (
    <div className="container">
      {/* <MDEditor
        value={value}
        onChange={setValue}
      /> */}
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </div>
  );
}
