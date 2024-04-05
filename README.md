## MarkDown 설치 패키지

- remark
- remark-html
- gray-matter
- github-markdown-css

markdown demo project 참고
https://github.com/emanuelefavero/nextjs-app-router-blog

## MD파일에 변수 선언 가능

gray-matter 기능

```
md파일 상단에 아래 처럼 선언
===========================
---
title: 'MarkDown Sample Page'
date: '2020-01-02'
---
```

```
코드 상에서 아래처럼 변수 접근 가능
================================
const matterResult = matter(markdown)
title = matterResult.data.title;
date = matterResult.data.date;
```

## MD파일 HTML 적용시 스타일

import 'github-markdown-css';
markdown-body라는 class명 밑으로 markdown 넣으면 css 먹음

```
    <div className={"markdown-body"} >
        <div
            className={"text-gray-600"}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    </div>
```


## 컨텐츠 제작 관련
1. public/content폴더에 md파일 생성
- 파일명 언더바(_) 앞에가 페이지 조회시 Key값  
ex) {UniqueKey}_{파일명}.md
2. 글 등록 및 카테고리 달아주기
- src/api/content.ts에 md파일에 대해서 추가 필요

```
const contentDict: { [key: number]: ContentDictType } = {
  1: { category: eCategory.KEYBOARD, fileName: '1_sample.md', title: '', date: new Date('2024-04-04'), content: '' },
};
``` 
- 추후 자동화 예정
3. 제목이랑 생성일 변수화
---
title: 'Keyboard 제목'
date: '2020-01-02'
---
- 글 내용 가져오고 싶을때
```
    const contentData = await getContentData(1);
    console.log("contentData : ", contentData);
```
```
    <h1>{contentData.title}</h1>
    <div>{contentData.date}</div>
    <div className={"markdown-body"} dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
```